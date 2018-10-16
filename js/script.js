$(function( ){
   

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
     });
     
    $('#updates').on('submit', 'form', function(event) {
        event.preventDefault();
        let $email= $('#email');
        if ($email.val().length!==0) {
          alert('Thanks for subscribing!');
        } else {
          alert('Please enter a valid email!');
        }
       });
   

   
    $('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true
  });

});

