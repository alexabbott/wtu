let Sidenav = {
    templateUrl: '/components/sidenav/sidenav.tpl',
    controller: ['WordpressData', '$scope', '$window', '$timeout', (WordpressData, $scope, $window, $timeout) => {

        WordpressData.listNav((response) => {
            $scope.data = response.data.acf;
            console.log('nav data', $scope.data);

			const whiteRabbit = angular.element(document.querySelector('.white-rabbit'));
			const rabbitVideo = angular.element(document.querySelector('.white-rabbit__video'));
			const navRabbit = angular.element(document.querySelector('.nav__white-rabbit__image'));

			$scope.hideWhiteRabbit = () => {
				whiteRabbit.addClass('no-opacity');
				whiteRabbit.css('z-index', 4);
				rabbitVideo.attr('src', '');
				navRabbit.attr('src', $scope.data.white_rabbit_image.url);
			};

			$scope.showWhiteRabbit = () => {
				if (whiteRabbit.hasClass('no-opacity')) {
					whiteRabbit.removeClass('no-opacity');
					whiteRabbit.css('z-index', 8);
					let videoSrc = rabbitVideo.attr('data-src');
					console.log('vid', videoSrc);
					rabbitVideo.attr('src', videoSrc);
					navRabbit.attr('src', $scope.data.white_rabbit_image_active.url);
				} else {
					$scope.hideWhiteRabbit();
				}
			};
        });

        $scope.navColor = 'black';

        const nav = angular.element(document.querySelector('nav'));

		let changeNavOpacity = (scrollPos) => {
		    if (scrollPos > 400) {
	            nav.removeClass('no-opacity');
            } else {
            	nav.addClass('no-opacity');
            }
		};

		let changeNavColor = (scrollPos) => {
			if (scrollPos >= 1200 && scrollPos < 4800) {
				nav.addClass('color-alt');
				nav.addClass('logo-alt');
			} else if (scrollPos >= 4800) {
				nav.addClass('logo-alt');
				nav.removeClass('color-alt');
			} else if (scrollPos < 1200) {
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