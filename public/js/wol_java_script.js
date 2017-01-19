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
                        $(".signup-section").css('display',"");
                        $(".login-section").css('display',"block");
                        console.log("USPESNO");
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
                console.log(result.data[0].user_name);
                console.log("USPESNO");
                console.log(result.data);
                document.getElementById("logged-user").innerHTML = result.data[0].user_name;
                //$("#logged-user").innerHTML = result.data[0].user_name;
                $(".logging-page").css('display', "none");
                $(".main-page").css('display', "block");
                fillMenuList();
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
        var content= "<h>Coffee and Tea</h>";
        content+="<table id='cofee-and-tea-table'>"
        content+= makeMenuTableByType(result.data, "coffee_and_tea");
        content+="</table>";
        content+= "<h>Soft drinks</h>";
        content+="<table id='soft-drinks-table'>";
        content+= makeMenuTableByType(result.data, "soft_drinks");
        content+="</table>";
        content += "<h>Wines and Beers</h>";
        content+="<table id='wines-and-beers-table'>";
        content+= makeMenuTableByType(result.data, "wines_and_beers");
        content+="</table>";
        document.getElementById("menu-table").innerHTML = content;
    }
    function makeMenuTableByType(data, type) {
        var content = "";
        for(var i=0; i< data.length;i++){
            console.log(data[i].product_type);
            console.log(type);
            if(data[i].product_type === type)
            {
                content +="<tr><td>"+ data[i].product_name+"</td>"+
                               "<td>"+data[i].product_description +
                    "</td><td>"+data[i].product_quantity+"/"+data[i].product_cost+"</td>" +
                    "</td><td><input type='number' id='"+data[i].product_id+"' min='0' value=''></tr>";
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
        $.ajax({
            url: '/WarriorsOfLight/public/ConfirmOrder',
            method: 'POST',
            data: { json_string: json, note: $("#note").val()},
            success: function (result, textStatus, xhr){
                console.log(result.data[0]);
                console.log("USPESNO");
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("NEUSPESNO");
            }
        });
    });

    function fillJSON(table,rw_number){
        var json = "";
        for(var i=0;i< rw_number;i++)
        {
            var oCells = table.rows.item(i).cells;
            json+='{"product_id":'+ oCells[3].firstChild.id +',"product_quantity":'+
                  document.getElementById(oCells[3].firstChild.id).value+"}";
            if(i<rw_number-1)
            {
                json+=',';
            }

        }
        //json = json.slice(0,json.length-1);
        console.log(json);
        return json;
    }
});