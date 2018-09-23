$(document).ready(function(){
    $("#btn").click(function(){
        $("#btn").fadeOut(3000);
    });

    $(".cls").fadeTo(3000,0.3, function(){
        alert("Got it!");
    });

    $(".togg").click(function(){
        $(".togg1").fadeToggle(1000);
    });
    $(".togg1").hide();

    $("#btn1").click(function(){
        $("#text").toggle(3000);
    });

    $("#btn2").click(function(){
        $("#text").fadeOut(2000);
    });

    $("#btn3").click(function(){
        $("#text").fadeIn(2000);
    });
    $("#btn4").click(function(){
        $("#text").fadeToggle(2000);
    });

    $("#btn5").dblclick(function(){
        $("#text").fadeTo(2000,0.1);
    });

    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });

    $("li:odd").addClass("odd");
    $("li:even").addClass("even");
    $("li:first").addClass("first");
    $("li:last").addClass("last");
    $("li:eq(3)").addClass("nth"); 

    $("p").click(function(){
        $(this).hide("fast");
    });
    $("h1").click(function(){
        $(":header").fadeOut(3000);
    });
    $("h3").dblclick(function(){
        $("h3:not(h3:eq(5))").fadeOut(3000);
    });
    
        $(".h3").hide();
    $("#show").click(function(){
        $(".h3:contains('Rifat')").fadeIn(2000);
    });

    $("a[title='TW']").fadeOut(3000);

    
    $(":input:text").addClass("fn");

   
});
