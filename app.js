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

function resetIt(event){
  $('.forForest').style.display = "none";
  $('.forIsaac').style.display = "none";
  $('.forOcean').style.display = "none";

}

$('.forest').hover(function(){
  $('.forForest').addClass('display');
  $('.forIsaac').removeClass('display');
  $('.forOcean').removeClass('display');
});


$('.isaac').hover(function(){
  $('.forIsaac').addClass('display');
  $('.forOcean').removeClass('display');
  $('.forForest').removeClass('display');
});


$('.ocean').hover(function(){
  $('.forOcean').addClass('display');
  $('.forIsaac').removeClass('display');
  $('.forForest').removeClass('display');
});

$('.circDesc').hover(function(){
		$(this).find('h4').fadeIn("slow", function(){
			$(this).toggleClass("ungrey");
		});
	});
var circleImage = document.getElementsByClassName('circImg');
