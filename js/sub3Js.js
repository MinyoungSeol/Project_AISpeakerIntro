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

  $(".accordian:nth-of-type(1)").click(function() {
    $(".panel:nth-of-type(1)").slideToggle();
  });
  $(".accordian:nth-of-type(2)").click(function() {
    $(".panel:nth-of-type(2)").slideToggle();
  });
  $(".accordian:nth-of-type(3)").click(function() {
    $(".panel:nth-of-type(3)").slideToggle();
  });
  $(".accordian:nth-of-type(4)").click(function() {
    $(".panel:nth-of-type(4)").slideToggle();
  });
  $(".accordian:nth-of-type(5)").click(function() {
    $(".panel:nth-of-type(5)").slideToggle();
  });
  $(".accordian:nth-of-type(6)").click(function() {
    $(".panel:nth-of-type(6)").slideToggle();
  });
  $(".accordian:nth-of-type(7)").click(function() {
    $(".panel:nth-of-type(7)").slideToggle();
  });

}); //ready