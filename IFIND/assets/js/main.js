$(function ($) {
    "use strict";

    $(function () {
        $('.mainmenu-area .navbar-nav a').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 100
            }, 1000);
            event.preventDefault();
        });
    });
    //scrollspy menu
    $('body').scrollspy({
        target: '#main_menu',
        offset: 80
    });


    jQuery(document).ready(function () {

        //   magnific popup activation
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });

        $('.img-popup').magnificPopup({
            type: 'image'
        });

        // Active Bootstrap Tooltip
        $('[data-toggle="tooltip"]').tooltip()

        // partners_slider Start
        var $partners_sliderr = $('.partners-slider');
        $partners_sliderr.owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 4000,
            smartSpeed: 2000,
            responsive: {
                0: {
                    items: 2
                },
                500: {
                    items: 3
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });
        // partners_slider End

        // testimonial_slider 
        var $testimonial_slider = $('.testimonial-slider');
        $testimonial_slider.owlCarousel({
            loop: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            nav: false,
            dots: false,
            autoplay: true,
            margin: 0,
            autoplayTimeout: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        // team_slider 
        var $team_slider = $('.team-slider');
        $team_slider.owlCarousel({
            loop: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            nav: false,
            dots: false,
            autoplay: true,
            margin: 0,
            autoplayTimeout: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });


        // blog_slider 
        var $blog_slider = $('.blog-slider');
        $blog_slider.owlCarousel({
            loop: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            nav: false,
            dots: false,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });

    });





    /*-------------------------------
        back to top
    ------------------------------*/
    $(document).on('click', '.bottomtotop', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        var $window = $(window);
        if ($window.scrollTop() > 0) {
            $(".mainmenu-area").addClass('nav-fixed');
        } else {
            $(".mainmenu-area").removeClass('nav-fixed');
        }

        /*---------------------------
            back to top show / hide
        ---------------------------*/
        var st = $(this).scrollTop();
        var ScrollTop = $('.bottomtotop');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
        lastScrollTop = st;

    });

    $(window).on('load', function () {

        /*---------------------
            Preloader
        -----------------------*/
        var preLoder = $("#preloader");
        preLoder.addClass('hide');
        var backtoTop = $('.back-to-top');
        /*-----------------------------
            back to top
        -----------------------------*/
        var backtoTop = $('.bottomtotop');
        backtoTop.fadeOut(100);

    });




});


//////////////////入口函数/////////////////////


$("#submit").click(function () {
    

    var file1 = document.getElementById('fileupload').files[0];
    var maxSizeInBytes =  10*1024*1024;
    var filesize = file1.size;
    console.log(filesize);
    if (filesize <= maxSizeInBytes) {
        var file = $("#fileupload")[0].files[0];
        var formData = new FormData();
        formData.append("file", file);
        console.log(formData);

        $.ajax({
            type: "POST",
            url: "http://146.56.205.121:8080/upload",
            data: formData,
            processData: false,
            contentType: false,
            error: function (data) {
                console.log("上传失败！")
                alert("上传失败！")
            },
            success: function (data) {
                console.log("上传成功！")
                alert("上传成功！")
            },
        });


        console.log("上传成功！");
    }
    else {
        alert("文件大小不得超过10MB");
    }




    // var file = $("#fileupload")[0].files[0];
    // var formData = new FormData();
    // formData.append("file",file);
    // console.log(formData);

    // $.ajax({
    //     type: "POST",
    //     url: "http://146.56.205.121:8080/upload",
    //     data: formData,
    //     processData: false,
    //     contentType: false,
    //     error: function (data) {
    //         console.log("上传失败！")
    //         alert("上传失败！")
    //     },
    //     success: function (data) {
    //         console.log("上传成功！")
    //         alert("上传成功！")
    //     },
    // });
});



 // 获取按钮和输入框的引用
 var button = document.getElementById("mask");
 var fileupload = document.getElementById("fileupload");

 // 添加点击事件监听器
 button.addEventListener("click", function() {
   fileupload.click(); // 模拟点击输入框
 });



