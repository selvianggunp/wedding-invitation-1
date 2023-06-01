// $(window).scroll(function () {
//     var wscroll = $(this).scrollTop();
//     console.log(wscroll);
//     $("h1").css({
//       transform: "translate(0px, " + wscroll + "%)",
//     });
  
//     $(".kotak").css({
//       transform: "translate(0px, " + wscroll / 7 + "%)",
//     });
//   });

$(document).ready(function(){
  $(window).on("load", function () {
    $("h1").addClass("muncul");
    $("h2").addClass("muncul");
  });
});