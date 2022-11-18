$(document).ready(function() {

        $(".toggleBtn").click(function() {
    $(".gnb").slideToggle(1000);
  });

  $(".videoWrap img:first-of-type").mouseover(function() {
    $(this).attr("src","banner/ad1_1.jpg");
  })
  $(".videoWrap img:first-of-type").mouseout(function() {
    $(this).attr("src","banner/ad1.jpg");
  })

  $(".videoWrap img:nth-of-type(2)").mouseover(function() {
    $(this).attr("src","banner/ad2_1.jpg");
  })
  $(".videoWrap img:nth-of-type(2)").mouseout(function() {
    $(this).attr("src","banner/ad2.jpg");
  })

  $(".videoWrap img:first-of-type").click(function() {
    $(".adModal").fadeIn(500);
    $(".modal2").css({display:"none"});
    $(".modal").css({display:"block"});
  })

  $(".videoWrap img:nth-of-type(2)").click(function() {
    $(".adModal").fadeIn(500);
    $(".modal").css({display:"none"});
    $(".modal2").css({display:"block"});
  })

  $(".adModal span").click(function() {
    $(".adModal").fadeOut("fast");
  })

}); //ready