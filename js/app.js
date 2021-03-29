



$(document).ready(function (){
	$('.main-slide').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    autoplay:true,
    	autoplayTimeout:1000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
	$('.category-cart').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots: false,	    
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:4
	        }
	    }
	});
	$('.feature-cart').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:4
	        }
	    }
	});	
});