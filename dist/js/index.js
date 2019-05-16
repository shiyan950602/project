//大轮播
$(function(){
    $(".banner_c .order li").mouseover(function(){
        $(this).addClass("banner_active").siblings().removeClass("banner_active");
        var index =$(this).index();
        $(".banner_c .pic li").eq(index).fadeIn(300).siblings().fadeOut(300);
    });
    var i=0;
    var t = setInterval(move, 2500);
    var topFlashNum =$(".banner_c .order li").length;
    function move(){
        i++;
        if (i == topFlashNum) {
            i=0;
        }
        $(".banner_c .order li").eq(i).addClass("banner_active").siblings().removeClass("banner_active");
        $(".banner_c .pic li").eq(i).fadeIn(300).siblings().fadeOut(300);
    }
    function moveL() {
        i--;
        if (i == -1) {
            i = topFlashNum - 1;
        }
        $(".banner_c .order li").eq(i).addClass("banner_active").siblings().removeClass("banner_active");
        $(".banner_c .pic li").eq(i).fadeIn(300).siblings().fadeOut(300);
    }
    $(".banner_c").hover(
        function(){
            clearInterval(t);
        },
        function(){
            t=setInterval(move,2500);
        }
    );
    $(".leftann").click(function(){
        moveL();
    });
    $(".rightann").click(function(){
        move();
    });
});
//登陆跳转
//获取登录按钮
// function login(){
//     const oLogin = document.getElementById(".loginbtn");
//     oLogin.onclick = function(){
//         alert("hhah");
//     location.href = "logoin.html"
//     }
// }
// login();

// //快速注册
// function registor(){
//     const oRegister = document.querySelector("#banner_r a .registerbtn");
//     oRegister.onclick = function(){
//         alert("hhh")
//     }
// } 
// registor();
//限时抢购
$(document).ready(function () {
    var oDate = new Date();
    var nowTime = oDate.getTime(); //现在的毫秒数
    oDate.setDate(oDate.getDate() + 1); // 设定截止时间为第二天
    var targetDate = new Date(oDate.toLocaleDateString());
    run(targetDate);
});

function run(enddate) {
    getDate(enddate);
    setInterval("getDate('" + enddate + "')", 500);
}

function getDate(enddate) {
    var oDate = new Date(); //获取日期对象

    var nowTime = oDate.getTime(); //现在的毫秒数
    var enddate = new Date(enddate);
    var targetTime = enddate.getTime(); // 截止时间的毫秒数
    var second = Math.floor((targetTime - nowTime) / 1000); //截止时间距离现在的秒数

    var day = Math.floor(second / 24 * 60 * 60); //整数部分代表的是天；一天有24*60*60=86400秒 ；
    second = second % 86400; //余数代表剩下的秒数；
    var hour = Math.floor(second / 3600); //整数部分代表小时；
    second %= 3600; //余数代表 剩下的秒数；
    var minute = Math.floor(second / 60);
    second %= 60;
    var spanH = $('.se-txt')[0];
    var spanM = $('.se-txt')[1];
    var spanS = $('.se-txt')[2];

    spanH.innerHTML = tow(hour);
    spanM.innerHTML = tow(minute);
    spanS.innerHTML = tow(second);
}

function tow(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
}
//小轮播
$(function(){
    var i = 0;
    var t = setInterval(move, 2000); 

    function move(){
        i++;
        if (i == 1) {
            i=0;
        }
        $(".store_con_bottom_l_t .pic li").eq(i).fadeIn(300).siblings().fadeOut(300);
    }
    $(".store_con_bottom_l_t").each(function () {
        $(this).hover(function(){
                clearInterval(t);
            },
            function(){
                t=setInterval(move,2000);
            }
        );
    })
})
 //右侧悬浮
 $(window).scroll(function () {
    var top = $(document).scrollTop();
    if(top > 900){
        $("#menu").fadeIn(600);
    }else {
        $("#menu").fadeOut(600);
    }
    var tit=$(".floor");
    tit.each(function () {
        var index =$(this).index();
        if(top > $(this).offset().top - 350){
            $("#menu ul li").eq(index).addClass("current").siblings().removeClass("current");
        }
    });
});
 
 