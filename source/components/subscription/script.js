( function($) {

  'use strict';
  
  $( function() {
  
    var $form = $( '.b-subscription form' );
    
    $( '.b-subscription' ).delegate( '.b-subscription__send-again', 'click', function(e) {
      var $subscription = $( this ).closest( '.b-subscription' );
      $subscription.addClass( 'i-fadeout' );
      setTimeout( function() {
        $subscription
          .removeClass( 'i-error' )
          .removeClass( 'i-success' )
          .removeClass( 'i-fadeout' );
      }, 500);
      $form.find( 'input' ).val('');
      e.preventDefault();
    });
    
    $form.data( 'Form' ).submitForm = function(e) {
      var $form = $( e.target );
      var self = $form.data( 'Form' );
      var $subscription = $form.closest( '.b-subscription' );
      if ( self.$submitButton.hasClass( 'i-disabled' ) || !self.isValid() ) {
        e.preventDefault();
      } else if( self.$elem.attr( 'action' ).search( 'json' ) !== -1 ) {
  
        $.ajax({
          url: self.$elem.attr("action"),
          type: self.$elem.attr("method"),
          dataType: "json",
          data: self.$elem.serialize(),
          success: function(data) {
          
            if( data && data.STATUS && data.STATUS === "Y" ) {
            
              self.$elem.closest( '.b-subscription' ).addClass( 'i-fadeout' );
              setTimeout( function() {
                self.$elem.closest( '.b-subscription' )
                  .addClass( 'i-success' )
                  .removeClass( 'i-error' )
                  .removeClass( 'i-fadeout' );
              }, 500);
              $subscription.find( '.b-message' ).html( data.MESSAGE );
              
            } else if ( data && data.STATUS && data.STATUS === "E" ) {
            
              self.$elem.closest( '.b-subscription' ).addClass( 'i-fadeout' );
              setTimeout( function() {
                self.$elem.closest( '.b-subscription' )
                  .addClass( 'i-error' )
                  .removeClass( 'i-success' )
                  .removeClass( 'i-fadeout' );
              }, 500);
              $subscription.find( '.b-message' ).html( data.MESSAGE );
              
            }
          },
          error: function() {}
        });
        
        e.preventDefault();
      }
    };
    
    $form.submit( $form.data( 'Form' ).submitForm );
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));