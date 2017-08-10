let Home = {
    templateUrl: '/components/home/home.tpl',
	controller: ['WordpressData', '$scope', '$window', '$timeout', '$location', 'smoothScroll', '$interval',
	(WordpressData, $scope, $window, $timeout, $location, smoothScroll, $interval) => {

		let window_ = $window;

        const navIcon = angular.element(document.querySelector('.nav-icon'));
        const firstNav = angular.element(document.querySelector('.nav__items .nav__item:first-of-type'));
        const secondNav = angular.element(document.querySelector('.nav__items .nav__item:nth-of-type(2)'));
        const thirdNav = angular.element(document.querySelector('.nav__items .nav__item:last-of-type'));
        const intro = angular.element(document.querySelector('.intro'));
        const introText = angular.element(document.querySelector('.intro__text'));
        const introBg = angular.element(document.querySelector('.intro__bg'));
        const introScrollDown = angular.element(document.querySelector('.intro__scroll-down'));
        const introImage = angular.element(document.querySelector('.intro__image'));
        const introGradient = angular.element(document.querySelector('.intro__gradient'));
        const about = angular.element(document.querySelector('.about'));
        const projects = angular.element(document.querySelector('.projects'));
		const projectsContainer = angular.element(document.querySelector('.projects__container'));
		const whiteRabbit = angular.element(document.querySelector('.nav__white-rabbit.mobile-hide'));

		secondNav.removeClass('active');
		thirdNav.removeClass('active');

		if (!$scope.data) {
			$scope.data = {};
		}

		WordpressData.listNav((response) => {
			$scope.data.nav = response.data[0].acf;
		});

		let showStuff = () => {
			$timeout(() => {
				introImage.removeClass('no-opacity');
				introScrollDown.removeClass('no-opacity');
				introText.removeClass('no-opacity');
			}, 1000);
		};

		WordpressData.listHome((response) => {
			$scope.data.home = response.data[0].acf;
			console.log('home,', $scope.data.home);
			showStuff();
		});

		WordpressData.fetchCats().then(() => {
			$scope.data.categories = WordpressData.categories;
		});

		WordpressData.fetchPortfolio().then(() => {
			$scope.data.portfolio = WordpressData.portfolio;
		});

        let changeIntroTextSize = (scrollPos) => {
		    if (scrollPos < 1201) {
	            introText.css({'transform': 'translate3d(-50%, -50%, 0) scale(' + (30 - (scrollY / 50)) + ')', '-webkit-transform': 'translate3d(-50%, -50%, 0) scale(' + (30 - (scrollY / 50)) + ')', });
	            introText.removeClass('no-opacity');
	            intro.removeClass('no-opacity');
            } else {
            	introText.addClass('no-opacity');
            	intro.addClass('no-opacity');
            }
		};

		let changeScrollOpacity = (scrollPos) => {
			if (scrollPos < 3000) {
				introScrollDown.removeClass('no-opacity');				
            } else {
				introScrollDown.addClass('no-opacity');
            }
		};

		let changeIntroImageOpacity = (scrollPos) => {
			if (scrollPos > 3000) {
	            introBg.addClass('no-opacity');
            } else {
            	introBg.removeClass('no-opacity');
            }
		};

		let imageWidth = 0;
		let imagePosition = 0;
		let changeIntroImagePosition = (scrollPos) => {
			if (scrollPos < 1201) {
				introImage.css({'transform': 'scale(1) translate3d(0px,0px,0px)', '-webkit-transform': 'scale(1) translate3d(0px,0px,0px)'});
		    }
		    if (scrollPos > 1200 && scrollPos < 1400) {
				imageWidth = ((100 - ((scrollPos - 1201)/15))*.01);
				imagePosition = (1200*1.45) - (scrollPos*1.45);
				introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)'});
		    }
		    if (scrollPos > 1399 && scrollPos < 1901) {
				imagePosition = (1200*1.45) - (scrollPos*1.45);
		    	introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)'});
		    }
		    if (scrollPos > 1900 && scrollPos < 2900) {
		    	introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)'});
		    }
		    if (scrollPos > 2899) {
				imagePosition = (2199*1.45) - (scrollPos*1.45);
		    	introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)'});
		    }
		};

		let gradientWidth = 0;
		let gradientPosition = 0;
		let changeIntroGradientPosition = (scrollPos) => {
		    if (scrollPos < 1201) {
		    	introGradient.css({'transform': 'scale(1) translate3d(0px,0px,0px)', '-webkit-transform': 'scale(1) translate3d(0px,0px,0px)'});
		    }
		    if (scrollPos > 1200 && scrollPos < 1400) {
				gradientWidth = ((100 - ((scrollPos - 1201)/20))*.01);
				introGradient.css({'transform': 'scale(' + gradientWidth + ')', '-webkit-transform': 'scale(' + gradientWidth + ')'});
		    }
		    if (scrollPos > 1399 && scrollPos < 1901) {
				gradientPosition = (1399*1.3) - (scrollPos*1.3);
		    	introGradient.css({'transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)', '-webkit-transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)'});
		    }
		    if (scrollPos > 1900 && scrollPos < 2900) {
		    	introGradient.css({'transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)', '-webkit-transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)'});
		    }
		    if (scrollPos > 2899) {
				gradientPosition = (2399*1.3) - (scrollPos*1.3);
		    	introGradient.css({'transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)', '-webkit-transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)'});
		    }
		};

		let changeAboutOpacity = (scrollPos) => {
			if (scrollPos > 1600 && scrollPos < 3200) {
				about.removeClass('no-opacity');
			} else {
				about.addClass('no-opacity');
			}
		};

		let changeProjectsPosition = (scrollPos) => {
		    if (scrollPos < 3200) {
		    	projects.addClass('no-opacity');
				projectsContainer.addClass('no-opacity');
				firstNav.removeClass('active');
				secondNav.removeClass('active');
				thirdNav.removeClass('active');
		    }
		    if (scrollPos > 3199) {
				firstNav.addClass('active');
		    	projects.removeClass('no-opacity');
		    	projectsContainer.removeClass('no-opacity');
		    }
		};

		$scope.showBg = (slug) => {
			angular.element(document.querySelectorAll('.projects__bg')).addClass('no-opacity');
			angular.element(document.querySelector('.projects__bg.' + '_' + slug)).removeClass('no-opacity');
		};

		$scope.hideBg = (slug) => {
			angular.element(document.querySelectorAll('.projects__bg')).addClass('no-opacity');
		};

		let loop = () => {
		    let scrollTop = window_.scrollY;
		    if (lastScrollTop === scrollTop) {
		        return raf(loop);
		    } else {
		        lastScrollTop = scrollTop;

		        // fire scroll function if scrolls vertically
				changeIntroTextSize(scrollTop);
				changeScrollOpacity(scrollTop);
				changeIntroImagePosition(scrollTop);
				changeIntroGradientPosition(scrollTop);
				changeIntroImageOpacity(scrollTop);
				changeAboutOpacity(scrollTop);
				changeProjectsPosition(scrollTop);
		        raf(loop);
		    }
		};

		let resetAll = () => {
			setTimeout(() => {
				changeIntroTextSize(window_.scrollY);
				changeScrollOpacity(window_.scrollY);
				changeIntroImageOpacity(window_.scrollY);
				changeIntroImagePosition(window_.scrollY);
				changeIntroGradientPosition(window_.scrollY);
				changeAboutOpacity(window_.scrollY);
				changeProjectsPosition(window_.scrollY);
			}, 4000)
		};

		angular.element(document.getElementById('nav__home')).on('click', resetAll);

		let raf = window.requestAnimationFrame ||
		    window.webkitRequestAnimationFrame ||
		    window.mozRequestAnimationFrame ||
		    window.msRequestAnimationFrame ||
		    window.oRequestAnimationFrame;

		let lastScrollTop = window_.scrollY;

		if (raf) {
		    loop();
		}

		if ($location.search().q === 'work') {
			smoothScroll(document.getElementById('projects-indicator'));
		}

		$scope.showFilter = function() {
			navIcon.addClass('open');
			modal.addClass('no-opacity');
			modalMask.addClass('no-opacity');
		};

		$scope.hideFilter = function() {
			navIcon.removeClass('open');
			modal.addClass('no-opacity');
			modalMask.addClass('no-opacity');
		};

		$scope.$on('$locationChangeStart', function(next, current) { 
			if ($location.search().q === 'work') {
				smoothScroll(document.getElementById('projects-indicator'));
			} else {
				smoothScroll(document.getElementById('top'));
			}
		});

    }]
};

export default Home;
