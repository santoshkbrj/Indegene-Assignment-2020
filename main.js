$(document).on('ready', function() {

    // Slick Slider
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });



  // Select all »a« elements with a parent class »links« and add a function that is executed on click
$( '.navbar-nav a' ).on( 'click', function(e){
	
    // Define variable of the clicked »a« element (»this«) and get its href value.
    var href = $(this).attr( 'href' );
    
    // Run a scroll animation to the position of the element which has the same id like the href value.
    $( 'html, body' ).animate({
          scrollTop: $( href ).offset().top
    }, '300' );
      
    // Prevent the browser from showing the attribute name of the clicked link in the address bar
    e.preventDefault();
  
  });


// Sticky Header
  $(window).scroll(function(){
    var sticky = $('#header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
});