let Navigation = {
  templateUrl: '/components/navigation/navigation.tpl',
  controller: ['WordpressData', '$scope', '$window', '$timeout', '$location', (WordpressData, $scope, $window, $timeout, $location) => {

    WordpressData.listNav((response) => {
			$scope.navOpen = false;
      $scope.data = response.data[0].acf;

      const nav = angular.element(document.querySelector('.nav__main'));
      const navIcon = angular.element(document.querySelector('.nav-icon'));
      const whiteRabbit = angular.element(document.querySelector('.white-rabbit'));
      const rabbitVideo = angular.element(document.querySelector('.white-rabbit__video'));
			const navRabbit = angular.element(document.querySelector('.nav__white-rabbit__image'));

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
			}

			$timeout(() => {
				nav.removeClass('no-opacity');
				if ($location.path() && $location.path().indexOf('internal') > -1) {
					navRabbit.addClass('rotate');
				}
			}, 100);

    });

  }]
};

export default Navigation;
