$( window ).scroll( function() {
  var top = $( document ).scrollTop() + parseInt( window.screen.height ) - 150;
  
  $( 'fieldset' ).each( function() {
    if ( $( this ).offset().top < top ) {
      $( this ).addClass( 'i-move' );
    }
  });
  
}).scroll();

$( 'form' ).form();