let About = {
    templateUrl: '/components/about/about.tpl',
    controller: ['WordpressData', '$scope', '$window', (WordpressData, $scope, $window) => {

        const firstNav = angular.element(document.querySelector('.nav__items .nav__item:first-of-type'));
        const secondNav = angular.element(document.querySelector('.nav__items .nav__item:nth-of-type(2)'));
        const thirdNav = angular.element(document.querySelector('.nav__items .nav__item:last-of-type'));
        const aboutContainer = angular.element(document.querySelector('.about__container'));
        const whiteRabbit = angular.element(document.querySelector('.nav__white-rabbit'));

        firstNav.removeClass('active');
        secondNav.addClass('active');
        thirdNav.removeClass('active');

        $scope.data = {};

        WordpressData.listAbout((response) => {
            $scope.data = response.data[0].acf;
            aboutContainer.removeClass('no-opacity');
            console.log('data', $scope.data);
        });
        console.log('widt', $window.innerWidth);
        if ($window.innerWidth < 768) {
            whiteRabbit.addClass('mobile-hide');
        }

    }]
};

export default About;
