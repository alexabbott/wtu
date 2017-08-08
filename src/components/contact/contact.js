let Contact = {
    templateUrl: '/components/contact/contact.tpl',
    controller: ['WordpressData', '$scope', '$window', (WordpressData, $scope, $window) => {

        WordpressData.listContact((response) => {
            $scope.data = response.data[0].acf;
            console.log('contact data', $scope.data);
        });

		let window_ = $window;

        const firstNav = angular.element(document.querySelector('.nav__items .nav__item:first-of-type'));
        const secondNav = angular.element(document.querySelector('.nav__items .nav__item:nth-of-type(2)'));
        const thirdNav = angular.element(document.querySelector('.nav__items .nav__item:last-of-type'));
        const contact = angular.element(document.querySelector('.contact'));
        const contact1 = angular.element(document.querySelector('.contact__text-1'));
        const contact2 = angular.element(document.querySelector('.contact__text-2'));
        const contact3 = angular.element(document.querySelector('.contact__text-3'));
        const contact4 = angular.element(document.querySelector('.contact__text-4'));
        const contact5 = angular.element(document.querySelector('.contact__text-5'));
        const contactEmail = angular.element(document.querySelector('.contact__email'));
        const contactSignup = angular.element(document.querySelector('.mc_embed'));

        firstNav.removeClass('active');
        secondNav.removeClass('active');
        thirdNav.addClass('active');

		let changeContactOpacity = () => {
			contact.removeClass('no-opacity');
			contact1.addClass('fade-in one');
			contact2.addClass('fade-in two');
			contact3.addClass('fade-in three');
			contact4.addClass('fade-in four');
			contact5.addClass('fade-in five');
			contactEmail.addClass('fade-in six');
			contactSignup.addClass('fade-in seven');
        };
        
        changeContactOpacity();
    }]
};

export default Contact;
