$(document).ready(function(){$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$(".menu").slideToggle(200)}),$("[data-modal]").click(function(t){t.preventDefault(),$($(this).attr("href")).css({display:"flex"})}),$(".close").click(function(){$(this).parents(".modal").hide("200")}),$(document).mouseup(function(t){var e=$(".modal .modal-content");e.is(t.target)||0!==e.has(t.target).length||e.parent().hide(200)})});