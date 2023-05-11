$(document).ready(function () {

    let apiUrl = "http://127.0.0.1:8000/api"


    setInterval(function () {
        $('#v3d-container a').hide()
    }, 200)

   try{
       var mySwiper = new Swiper('.swiper', {
           direction: 'vertical', // 垂直切换选项
           loop: true, // 循环模式选项
           autoplay: true
       })
   }catch (e) {

   }

    $.ajax({
        url:apiUrl+"/about",
        type: "GET",
        dataType: "json",
        success: function (data) {
             $(".aboutHtml").append(data.data)
            console.error(data)
        }
    });
    $.ajax({
        url:apiUrl+"/contact",
        type: "GET",
        dataType: "json",
        success: function (data) {
            $(".contactHtml h2").append(data.data)
            console.error(data)
        }
    });

});
