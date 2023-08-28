$(document).ready(function(){

	
	$("#input-search").on("focus", function(){

		$("li.search").addClass("ativo");

	}).on("blur", function(){

		$("li.search").removeClass("ativo");				

	});


	$(".thumbnails").owlCarousel({
 
      //autoPlay: 3000,
      items : 4
 
  	});

	  var owl = $('.owl-carousel');
	  owl.owlCarousel();

	  $('#btn-news-prev').click(function() {
		  owl.trigger('next.owl.carousel');
	  })

	  $('#btn-news-next').click(function() {
		  owl.trigger('next.owl.carousel');
	  })
	  $("#btn-bars").on("click", function(){

		$("header").toggleClass("open-menu");
  
	  });
  
	  $("#menu-mobile-mask, .btn-close").on("click", function(){
  
		$("header").removeClass("open-menu");
  
  
	  });
  
	  $("#btn-search").on("click", function(){
  
		$("header").toggleClass("open-search");
		$("#input-search-mobile").focus();
  
	  });
  
  });
  

