// $("h1").css("color", "red");

$("a").attr("href", "https://www.yahoo.com");

$("h1").addClass("big-title margin-50");

$(document).keydown(function(e){
    $("h1").text(e.key);
    console.log(e.key);
})
