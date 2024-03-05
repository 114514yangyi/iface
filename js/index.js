$(function() {

   $(".input input").focus(function() {

      $(this).parent(".input").each(function() {
         $("label", this).css({
            "line-height": "18px",
            "font-size": "18px",
            "font-weight": "100",
            "top": "0px"
         })
         $(".spin", this).css({
            "width": "100%"
         })
      });
   }).blur(function() {
      $(".spin").css({
         "width": "0px"
      })
      if ($(this).val() == "") {
         $(this).parent(".input").each(function() {
            $("label", this).css({
               "line-height": "60px",
               "font-size": "24px",
               "font-weight": "300",
               "top": "10px"
            })
         });

      }
   });

   $(".button").click(function(e) {
      var pX = e.pageX,
         pY = e.pageY,
         oX = parseInt($(this).offset().left),
         oY = parseInt($(this).offset().top);

      $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
      $('.x-' + oX + '.y-' + oY + '').animate({
         "width": "500px",
         "height": "500px",
         "top": "-250px",
         "left": "-250px",

      }, 600);
      $("button", this).addClass('active');
   })

   $(".alt-2").click(function() {
      if (!$(this).hasClass('material-button')) {
         $(".shape").css({
            "width": "100%",
            "height": "100%",
            "transform": "rotate(0deg)"
         })

         setTimeout(function() {
            $(".overbox").css({
               "overflow": "initial"
            })
         }, 600)

         $(this).animate({
            "width": "100px",
            "height": "100px"
         }, 500, function() {
            $(".box").removeClass("back");

            $(this).removeClass('active')
         });

         $(".overbox .title").fadeOut(300);
         $(".overbox .input").fadeOut(300);
         $(".overbox .button").fadeOut(300);

         $(".alt-2").addClass('material-buton');
      }

   })

   $(".material-button").click(function() {

      if ($(this).hasClass('material-button')) {
         setTimeout(function() {
            $(".overbox").css({
               "overflow": "hidden"
            })
            $(".box").addClass("back");
         }, 200)
         $(this).addClass('active').animate({
            "width": "700px",
            "height": "700px"
         });

         setTimeout(function() {
            $(".shape").css({
               "width": "50%",
               "height": "50%",
               "transform": "rotate(45deg)"
            })

            $(".overbox .title").fadeIn(300);
            $(".overbox .input").fadeIn(300);
            $(".overbox .button").fadeIn(300);
         }, 700)

         $(this).removeClass('material-button');

      }

      if ($(".alt-2").hasClass('material-buton')) {
         $(".alt-2").removeClass('material-buton');
         $(".alt-2").addClass('material-button');
      }

   });

});



$(".button.login button").click(function() {
   console.log("登录");
   $.ajax({
     url: "http://146.56.205.121:8080/user/login",
     type: "post",
     data: {
       username: $("#name").val(),
       password: $("#pass").val()
     },
     success: function(result) {
      console.log(result);
       if (result) {
         location.href = "/IFIND/index.html";
       } else {
         alert("密码或用户名错误");
       }
     },
     error: function(xhr, status, error) {
       console.log("An error occurred: " + error);
     }
   });
 });

 $("#register").click(function() {
   console.log("注册");
   $.ajax({
     url: "http://146.56.205.121:8080/user/register",
     type: "post",
     data: {
       username: $("#regname").val(),
       password: $("#regpass").val(),
         email: $("#reregpass").val()
     },
     success: function(result) {
      console.log(result);
       if (result) {
         alert("注册成功,请重新登录");
       } else {
         alert("注册失败");
       }
     },
     error: function(xhr, status, error) {
       console.log("An error occurred: " + error);
     }
   });
 });

// $(".button.login button").click(function() {
//    // 获取输入框中的用户名和密码
//    var username = $("#name").val();
//    var password = $("#pass").val();
   
//    // 这里是简单的用户名和密码验证逻辑，你需要根据实际需求进行修改
//    if ((username === "123456" && password === "123456")||(username=="yingying" && password=="0914")) {
//       // 用户名和密码验证成功，跳转到另一个页面
//       window.location.href = "IFIND/index.html";
//    } else {
//       // 用户名或密码验证失败，显示错误消息或执行其他操作
//       alert("用户名或密码不正确，请重试。");
//    }
// });