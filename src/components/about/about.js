let About = {
    templateUrl: '/components/about/about.tpl',
    controller: ['WordpressData', '$scope', '$window', '$location', (WordpressData, $scope, $window, $location) => {

        const firstNav = angular.element(document.querySelector('.nav__items .nav__item:first-of-type'));
        const secondNav = angular.element(document.querySelector('.nav__items .nav__item:nth-of-type(2)'));
        const thirdNav = angular.element(document.querySelector('.nav__items .nav__item:last-of-type'));
        const aboutContainer = angular.element(document.querySelector('.about__container'));
        const whiteRabbitDesktop = angular.element(document.querySelector('.nav__white-rabbit.mobile-hide'));
        const whiteRabbitMobile = angular.element(document.querySelector('.nav__white-rabbit.mobile-only'));
        const navMobileSocial = angular.element(document.querySelector('.nav__socials.mobile-only'));

        firstNav.removeClass('active');
        secondNav.addClass('active');
        thirdNav.removeClass('active');

        $scope.data = {};

        WordpressData.listAbout((response) => {
            $scope.data = response.data[0].acf;
            aboutContainer.removeClass('no-opacity');
        });

        navMobileSocial.addClass('mobile-hide').addClass('no-opacity');
        whiteRabbitMobile.addClass('mobile-hide');

    }]
};

export default About;
