let Home = {
    templateUrl: '/components/home/home.tpl',
	controller: ['WordpressData', '$scope', '$window', '$timeout', '$location', 'smoothScroll', '$interval', '$anchorScroll',
	(WordpressData, $scope, $window, $timeout, $location, smoothScroll, $interval, $anchorScroll) => {

		let window_ = $window;

        const firstNav = angular.element(document.querySelector('.nav__items .nav__item:first-of-type'));
        const secondNav = angular.element(document.querySelector('.nav__items .nav__item:nth-of-type(2)'));
        const thirdNav = angular.element(document.querySelector('.nav__items .nav__item:last-of-type'));
        const intro = angular.element(document.querySelector('.intro'));
        const introText = angular.element(document.querySelector('.intro__text'));
        const introBg = angular.element(document.querySelector('.intro__bg'));
        const introScrollDown = angular.element(document.querySelector('.intro__scroll-down'));
        const introImage = angular.element(document.querySelector('.intro__image'));
        const introGradient = angular.element(document.querySelector('.intro__gradient'));
        const blotch = angular.element(document.querySelector('.blotch'));
        const about = angular.element(document.querySelector('.about'));
        const modal = angular.element(document.querySelector('.modal'));
        const modalMask = angular.element(document.querySelector('.modal-mask'));
        const modalClose = angular.element(document.querySelector('.modal-close'));
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
				introScrollDown.removeClass('no-opacity').addClass('fadeInUp');
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
		    if (scrollPos < 401) {
	            introText.css({'transform': 'translate3d(-50%, -50%, 0) scale(' + (30 - (scrollY / 20)) + ')', '-webkit-transform': 'translate3d(-50%, -50%, 0) scale(' + (30 - (scrollY / 20)) + ')', });
	            introText.removeClass('no-opacity');
	            intro.removeClass('no-opacity');
            } else {
            	introText.addClass('no-opacity');
            	intro.addClass('no-opacity');
            }
		};

		let changeScrollOpacity = (scrollPos) => {
			if (scrollPos < 2200) {
				introScrollDown.removeClass('no-opacity');				
				introScrollDown.removeClass('hidden');				
            } else {
				introScrollDown.addClass('no-opacity');
				introScrollDown.addClass('hidden');
            }
		};

		let changeIntroImageOpacity = (scrollPos) => {
			if (scrollPos > 2200) {
	            introBg.addClass('no-opacity');
            } else {
            	introBg.removeClass('no-opacity');
            }
		};

		let imageWidth = 0;
		let imagePosition = 0;
		let changeIntroImagePosition = (scrollPos) => {
			if (scrollPos < 401) {
				introImage.css({'transform': 'scale(1) translate3d(0px,0px,0px)', '-webkit-transform': 'scale(1) translate3d(0px,0px,0px)'});
		    }
		    if (scrollPos > 400 && scrollPos < 600) {
				imageWidth = ((100 - ((scrollPos - 401)/25))*.01);
				imagePosition = (400*1.45) - (scrollPos*1.45);
				introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)'});
			}
			if (scrollPos > 599 && scrollPos < 700) {
				imageWidth = ((100 - ((scrollPos - 401)/25))*.01);
				imagePosition = (400*1.45) - (scrollPos*1.45);
				introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)'});
		    }
		    if (scrollPos > 599 && scrollPos < 2100) {
				imagePosition = (400*1.45) - (scrollPos*1.45);
		    	introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)'});
		    }
		};

		let gradientWidth = 0;
		let gradientPosition = 0;
		let changeIntroGradientPosition = (scrollPos) => {
		    if (scrollPos < 401) {
		    	introGradient.css({'transform': 'scale(1) translate3d(0px,0px,0px)', '-webkit-transform': 'scale(1) translate3d(0px,0px,0px)'});
		    }
		    if (scrollPos > 400 && scrollPos < 600) {
				gradientWidth = ((100 - ((scrollPos - 401)/29))*.01);
				introGradient.css({'transform': 'scale(' + gradientWidth + ')', '-webkit-transform': 'scale(' + gradientWidth + ')'});
		    }
		    if (scrollPos > 599 && scrollPos < 1101) {
				gradientPosition = (599*1.3) - (scrollPos*1.3);
		    	introGradient.css({'transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)', '-webkit-transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)'});
		    }
		    if (scrollPos > 1100 && scrollPos < 2800) {
		    	introGradient.css({'transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)', '-webkit-transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)'});
		    }
		};

		let aboutPosition = 0;
		let changeAboutOpacity = (scrollPos) => {
			if (scrollPos > 800 && scrollPos < 3400) {
				aboutPosition = (1200*1.3) - (scrollPos*.8);
		    	about.css({'transform': 'translate3d(0,' + aboutPosition + 'px,0)', '-webkit-transform': 'translate3d(0,' + aboutPosition + 'px,0)'});
			} 

			if (scrollPos > 800 && scrollPos < 2100) {
				about.removeClass('no-opacity');
			}
			
			if (scrollPos < 801 || scrollPos > 2101) {
				about.addClass('no-opacity');
			}
		};

		let changeBlotchOpacity = (scrollPos) => {
			if (scrollPos > 2200) {
				blotch.addClass('no-opacity');
			} else {
				blotch.removeClass('no-opacity');
			}
		};

		let changeProjectsPosition = (scrollPos) => {
		    if (scrollPos < 2400) {
		    	projects.addClass('no-opacity');
				projectsContainer.addClass('no-opacity');
				firstNav.removeClass('active');
				secondNav.removeClass('active');
				thirdNav.removeClass('active');
		    }
		    if (scrollPos > 2399) {
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
				console.log('scrolltop', scrollTop);
				changeIntroTextSize(scrollTop);
				changeScrollOpacity(scrollTop);
				changeIntroImagePosition(scrollTop);
				changeIntroGradientPosition(scrollTop);
				changeIntroImageOpacity(scrollTop);
				changeAboutOpacity(scrollTop);
				changeBlotchOpacity(scrollTop);
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
				changeBlotchOpacity(window_.scrollY);
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

		$scope.showFilter = () => {
			modal.removeClass('no-opacity');
			modalMask.removeClass('no-opacity');
			modalClose.removeClass('no-opacity');
		};

		$scope.hideFilter = () => {
			modal.addClass('no-opacity');
			modalMask.addClass('no-opacity');
			modalClose.addClass('no-opacity');
		};

		$scope.init = () => {
			changeIntroTextSize(window_.scrollY);
			changeScrollOpacity(window_.scrollY);
			changeIntroImageOpacity(window_.scrollY);
			changeIntroImagePosition(window_.scrollY);
			changeIntroGradientPosition(window_.scrollY);
			changeAboutOpacity(window_.scrollY);
			changeBlotchOpacity(window_.scrollY);
			changeProjectsPosition(window_.scrollY);
		};

    }]
};

export default Home;
