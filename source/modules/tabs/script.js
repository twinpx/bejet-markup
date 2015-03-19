  $.fn.tabs = function() {
    return this.each( function() {
      var self = this,
          $this = $( self ),
          $tabs = $this.find( '.b-tabs__tab' ),
          $items = $this.find( '.b-tabs__i' ),
          $decor = $this.find( '.b-tabs__decor' );
          
      $tabs.click( clickTab );
      
      function clickTab(e) {
        var $this = $( e.target );
        e.preventDefault();
        
        if ( $this.hasClass( 'i-active' )) {
          return;
        }
        
        highlightTab( $this );
        moveDecor( $this );
        showItem( $this );
        
      }
      
      function showItem( $tab ) {
        var tab = $tab.data( 'tab' );
        $this.find( '.b-tabs__i' ).each( function() {
          var $item = $( this );
          if ( $item.data( 'tab' ) === tab ) {
            $items.removeClass( 'i-active' );
            $item.addClass( 'i-active' );
          }
        });
      }
      
      function moveDecor( $tab ) {
        $decor.css({
          left: $tab.position().left + 'px',
          width: $tab.outerWidth()
        });
      }
      
      function highlightTab( $tab ) {
        $tabs.removeClass( 'i-active' );
        $tab.addClass( 'i-active' );
      }
    });
  };
  
  $( '.b-tabs' ).tabs();