let Navigation = {
  templateUrl: '/components/navigation/navigation.tpl',
  controller: ['WordpressData', '$scope', '$window', '$timeout', '$location', (WordpressData, $scope, $window, $timeout, $location) => {

    WordpressData.listNav((response) => {
			$scope.navOpen = false;
      $scope.data = response.data[0].acf;

      const nav = angular.element(document.querySelector('.nav__main'));
      const navIcon = angular.element(document.querySelector('.nav-icon'));
      const rabbitVideo = angular.element(document.querySelector('.white-rabbit__video'));
			const navRabbit = angular.element(document.querySelector('.nav__white-rabbit__image'));
			const whiteRabbitMobile = angular.element(document.querySelector('.nav__white-rabbit.mobile-only'));
			const whiteRabbitDesktop = angular.element(document.querySelector('.nav__white-rabbit.mobile-hide'));
			const navMobileSocial = angular.element(document.querySelector('.nav__socials.mobile-only'));

			$scope.openCloseNav = () => {
				let modal = angular.element(document.querySelector('.modal'));
				let modalMask = angular.element(document.querySelector('.modal-mask'));
				if (modal.hasClass('modal') && !modal.hasClass('no-opacity')) {
					modal.addClass('no-opacity');
					modalMask.addClass('no-opacity');
					navIcon.removeClass('open');
				} else {
					$scope.navOpen = !$scope.navOpen;
				}
				if (!$scope.navOpen) {
					whiteRabbitMobile.addClass('no-opacity');
				} else {
					whiteRabbitMobile.removeClass('no-opacity');
				}
			}


			$timeout(() => {
				nav.removeClass('no-opacity');
				if ($location.path() && $location.path().indexOf('internal') > -1) {
					navRabbit.addClass('rotate');
				}
			}, 100);

			let loop = () => {
					let scrollTop = $window.scrollY;
					if (lastScrollTop === scrollTop) {
							return raf(loop);
					} else {
							lastScrollTop = scrollTop;

							// fire scroll function if scrolls vertically
							if (($window.innerHeight + scrollTop + 300) >= document.body.offsetHeight) {
									// you're at the bottom of the page
									navMobileSocial.removeClass('no-opacity');
							} else {
									navMobileSocial.addClass('no-opacity')
							}

							raf(loop);
					}
			};

			let raf = window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					window.oRequestAnimationFrame;

			let lastScrollTop = $window.scrollY;

			if (raf) {
					loop();
			}

    });

  }]
};

export default Navigation;
