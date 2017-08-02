let Sidenav = {
    templateUrl: '/components/sidenav/sidenav.tpl',
    controller: ['WordpressData', '$scope', '$window', '$timeout', (WordpressData, $scope, $window, $timeout) => {

        WordpressData.listNav((response) => {
            $scope.data = response.data[0].acf;
            console.log('nav data', $scope.data);

			const nav = angular.element(document.querySelector('nav'));
			const whiteRabbit = angular.element(document.querySelector('.white-rabbit'));
			const rabbitVideo = angular.element(document.querySelector('.white-rabbit__video'));
			const navRabbit = angular.element(document.querySelector('.nav__white-rabbit__image'));


			$timeout(() => {
				console.log('change nav');
				nav.removeClass('no-opacity');
			}, 100);

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

    }]
};

export default Sidenav;