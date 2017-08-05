let Navigation = {
  templateUrl: '/components/navigation/navigation.tpl',
  controller: ['WordpressData', '$scope', '$window', '$timeout', '$location', (WordpressData, $scope, $window, $timeout, $location) => {

    WordpressData.listNav((response) => {
      $scope.data = response.data[0].acf;

      const nav = angular.element(document.querySelector('.nav__main'));
      const whiteRabbit = angular.element(document.querySelector('.white-rabbit'));
      const rabbitVideo = angular.element(document.querySelector('.white-rabbit__video'));
      const navRabbit = angular.element(document.querySelector('.nav__white-rabbit__image'));


			$timeout(() => {
				nav.removeClass('no-opacity');
				if ($location.path() && $location.path().indexOf('internal') > -1) {
					navRabbit.addClass('rotate');
				}
			}, 100);

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

  }]
};

export default Navigation;
