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
        $("body img").fadeIn(500);
        $("#slideImages").fadeIn(500);
        $("body").css({
            "animation": "startGallery 1s",
            "animation-fill-mode": "forwards"
        });
        $("#container img").css({
            "opacity":"0.5"
        });
    });

    $("#closeImage").click(function(){
        $("img").stop(true, true);
        $("#slideImages").fadeOut(500);
        $(".icons img").fadeOut(500);
        $("body").css({
            "animation": "returnDefault 1s",
            "animation-fill-mode": "forwards"
        });
        $("#container img").css({
            "opacity":"1"
        });
        $("#slideImages").empty();
    })

    $("#right-arrow").click(function(){
        $("img").stop(true, true);
        $("#slideImages img:eq(0)").fadeOut(500, function(){
                $(this).attr("src", imgSrc[Math.abs((++imgSrcIndex)%imgSrc.length)]);
            });
        $("#slideImages img:eq(0)").fadeIn(500);
    })

    $("#left-arrow").click(function(){
        $("img").stop(true, true);
        $("#slideImages img:eq(0)").fadeOut(500, function(){
            if(imgSrcIndex == 0){
                imgSrcIndex += imgSrc.length;
            }
            $(this).attr("src", imgSrc[Math.abs((--imgSrcIndex)%imgSrc.length)]);
        });
        $("#slideImages img:eq(0)").fadeIn(500);
    })


});