$( '#b-slider' ).click( function(e) {
  e.stopPropagation();
});

$( document ).bind( 'click', function() {
  $( '#b-slider.i-open' ).removeClass( 'i-open' );
});