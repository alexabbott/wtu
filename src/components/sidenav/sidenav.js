let Sidenav = {
    templateUrl: '/components/sidenav/sidenav.tpl',
    controller: ['WordpressData', '$scope', '$window', (WordpressData, $scope, $window) => {

        WordpressData.listNav((response) => {
            $scope.data = response.data.acf;
            console.log('nav data', $scope.data);
        });

        const nav = angular.element(document.querySelector('nav'));
        $scope.navColor = 'black';

		let changeNavOpacity = (scrollPos) => {
		    if (scrollPos > 400) {
	            nav.removeClass('no-opacity');
            } else {
            	nav.addClass('no-opacity');
            }
		};

		let changeNavColor = (scrollPos) => {
			if (scrollPos > 1200 && scrollPos < 5500) {
				nav.addClass('color-alt');
				nav.addClass('logo-alt');
			} else if (scrollPos > 5599) {
				nav.addClass('logo-alt');
				nav.removeClass('color-alt');
			} else if (scrollPos < 1201) {
				nav.removeClass('color-alt');
				nav.removeClass('logo-alt');
			}
		};

		let loop = () => {
		    let scrollTop = window_.scrollY;
		    if (lastScrollTop === scrollTop) {
		        raf(loop);
		        return;
		    } else {
		        lastScrollTop = scrollTop;

		        // fire scroll function if scrolls vertically
		        changeNavOpacity(scrollTop);
		        changeNavColor(scrollTop);
		        raf(loop);
		    }
		};

		let raf = window.requestAnimationFrame ||
		    window.webkitRequestAnimationFrame ||
		    window.mozRequestAnimationFrame ||
		    window.msRequestAnimationFrame ||
		    window.oRequestAnimationFrame;

		let window_ = $window;
		let lastScrollTop = window_.scrollY;

		if (raf) {
		    loop();
		}
    }]
};

export default Sidenav;