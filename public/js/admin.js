/**
 * Created by AleksandraK on 1/22/2017.
 */

function billPaid(id) {
    console.log(id);

    document.getElementById(id).innerHTML += "disabled";
    document.getElementById(id).value = "placeno";

}

function kara(){
    console.log("KARA");
}


$(document).ready(function(){

    var refresh_id = setInterval(kara(), 1000);

    $("#login_button_admin").click(function () {

        console.log("login_admin");
        $.ajax({
            url: '/WarriorsOfLight/public/OrderList',
            method: 'GET',
            success: function (result, textStatus, xhr){
                console.log(result.data);
                console.log("USPESNO");
                $(".login-section").css('display',"none");
                $(".image_link").css('display', "none");
                $("#login_admin").css('display', "none");
                $(".main-page").css('display', "block");

                makeOrderTable(result.data);
            },
            error: function (xhr, textStatus, errorThrown) {
              console.log("NEUSPESNO");
        }

        });
    });




    function makeOrderTable(data) {
        var content = "<h> Order List </h>";
        content += "<table id='orders'>";
        console.log("PRE FOR PETLJE");
        for(var i = 0; i < data.length; i++){
            content +="<tr>" +
                "<td>"+ data[i].product_name+"</td>"+
                "<td>"+ data[i].product_amount + "</td>" +
                "<td>"+ data[i].order_list_note + "</td>";

            if(data[i].order_list_asked_bill == 0) {
                content+= "<td>"+ "NIJE" + "</td>";
            }
            else {
                content+= "<td style='color: indianred; font-weight: bolder'>"+ "JESTE" + "</td>";
            }

            content+= "<td><input type='button' value=' nije placeno' onclick='billPaid(" + data[i].order_id  +")'" +
                " id='" + data[i].order_id +"'></td>"

            content+="</tr>";
        }
        content +="</table>";
        document.getElementById("order_list").innerHTML = content;
    }


});