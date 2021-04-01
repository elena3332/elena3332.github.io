$(document).ready(function() {
 
 
   $("a.header-wrapper").click(function() {
      $("html, body").animate({
         scrollBottom: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
 
 
});