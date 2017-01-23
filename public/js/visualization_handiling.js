/**
 * Created by sukab on 1/4/2017.
 */
$(document).ready(function() {
    $("#login_link").click(function () {
        $(".signup-section").css('display',"");
        $(".login-section").css('display',"block");
        $(".image_link").css('display', "none");
    });
    $("#singup_link").click(function () {
        $(".login-section").css('display',"");
        $(".signup-section").css('display',"block");
        $(".image_link").css('display', "none");
        });
    $("#login_admin").click(function () {
        console.log("kara");
        $(".login-section").css('display',"block");
        $(".image_link").css('display', "none");
    });
});
