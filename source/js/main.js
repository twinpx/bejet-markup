$( window ).scroll( function() {
  var top = $( document ).scrollTop() + parseInt( window.screen.height ) - 150;
  
  $( 'fieldset' ).each( function() {
    if ( $( this ).offset().top < top ) {
      $( this ).addClass( 'i-move' );
    }
  });
  
}).scroll();

$( 'form' ).form();

var $demoIframe = $( '#demo-iframe' );
var $window = $(window);
if ( $demoIframe.length ) {
  $window.resize( function() {
    $demoIframe.height( $window.height() - $demoIframe.offset().top );
  }).resize();
}

var container = document.getElementById( 'b-slider' );
Ps.initialize(container);