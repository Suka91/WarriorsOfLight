/**
 * Created by sukab on 1/17/2017.
 */
$(document).ready(function(){

    var gCtx = null;
    var gCanvas = null;

    var imageData = null;
    var ii=0;
    var jj=0;
    var c=0;


    function dragenter(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function dragover(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    function drop(e) {
        e.stopPropagation();
        e.preventDefault();

        var dt = e.dataTransfer;
        var files = dt.files;

        handleFiles(files);
    }

    function handleFiles(f)
    {
        var o=[];
        for(var i =0;i<f.length;i++)
        {
            var reader = new FileReader();

            reader.onload = (function(theFile) {
                return function(e) {
                    qrcode.decode(e.target.result);
                };
            })(f[i]);

            // Read in the image file as a data URL.
            reader.readAsDataURL(f[i]);	}
    }

    function read(a)
    {
        alert(a);
    }

    function load()
    {
        console.log("Suka");
        initCanvas(640,480);
        qrcode.callback = read;
        qrcode.decode("meqrthumb.png");
    }

    function initCanvas(ww,hh)
    {

        console.log("Suka1");
        gCanvas = document.getElementById("qr-canvas");
        gCanvas.addEventListener("dragenter", dragenter, false);
        gCanvas.addEventListener("dragover", dragover, false);
        gCanvas.addEventListener("drop", drop, false);
        var w = ww;
        var h = hh;
        gCanvas.style.width = w + "px";
        gCanvas.style.height = h + "px";
        gCanvas.width = w;
        gCanvas.height = h;
        gCtx = gCanvas.getContext("2d");
        gCtx.clearRect(0, 0, w, h);
        imageData = gCtx.getImageData( 0,0,320,240);
    }

    function passLine(stringPixels) {
        //a = (intVal >> 24) & 0xff;

        var coll = stringPixels.split("-");

        for(var i=0;i<320;i++) {
            var intVal = parseInt(coll[i]);
            r = (intVal >> 16) & 0xff;
            g = (intVal >> 8) & 0xff;
            b = (intVal ) & 0xff;
            imageData.data[c+0]=r;
            imageData.data[c+1]=g;
            imageData.data[c+2]=b;
            imageData.data[c+3]=255;
            c+=4;
        }

        if(c>=320*240*4) {
            c=0;
            gCtx.putImageData(imageData, 0,0);
        }
    }

    function captureToCanvas() {
        flash = document.getElementById("embedflash");
        flash.ccCapture();
        qrcode.decode();
    }
    var errorCallback = function(e) {
        console.log('Reeeejected!', e);
    };

    var video = document.querySelector('video');
    var canvas = document.getElementById('qr-canvas');
    var ctx = canvas.getContext('2d');
    var localMediaStream = null;

    function snapshot() {
        if (localMediaStream) {
            //console.log('SNAPPED!!!!');
            ctx.drawImage(video, 0, 0, 300,300);
            // "image/webp" works in Chrome.
            // Other browsers will fall back to image/png.
            //document.querySelector('img').src = canvas.toDataURL('image/webp');
            return qrcode.decode();
        }
        else
        {
            console.log('localMediaStream is null!!!!');
        }
    }

    video.addEventListener('click', snapshot, false);

    // Not showing vendor prefixes.
    navigator.getUserMedia({video: true, audio: false}, function(stream) {
        var video = document.querySelector('video');
        video.src = window.URL.createObjectURL(stream);
        localMediaStream = stream;

        // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
        // See crbug.com/110938.
        video.onloadedmetadata = function(e) {
            // Ready to go. Do some stuff.
        };
    }, errorCallback);
    var user_consump = 0.0;
    var isScanned = false;
    setInterval(intervalFunction, 300);
    function intervalFunction()
    {
        if(!isScanned)
        {
            var snapshot_error = false;
            var snapshot_return;
            try {
                snapshot_return = snapshot();
            }
            catch(err) {
                snapshot_error = true;
            }
            if(!snapshot_error)
            {
                isScanned = true;
                localStorage.setItem("table_id", snapshot_return);
                $("#confirm_order_button").css('visibility', 'visible');
            }
        }
    }
    $("#register_button").click(function(){
        console.log("register_button");
        console.log($("#register-username").val());
        console.log($("#register-password").val());
        $.ajax({
                    url: '/WarriorsOfLight/public/Register',
                    method: 'POST',
                    data: { user_name: $("#register-username").val(), user_password: $("#register-password").val() },
                    success: function (result, textStatus, xhr){
                        if(result.status){
                            $(".signup-section").css('display',"none");
                            $(".main-page").css('display', "block");
                            $(".intro-section").css('padding-top', "150px");
                            console.log("USPESNO");
                        }else{
                            alert(result.message);
                        }
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        console.log("NEUSPESNO");
            }
        });
    });
    $("#login_button").click(function(){
        console.log("login_button");
        console.log($("#login-username").val());
        console.log($("#login-password").val());
        $.ajax({
            url: '/WarriorsOfLight/public/Login',
            method: 'POST',
            data: { user_name: $("#login-username").val(), user_password: $("#login-password").val() },
            success: function (result, textStatus, xhr){
                if(result.status) {
                    document.getElementById("logged-user").innerHTML = result.data;
                    user_consump = result.user_consump;
                    document.getElementById("popust_id_p").innerHTML = " " +result.user_consump +" %";
                    //$("#logged-user").innerHTML = result.data[0].user_name;
                    $(".logging-page").css('display', "none");
                    $(".main-page").css('display', "block");
                    $(".intro-section").css('padding-top', "150px");
                    $('#singout_link').show();
                    fillMenuList();
                }else{
                    alert(result.message);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("NEUSPESNO");
            }
        });
    });
    $("#singout_link").click(function () {
        $.ajax({
            url: '/WarriorsOfLight/public/Logout',
            method: 'GET',
            success: function (result, textStatus, xhr){
                $(".logging-page").css('display', "block");
                $(".main-page").css('display', "none");
                $('#singout_link').hide();
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("NEUSPESNO");
            }
        });
    });
    function fillMenuList() {
        var loggedUser = document.getElementById("logged-user").innerHTML;
        $.ajax({
            url: '/WarriorsOfLight/public/MenuList',
            method: 'GET',
            data: { user_name: loggedUser },
            success: function (result, textStatus, xhr){
                makeMenuTable(result);
                console.log(result.data);
                console.log("USPESNO");
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("NEUSPESNO");
            }
        });
    }
    function makeMenuTable(result){
        var content1= "<h id='h_table'>Coffee and Tea</h>";
        content1+="<table id='coffee-and-tea-table'>"
        content1+= makeMenuTableByType(result.data, "coffee_and_tea");
        content1+="</table>";
        var content2= "<h id='h_table'>Soft drinks</h>";
        content2+="<table id='soft-drinks-table'>";
        content2+= makeMenuTableByType(result.data, "soft_drinks");
        content2+="</table>";
        var content3 = "<h id='h_table'>Wines and Beers</h>";
        content3+="<table id='wines-and-beers-table'>";
        content3+= makeMenuTableByType(result.data, "wines_and_beers");
        content3+="</table>";
        document.getElementById("coffee_and_tea").innerHTML = content1;
        document.getElementById("soft_drinks").innerHTML = content2;
        document.getElementById("wines_and_beers").innerHTML = content3;
    }

    function makeMenuTableByType(data, type) {
        var content = "";
        for(var i=0; i< data.length;i++){
            console.log(data[i].product_type);
            console.log(type);
            if((data[i].product_type === type) && (type === "coffee_and_tea"))
            {
                content +="<tr><td class='name_td'>"+ data[i].product_name+"</td>"+
                    "<td class='cost_td'>"+"  " +data[i].product_cost+"</td>" +
                    "<td class='td_input'><input type='number' class='input_tr' id='"+data[i].product_id+"' min='0' value=''></tr>";
            }
            else if((data[i].product_type === type) && (type === "soft_drinks"))
                {
                content +="<tr><td class='name_td'>"+ data[i].product_name+"</td>"+
                    "<td class='cost_td'>"+"  " +data[i].product_cost+"    "+ "</td>" +
                    "<td class='td_input'><input type='number' class='input_tr' id='"+data[i].product_id+"' min='0' value=''></tr>";
            }
            else if((data[i].product_type === type) && (type === "wines_and_beers"))
            {
                content +="<tr><td class='name_td'>"+ data[i].product_name+"</td>"+
                    "<td class='cost_td'>"+data[i].product_quantity+"/"+data[i].product_cost+"</td>" +
                    "<td class='td_input'><input type='number' class='input_tr' id='"+data[i].product_id+"' min='0' value='' width='10%'></tr>";
            }
        }
        return content;
    }
    $("#confirm_order_button").click(function(){
        console.log("confirm_order_button")
        console.log(user_consump);
        var json = "[";
        var tables = [document.getElementById("coffee-and-tea-table"),
         document.getElementById("soft-drinks-table"),
         document.getElementById("wines-and-beers-table")];
        var number_rows_in_tables = [tables[0].rows.length,tables[1].rows.length,tables[2].rows.length];
        for(var i = 0; i < tables.length; i++) {
            console.log(tables[i]);
            console.log(number_rows_in_tables[i]);
            json += fillJSON(tables[i], number_rows_in_tables[i]);
            if(i<tables.length-1)
            {
                json+=',';
            }
        }
        json+="]";
        console.log(json);
        $.ajax({
            url: '/WarriorsOfLight/public/ConfirmOrder',
            method: 'POST',
            data: { json_string: json, note: $("#note").val(), table_id: localStorage.getItem("table_id"), popust: user_consump},
            success: function (result, textStatus, xhr){
                console.log(result.data);
                buildFinishedOrder(result.data);
                console.log("USPESNO");
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("NEUSPESNO");
            }
        });
    });
    function buildFinishedOrder(order_id){
        localStorage.setItem('order_list_id',order_id);
        $.ajax({
            url: '/WarriorsOfLight/public/OrderList',
            method: 'GET',
            data: { orderId: order_id },
            success: function (result, textStatus, xhr){
                console.log(result);
                content ="<table id='tabela_ordera'><tr><th>Ime proizvoda</th><th>Kolicina</th></tr>";
                for(var i=0; i< result.data.orderList.length;i++){
                        content +="<tr><td class='td_order'>"+ result.data.orderList[i].product_name+"</td>"+
                            "<td class='td_order'>"+result.data.orderList[i].product_amount +
                            "</td></tr>";
                }
                content +="<tr><td>Ukupno sa popustom</td> <td>"+result.data.orderinfo.order_list_cost+"</td>"+ "</table>";

                $('section.main-page').hide();
                $('#ww').hide()
                $('#menu').hide();
                $('#order').show().attr('result-id',order_id).find('#menu-table-order').html(content);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("NEUSPESNO");
            }
        });

    }

    $('#btn_trazi_racun').click(function () {
        console.log("TRAZI RACUN");
        console.log(localStorage.getItem("order_list_id"));
        $.ajax({
            url: '/WarriorsOfLight/public/AskBill',
            method: 'POST',
            data: { order_list_id: localStorage.getItem("order_list_id")},
            success: function (result, textStatus, xhr){
                $('#order').hide().find('#menu-table-order').html("");
                $(".logging-page").css('display', "none");
                $(".main-page").css('display', "block");
                $(".intro-section").css('padding-top', "150px");
                $('#singout_link').show();
                fillMenuList();
                isScanned = false;
                $("#confirm_order_button").css('visibility', 'hidden');
                console.log("USPESNO");
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("NEUSPESNO");
            }
        });
    });




    function fillJSON(table,rw_number){
        var json = "";
        for(var i=0;i< rw_number;i++) {
            var oCells = table.rows.item(i).cells;
            console.log(oCells[2].firstChild.id);
            if (oCells.length == 3) {
                json += '{"product_id":' + oCells[2].firstChild.id + ',"product_quantity":';
                if (!document.getElementById(oCells[2].firstChild.id).value) {
                    json += "0 ,";
                }
                else {
                    json += document.getElementById(oCells[2].firstChild.id).value + " ,";
                }
                if(oCells[2].firstChild.id >= 15)
                {
                    json += '"product_cost":' + oCells[1].innerHTML.substring(oCells[1].innerHTML.indexOf('/') + 1);
                    json += " }";
                }
                else {
                    json += '"product_cost":' + oCells[1].innerHTML.trim();
                    json += " }";
                }

                if (i < rw_number - 1) {
                    json += ',';
                }
            }
        }
        //json = json.slice(0,json.length-1);
        console.log(json);
        return json;
    }
});