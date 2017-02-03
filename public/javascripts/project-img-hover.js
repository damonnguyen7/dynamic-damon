$(document).ready(function() {
  $(".img").mouseenter(function(){
      console.log('working!');
      $(this).addClass("hover");
  })
  // handle the mouseleave functionality
  .mouseleave(function(){
      console.log('hover off working');
      $(this).removeClass("hover");
  });
});