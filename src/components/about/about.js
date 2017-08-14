let About = {
    templateUrl: '/components/about/about.tpl',
    controller: ['WordpressData', '$scope', '$window', '$location', '$compile', (WordpressData, $scope, $window, $location, $compile) => {

        const firstNav = angular.element(document.querySelector('.nav__items .nav__item:first-of-type'));
        const secondNav = angular.element(document.querySelector('.nav__items .nav__item:nth-of-type(2)'));
        const thirdNav = angular.element(document.querySelector('.nav__items .nav__item:last-of-type'));
        const aboutContainer = angular.element(document.querySelector('.about__container'));

        firstNav.removeClass('active');
        secondNav.addClass('active');
        thirdNav.removeClass('active');

        $scope.data = {};

        WordpressData.listAbout((response) => {
            $scope.data = response.data[0].acf;
            aboutContainer.removeClass('no-opacity');
        });

    }]
};

export default About;
