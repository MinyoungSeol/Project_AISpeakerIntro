$(document).ready(function() {

  $(".infoTab").click(function() {
    $(".tabLink").removeClass("tabLinkSelected");
    $(this).addClass("tabLinkSelected");
    $(".tabContent").css({display:"none"});
    $("#info").fadeIn();
  });//info

  $(".funcTab").click(function() {
    $(".tabLink").removeClass("tabLinkSelected");
    $(this).addClass("tabLinkSelected");
    $(".tabContent").css({display:"none"});
    $("#func").fadeIn();
  });//func

  $(".buyTab").click(function() {
    $(".tabLink").removeClass("tabLinkSelected");
    $(this).addClass("tabLinkSelected");
    $(".tabContent").css({display:"none"});
    $("#buy").fadeIn();
  });//buy

  $(".topBtn").click(function() {
    $('html, body').animate({
    scrollTop: '0'
    }, 800);
    return false;
  });

}); //ready