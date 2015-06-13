var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.header-initial' ),
		logo = document.querySelector( '#logo' ),
		wordmark = document.querySelector( '#wordmark' ),
		toolbar = document.querySelector( '#toolbar' ),
		nav = document.querySelector( 'nav' ),
		didScroll = false,
		changeHeaderOn = 50;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'header-scroll' );
			classie.add( logo, 'logo-scroll' );
			classie.add( wordmark, 'hide-on-scroll' );
			classie.add( toolbar, 'baseline-scroll' );
			classie.add( nav, 'baseline-scroll' );
		}
		else {
			classie.remove( header, 'header-scroll' );
			classie.remove( logo, 'logo-scroll' );
			classie.remove( wordmark, 'hide-on-scroll' );
			classie.remove( toolbar, 'baseline-scroll' );
			classie.remove( nav, 'baseline-scroll' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();