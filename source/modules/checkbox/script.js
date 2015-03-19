$( '.b-checkbox' ).click( function(e) {
  $( this )
    .toggleClass( 'i-unchecked' )
    .removeClass( 'i-warning' );
});

$( '.b-checkbox :checkbox' ).click( function(e) {
  e.stopPropagation();
});