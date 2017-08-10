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
					navRabbit.addClass('rotate');
				}
			}, 100);

    });

  }]
};

export default Navigation;
