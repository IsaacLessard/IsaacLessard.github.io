$( document ).ready(function() {
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
    // $('.main').load(function(){
		//     $('.circleNav').fadeIn("slow", function(){
		// 	       $('.circleNav').addClass("ungrey");
	  //    });
    //  });
  });
});

var $para = "<p>does it work</p>";

$('.circImg').hover(function(){
  $(this).next().text('Get amongst it');
});

var circleImage = document.getElementsByClassName('circImg');

function resetIt(event){

}
