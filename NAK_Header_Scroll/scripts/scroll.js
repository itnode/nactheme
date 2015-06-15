var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement;
    var header = document.querySelector( 'header' );
	var didScroll = false;
	var changeHeaderOn = 50;

	function init() {
		
        window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 50 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();

        if ( sy >= changeHeaderOn ) {
		
            classie.add( header, 'header-scroll' );
		
        } else {
		
            classie.remove( header, 'header-scroll' );
		
        }
		
        didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
