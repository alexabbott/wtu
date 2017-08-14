let Navigation = {
  templateUrl: '/components/navigation/navigation.tpl',
  controller: ['WordpressData', '$scope', '$window', '$timeout', '$location', (WordpressData, $scope, $window, $timeout, $location) => {

    WordpressData.listNav((response) => {
			$scope.navOpen = false;
			$scope.data = response.data[0].acf;

      const nav = angular.element(document.querySelector('.nav__main'));
      const navItems = angular.element(document.querySelector('.nav__items'));
      const navLogo = angular.element(document.querySelector('.nav__logo'));
      const whiteRabbit = angular.element(document.querySelector('.nav__white-rabbit'));
      const navIcon = angular.element(document.querySelector('.nav-icon'));
      const navSocials = angular.element(document.querySelector('.nav__socials'));
			const navRabbitImage = angular.element(document.querySelector('.nav__white-rabbit__image'));

			$scope.openCloseNav = () => {
				let modal = angular.element(document.querySelector('.modal'));
				let modalMask = angular.element(document.querySelector('.modal-mask'));
				if (modal && modal.hasClass('modal') && !modal.hasClass('no-opacity')) {
					modal.addClass('no-opacity');
					modalMask.addClass('no-opacity');
					navIcon.removeClass('open');
				} else {
					$scope.navOpen = !$scope.navOpen;
				}
			}

			$scope.closeNav = () => {
					navIcon.removeClass('open');
					$scope.navOpen = false;
			}

			$timeout(() => {
				nav.removeClass('no-opacity');
				navItems.addClass('fadeInRight');
				navLogo.addClass('fadeInLeft');
				navSocials.addClass('fadeInRight');
				navRabbitImage.addClass('fadeInLeft');
				if ($location.path() && $location.path().indexOf('internal') > -1) {
					navRabbitImage.addClass('rotate');
				}
			}, 100);

		});

		let window_ = $window;
		
		let loop = () => {
		    let scrollTop = window_.scrollY;
		    if (lastScrollTop === scrollTop) {
		        return raf(loop);
		    } else {
						lastScrollTop = scrollTop;
						let navSocials = angular.element(document.querySelector('.nav__socials'));
						let navRabbitImage = angular.element(document.querySelector('.nav__white-rabbit__image'));
						
						if (scrollTop > 50) {
							navSocials.addClass('fadeOutRight');
							navRabbitImage.addClass('fadeOutLeft');
						} else {
							navSocials.removeClass('fadeOutRight');
							navRabbitImage.removeClass('fadeOutLeft');
						}
		        raf(loop);
		    }
		};

		let raf = window.requestAnimationFrame ||
		    window.webkitRequestAnimationFrame ||
		    window.mozRequestAnimationFrame ||
		    window.msRequestAnimationFrame ||
		    window.oRequestAnimationFrame;

		let lastScrollTop = window_.scrollY;

		if (raf) {
		    loop();
		}

  }]
};

export default Navigation;
