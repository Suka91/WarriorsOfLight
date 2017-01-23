/**
 * Created by sukab on 1/17/2017.
 */
$(document).ready(function(){

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
                            $(".signup-section").css('display',"");
                            $(".login-section").css('display',"block");
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
                content +="<tr><td id='name_td'>"+ data[i].product_name+"</td>"+
                    "<td id='cost_td'>"+"  " +data[i].product_cost+"</td>" +
                    "<td class='td_input'><input type='number' class='input_tr' id='"+data[i].product_id+"' min='0' value=''></tr>";
            }
            else if((data[i].product_type === type) && (type === "soft_drinks"))
            {
                content +="<tr><td id='name_td'>"+ data[i].product_name+"</td>"+
                    "<td id='cost_td'>"+"  " +data[i].product_cost+"    "+ "</td>" +
                    "<td class='td_input'><input type='number' class='input_tr id='"+data[i].product_id+"' min='0' value=''></tr>";
            }
            else if((data[i].product_type === type) && (type === "wines_and_beers"))
            {
                content +="<tr><td id='name_td'>"+ data[i].product_name+"</td>"+
                    "<td id='cost_td'>"+data[i].product_quantity+"/"+data[i].product_cost+"</td>" +
                    "<td class='td_input'><input type='number' class='input_tr id='"+data[i].product_id+"' min='0' value='' width='10%'></tr>";
            }
        }
        return content;
    }
    $("#confirm_order_button").click(function(){
        console.log("confirm_order_button");
        var json = "[";
        var tables = [document.getElementById("cofee-and-tea-table"),
         document.getElementById("soft-drinks-table"),
         document.getElementById("wines-and-beers-table")];
        var number_rows_in_tables = [tables[0].rows.length,tables[1].rows.length,tables[2].rows.length];
        for(var i = 0; i < tables.length;i++) {
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
            data: { json_string: json, note: $("#note").val()},
            success: function (result, textStatus, xhr){
                buildFinishedOrder(result.data);
                console.log(result.data);
                console.log("USPESNO");
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("NEUSPESNO");
            }
        });
    });
    function buildFinishedOrder(order_id){
        $.ajax({
            url: '/WarriorsOfLight/public/OrderList',
            method: 'GET',
            data: { orderId: order_id },
            success: function (result, textStatus, xhr){
                console.log(result);
                content ="<table style='width: 410px;height: 610px;margin: 120px 0 0 0;'><tr><th>Ime proizvoda</th><th>Kolicina</th></tr>";
                for(var i=0; i< result.data.orderList.length;i++){
                        content +="<tr><td>"+ result.data.orderList[i].product_name+"</td>"+
                            "<td>"+result.data.orderList[i].product_amount +
                            "</td></tr>";
                }
                content +="</table> Ukupno" + result.data.orderinfo.order_list_cost;

                $('section.main-page').hide();
                $('#order').show().attr('result-id',order_id).find('#menu-table-order').html(content);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("NEUSPESNO");
            }
        });

    }

    function fillJSON(table,rw_number){
        var json = "";
        for(var i=0;i< rw_number;i++)
        {
            var oCells = table.rows.item(i).cells;
            json+='{"product_id":'+ oCells[3].firstChild.id +',"product_quantity":';
            if(!document.getElementById(oCells[3].firstChild.id).value)
            {
                json +="0 ,";
            }
            else {
                json+= document.getElementById(oCells[3].firstChild.id).value + " ,";
            }
            json +='"product_cost":'+oCells[2].innerHTML.substring(oCells[2].innerHTML.indexOf('/')+1);
            json +=" }";

            if(i<rw_number-1)
            {
                json+=',';
            }

        }
        //json = json.slice(0,json.length-1);
        //console.log(json);
        return json;
    }
});