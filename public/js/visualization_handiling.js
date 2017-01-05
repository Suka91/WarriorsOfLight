/**
 * Created by sukab on 1/4/2017.
 */
$(document).ready(function() {
    $("#login_link").click(function () {
            $(".signup-section").css('display',"");
            $(".login-section").css('display',"block");
        });
    $("#singup_link").click(function () {
        $(".login-section").css('display',"");
        $(".signup-section").css('display',"block");
    });
    $("#login_button").click(function () {
        $(".logging-page").css('display', "none");
        $(".main-page").css('display', "block");
    })
});
