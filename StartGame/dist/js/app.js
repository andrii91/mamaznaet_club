$(document).ready(function(){function e(e){function t(){var e=new Date,t=a-e+48e4;if(t<0)return $(".days").text("00"),$(".hours").text("00"),$(".minutes").text("00"),$(".seconds").text("00"),$(".milliseconds").text("00"),void clearInterval(l);var r=Math.floor(t/d),c=Math.floor(t%d/s),p=Math.floor(t%s/o),f=Math.floor(t%o/n),u=Math.floor(t%n/i);f<10&&(f="0"+f),p<10&&(p="0"+p),c<10&&(c="0"+c),r<10&&(r="0"+r),$(".days span").text(r),$(".hours span").text(c),$(".minutes span").text(p),$(".seconds span").text(f),$(".milliseconds span").text(u)}var a=new Date(e),i=10,n=100*i,o=60*n,s=60*o,d=24*s,l=setInterval(t,10)}$(".reviews-item  ").click(function(){var e=$(this).find("img"),t=e.attr("src");$("body").append("<div class='popup'><div class='popup_bg'></div><img src='"+t+"' class='popup_img' /></div>"),$(".popup").fadeIn(800),$(".popup_bg").click(function(){$(".popup").fadeOut(800),setTimeout(function(){$(".popup").remove()},800)})});var t=0,a=$(".hide_review").length;$(".show_more").click(function(e){event.preventDefault(),t+=6,a<t&&$(this).hide(200),$(".hide_review").each(function(e){if($(this).show(200),t==e+1)return!1})}),$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(".scroll").click(function(e){event.preventDefault();var t=$(this).attr("href"),a=$(t).offset().top;$("body,html").animate({scrollTop:a-40},1500)}),$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$(".menu").slideToggle(200)}),$(".section_6-item .before").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeIn",classToRemove:"hidden_animation",offset:0}),$(".arr_left").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInLeft",classToRemove:"hidden_animation",offset:0}),$(".arr_right").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInRight",classToRemove:"hidden_animation",offset:0}),$(".up").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInUp",classToRemove:"hidden_animation",offset:0}),$(".programs-item li").viewportChecker({classToAdd:"active",repeat:!0,offset:"45%"}),e($(".timer").data("date").replace(/ /g,"T")),$(".days").append('<b class="title">дней</b>'),$(".hours").append('<b class="title">часов</b>'),$(".minutes").append('<b class="title">минут</b>'),$(".seconds").append('<b class="title">секунд</b>'),$(".milliseconds").append('<b class="title">миллисек.</b>');var i=lozad();i.observe(),$("#phone").intlTelInput({defaultCountry:"ua",initialCountry:"auto",preferredCountries:["ua","ru","az","am","by","kz","kg","md","tj","uz","tm","ge"],autoPlaceholder:"aggressive",nationalMode:!1,customPlaceholder:function(e,t){return"+"+t.dialCode},geoIpLookup:function(e,t){$.get("https://ipinfo.io",function(){},"jsonp").always(function(t){var a=t&&t.country?t.country:"ua";e(a)})},separateDialCode:!1,formatOnDisplay:!1}),$(".check").each(function(){$(this).on("change",function(){var e=$(this).parents("form");$(this).prop("checked")?e.find(".phone").slideDown():e.find(".phone").slideUp()})})});