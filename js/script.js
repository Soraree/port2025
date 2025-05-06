$(document).ready(function(){
    "use strict";

    HeaderScrolled();

    // 헤더 스크롤 스타일
    function HeaderScrolled(){
        $(window).on("scroll", function(){
            if(window.scrollY > 90){
                $("#header").addClass("scrolled");
            }else{
                $("#header").removeClass("scrolled");
            }
        });
    }
    






});