$(document).ready(function(){function e(){function e(){var e=new Date,l=a-e+48e4;if(l<0)return $(".days").text("00"),$(".hours").text("00"),$(".minutes").text("00"),$(".seconds").text("00"),$(".milliseconds").text("00"),void clearInterval(d);var r=Math.floor(l/s),c=Math.floor(l%s/i),f=Math.floor(l%i/o),p=Math.floor(l%o/n),u=Math.floor(l%n/t);p<10&&(p="0"+p),f<10&&(f="0"+f),c<10&&(c="0"+c),r<10&&(r="0"+r),$(".days span").text(r),$(".hours span").text(c),$(".minutes span").text(f),$(".seconds span").text(p),$(".milliseconds span").text(u)}var a=new Date(2019,10,30,0,0,0,0),t=10,n=100*t,o=60*n,i=60*o,s=24*i,d=setInterval(e,10)}$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(".scroll").click(function(e){event.preventDefault();var a=$(this).attr("href"),t=$(a).offset().top;$("body,html").animate({scrollTop:t-40},1500)}),$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$(".menu").slideToggle(200)}),$('a[data-fancybox="gallery"]').click(function(){setTimeout(function(){$("[data-fancybox-thumbs]").trigger("click"),$("[data-fancybox-thumbs]").trigger("click")},500)}),e(),$(".days").append('<b class="title">дней</b>'),$(".hours").append('<b class="title">часов</b>'),$(".minutes").append('<b class="title">минут</b>'),$(".seconds").append('<b class="title">секунд</b>'),$(".milliseconds").append('<b class="title">миллисек.</b>'),$(".loop").owlCarousel({center:!1,loop:!0,margin:24,items:2,nav:!0,autoHeight:!0,autoplay:!0,autoplayHoverPause:!0,responsive:{0:{items:1,margin:0},600:{items:2,margin:20}}});var a=lozad();a.observe(),$("#phone").intlTelInput({defaultCountry:"ua",initialCountry:"auto",preferredCountries:["ua","ru","az","am","by","kz","kg","md","tj","uz","tm","ge"],autoPlaceholder:"aggressive",nationalMode:!1,customPlaceholder:function(e,a){return"+"+a.dialCode},geoIpLookup:function(e,a){$.get("https://ipinfo.io",function(){},"jsonp").always(function(a){var t=a&&a.country?a.country:"ua";e(t)})},separateDialCode:!1,formatOnDisplay:!1}),$(".check").each(function(){$(this).on("change",function(){var e=$(this).parents("form");$(this).prop("checked")?e.find(".phone").slideDown():e.find(".phone").slideUp()})}),$(".fade-a").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeIn",classToRemove:"hidden_animation",offset:0}),$(".down-a").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInDown",classToRemove:"hidden_animation",offset:0}),$(".left-a").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInLeft",classToRemove:"hidden_animation",offset:0}),$(".right-a, .programs-btn .before").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInRight",classToRemove:"hidden_animation",offset:0}),$(".up-a").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInUp",classToRemove:"hidden_animation",offset:0}),$(".price-item ul li").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeIn",classToRemove:"hidden_animation",offset:0})});