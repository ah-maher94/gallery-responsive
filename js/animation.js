$(document).ready(function(){

    var imgSrc = [];
    $("#container img").each(function(){
        imgSrc.push(this.src);
        console.log($(this).parent().index());
    });
    var imgSrcIndex = 0;
    $("#container img").click(function(){
        $("#slideImages").empty();
        imgSrcIndex = $(this).parent().index();
        $("#slideImages").append("<img class='biggerImage' src='" + this.src + "'/>");
        $("body img").slideDown(1000);
        $("#slideImages").slideDown(1000);
        $("body").css({
            "animation": "startGallery 1s",
            "animation-fill-mode": "forwards"
        })
        $("#container img").css({
            "opacity":"0.5"
        });
    });

    $("#closeImage").click(function(){
        $("img").stop(true, true);
        $("#slideImages").slideUp(500);
        $(".icons img").slideUp(500);
        $("body").css({
            "animation": "returnDefault 1s",
            "animation-fill-mode": "forwards"
        })
        $("#container img").css({
            "opacity":"1"
        });
        $("#slideImages").empty();
    })

    $("#right-arrow").click(function(){
        $("img").stop(true, true);
        $("#slideImages img:eq(0)").animate({"left":"-150%"},500, function(){
                $(this).remove();
            });
        $("#slideImages").append("<img class='biggerImage' style='display: block; left:150%' src='" + imgSrc[Math.abs((++imgSrcIndex)%imgSrc.length)] + "'/>");
        $("#slideImages img:last").animate({"left":"-10%"},500, function(){
                $(this).animate({"left":"5%"},500,function(){
                    $(this).animate({"left":"0px"},500)
                });
        });        
    })

    $("#left-arrow").click(function(){
        if(imgSrcIndex == 0){
            imgSrcIndex += imgSrc.length;
          }
        $("img").stop(true, true);
        $("#slideImages img:eq(0)").animate({"left":"150%"},500, function(){
            $(this).remove();
        });
        $("#slideImages").append("<img class='biggerImage' style='display: block; left:-150%' src='" + imgSrc[Math.abs((--imgSrcIndex)%imgSrc.length)] + "'/>");
        $("#slideImages img:last").animate({"left":"20%"},500, function(){
                $(this).animate({"left":"-5%"},500,function(){
                    $(this).animate({"left":"0px"},500)
                });
        });   
    })

});