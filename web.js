$(function() {
    $("#quan").keyup(function() {
        var Va = $(this).val();
        $("#m").text(Va);
    });
    $("span").click(function() {
    	$(".adaptive_link").slideToggle(1000).css("display","flex");
    });
});