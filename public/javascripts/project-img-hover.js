$(document).ready(function() {
  $(".img").mouseenter(function(){
      $(this).addClass("hover");
  })
  // handle the mouseleave functionality
  .mouseleave(function(){
      $(this).removeClass("hover");
  });
});
