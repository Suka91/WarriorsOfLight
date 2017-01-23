/**
 * Created by AleksandraK on 1/23/2017.
 */
function billPaid(id) {
    $(".r"+id).css('display',"none");

}

function kara(){
    console.log("KARA");
}

$(document).ready(function(){
        var refresh_id = setInterval(kara(), 1000);
        $("#login_button_admin").click(function () {
                console.log("login_admin");
                $.ajax({
                    url: '/WarriorsOfLight/public/OrderListAdmin',
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
                var content = "<h id='order_list_h'> Order List </h>";
                content += "<table id='orders' style='width: 100px'>";
                content += "<th>Naziv proizvoda</th><th>Količina</th><th>Napomena</th><th>Id stola</th><th>Order list id</th><th style='width: 80px;'>Da li je tražen račun</th><th style='width: 100px;'>Da li je plaćen račun</th>"
                console.log("PRE FOR PETLJE");
                for(var i = 0; i < data.length; i++){
                    content +="<tr class='r"+data[i].order_list_id+"'>" +
                        "<td class='order_table'>"+ data[i].product_name+"</td>"+
                        "<td class='order_table'>"+ data[i].product_amount + "</td>" +
                        "<td class='order_table'>"+ data[i].order_list_note + "</td>" +
                        "<td class='order_table'>"+ data[i].order_list_table_id + "</td>" +
                        "<td class='order_table'>"+ data[i].order_list_id + "</td>";
                    if(data[i].order_list_asked_bill == 0) {
                        content+= "<td class='order_table'>"+ "NIJE" + "</td>";
                    }
                    else {
                        content+= "<td class='order_table' style='color: indianred; font-weight: bolder'>"+ "JESTE" + "</td>";
                    }
                    content+= "<td class='order_table'><input type='button' value=' nije placeno' onclick='billPaid(" + data[i].order_list_id  +")'" +
                        " class='r" + data[i].order_list_id +"'></td>"
                    content+="</tr>";
                }
                content +="</table>";
                document.getElementById("order_list").innerHTML = content;
            }
        });
