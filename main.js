$(function() {

    $(".loader_container").css("display","none");

    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        adaptiveHeight: true
    });


    $("body").on("click",".head_opt li a",function(e){
        e.preventDefault();
        $(".home_11").toggleClass("flip_left");
        var ata=$(this).attr('href');
        if(ata=="#contact"){
            $(".contact_11").toggleClass("flip_bot");
        }
        else if(ata=="#pic"){
            $(".gallery11").toggleClass("flip_right");
        }
        else if(ata=="#cor"){
            $(".cooperate11").toggleClass("flip_top");
        }
        else if(ata=="#brand"){
            $(".brand11").toggleClass("zoom_out");
        }
        else if(ata=="#know"){
            $(".knowledge11").toggleClass("slide_down");
        }
        else if(ata=="#ecommerce"){
            $(".ecommerce").toggleClass("zoom_out");
        }
        else if(ata=="#voice"){
            $(".voice").toggleClass("flip_right");
        }
        else if(ata=="#faap11"){
            $(".faap11").toggleClass("flip_top");
        }

    });




    $("body").on("click",".contact_11 .btn-clsa",function(e){
        e.preventDefault();
        $(".contact_11").toggleClass("flip_bot");
        $(".home_11").toggleClass("flip_left");
    });

    $("body").on("click",".knowledge11 .btn-clsa",function(e){
        e.preventDefault();
        $(".knowledge11").toggleClass("slide_down");
        $(".home_11").toggleClass("flip_left");
    });

    $("body").on("click",".gallery11 .btn-clsa",function(e){
        e.preventDefault();
        $(".gallery11").toggleClass("flip_right");
        $(".home_11").toggleClass("flip_left");
    });

    $("body").on("click",".voice .btn-clsa",function(e){
        e.preventDefault();
        $(".voice").toggleClass("flip_right");
        $(".home_11").toggleClass("flip_left");
    });

    $("body").on("click",".cooperate11 .btn-clsa",function(e){
        e.preventDefault();
        $(".cooperate11").toggleClass("flip_top");
        $(".home_11").toggleClass("flip_left");
    });

    $("body").on("click",".faap11 .btn-clsa",function(e){
        e.preventDefault();
        $(".faap11").toggleClass("flip_top");
        $(".home_11").toggleClass("flip_left");
    });

    $("body").on("click",".brand11 .btn-clsa",function(e){
        e.preventDefault();
        $(".brand11").toggleClass("zoom_out");
        $(".home_11").toggleClass("flip_left");
    });

    $("body").on("click",".ecommerce .btn-clsa",function(e){
        e.preventDefault();
        $(".ecommerce").toggleClass("zoom_out");
        $(".home_11").toggleClass("flip_left");
    });




//    work -popup

    $("body").on("click",".work_toggle li a",function(e){
        e.preventDefault();
        var worktitle=$(this).find("h3").text();
        var workimg=$(this).attr("data-image");
        var workp=$(this).closest("li").find("div.work_des").html();

        $(".work_det11").find(".img_work").find("img").attr('src',workimg);
        $(".work_det11").find(".work_descript11").html(workp);
        $(".work_det11").find("h1").html("<i class='fa fa-briefcase'></i>" + worktitle);
        $(".work_det11").fadeToggle();

    });

    $("body").on("click",".work_det11 .btn_work",function(){
        $(this).closest("div.work_det11").fadeToggle();
    });


//    brand description---------

    $("body").on("click",".brand11 .row div a",function(e){
        e.preventDefault();
        var descp=$(this).find("div.brand_intro").html();
        var brandsrc=$(this).find("img").attr("src");
        var titlesrc=$(this).find("img").attr("data-title");

        $(".brand_desc11").find("div.container").find(".brand_paragr").html(descp);

        $(".brand_desc11").find("img.brand_logo").attr("src",brandsrc);

        $(".brand_desc11").find("ul.bread1").find("li:last").text("/ "+titlesrc);

        $(".brand_desc11").fadeToggle();
    });

    $("body").on("click","#btn-brand",function(e){
        e.preventDefault();
        $(".brand_desc11").fadeToggle();
    });




});
