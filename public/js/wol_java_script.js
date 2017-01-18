/**
 * Created by sukab on 1/17/2017.
 */
$(document).ready(function(){
    $("#register_button").click(function(){
        console.log("STIGAO");
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
        console.log("STIGAO");
        console.log($("#login-username").val());
        console.log($("#login-password").val());
        $.ajax({
            url: '/WarriorsOfLight/public/Login',
            method: 'POST',
            data: { user_name: $("#login-username").val(), user_password: $("#login-password").val() },
            success: function (result, textStatus, xhr){
                console.log(result.data[0].user_name);
                console.log("USPESNO");
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
        console.log($("#logged-user").val());
        $.ajax({
            url: '/WarriorsOfLight/public/MenuList',
            method: 'GET',
            data: { user_name: $("#logged-user").val() },
            success: function (result, textStatus, xhr){
                console.log(result.data);
                console.log("USPESNO");
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("NEUSPESNO");
            }
        });
    }
});