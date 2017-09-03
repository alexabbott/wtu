let Home = {
    templateUrl: '/components/home/home.tpl',
	controller: ['WordpressData', '$scope', '$window', '$timeout', '$location', 'smoothScroll', '$interval', '$anchorScroll', '$rootScope',
	(WordpressData, $scope, $window, $timeout, $location, smoothScroll, $interval, $anchorScroll, $rootScope) => {

		let window_ = $window;

        const firstNav = angular.element(document.querySelector('.nav__items .nav__item:first-of-type'));
        const secondNav = angular.element(document.querySelector('.nav__items .nav__item:nth-of-type(2)'));
        const thirdNav = angular.element(document.querySelector('.nav__items .nav__item:last-of-type'));
        const intro = angular.element(document.querySelector('.intro'));
        const introText = angular.element(document.querySelector('.intro__text'));
        const introBg = angular.element(document.querySelector('.intro__bg'));
        const introScrollDown = angular.element(document.querySelector('.intro__scroll-down'));
        const introImage = angular.element(document.querySelector('.intro__image'));
        const introVideo = angular.element(document.querySelector('.intro__video'));
        const introGradient = angular.element(document.querySelector('.intro__gradient'));
        const blotch = angular.element(document.querySelector('.blotch'));
        const services = angular.element(document.querySelector('.services'));
        const modal = angular.element(document.querySelector('.modal'));
        const modalMask = angular.element(document.querySelector('.modal-mask'));
        const modalClose = angular.element(document.querySelector('.modal-close'));
        const projects = angular.element(document.querySelector('.projects'));
        const selectedWorks = angular.element(document.querySelector('.selected-works'));
		const projectsLoader = angular.element(document.querySelector('.projects__loade'));
		const projectsContainer = angular.element(document.querySelector('.projects__container'));
		const whiteRabbit = angular.element(document.querySelector('.nav__white-rabbit.mobile-hide'));

		secondNav.removeClass('active');
		thirdNav.removeClass('active');

		if ($location.hash() === 'top') {
			smoothScroll(document.getElementById('top'), { offset: 5000});
		}

		if (!$scope.data) {
			$scope.data = {};
		}

		if (!$rootScope.nav) {
			WordpressData.listNav((response) => {
				$scope.data.nav = response.data[0].acf;
			});
		} else {
			$scope.data.nav = $rootScope.nav;
		}

		if (!$rootScope.home) {
			WordpressData.listHome((response) => {
				$scope.data.home = response.data[0].acf;
				introScrollDown.removeClass('no-opacity').addClass('animated fadeInUp');
				$timeout(() => {
					introImage.removeClass('no-opacity');
					introVideo.removeClass('no-opacity');
					introText.removeClass('no-opacity');
				}, 1000);
			});
		} else {
			$scope.data.home = $rootScope.home;
			introScrollDown.removeClass('no-opacity').addClass('animated fadeInUp');
			$timeout(() => {
				introImage.removeClass('no-opacity');
				introVideo.removeClass('no-opacity');
				introText.removeClass('no-opacity');
			}, 1000);
		}

		if (!$rootScope.categories) {
			WordpressData.fetchCats().then(() => {
				$scope.data.categories = WordpressData.categories;
			});
		} else {
			$scope.data.categories = $rootScope.categories;
		}

		$scope.projectsLoaded = false;
		if (!$rootScope.portfolio) {
			WordpressData.fetchPortfolio().then(() => {
				$scope.data.portfolio = WordpressData.portfolio;
				$scope.projectsLoaded = true;
			});
		} else {
			$scope.data.portfolio = $rootScope.portfolio;
			$scope.projectsLoaded = true;
		}

        let changeIntroTextSize = (scrollPos) => {
		    if (scrollPos < 201) {
	            introText.css({'transform': 'translate3d(-50%, -50%, 0) scale(' + (30 - (scrollY / 10)) + ')', '-webkit-transform': 'translate3d(-50%, -50%, 0) scale(' + (30 - (scrollY / 10)) + ')', });
	            introText.removeClass('no-opacity');
	            intro.removeClass('no-opacity');
            } else {
            	introText.addClass('no-opacity');
            	intro.addClass('no-opacity');
            }
		};

		let changeScrollOpacity = (scrollPos) => {
			if (scrollPos < 50) {
				introScrollDown.removeClass('transparent');				
            } else {
				introScrollDown.addClass('transparent');
			}
			
			if (scrollPos < 250) {
				introScrollDown.removeClass('hidden');				
            } else {
				introScrollDown.addClass('hidden');
			} 
		};

		let changeIntroImageOpacity = (scrollPos) => {
			if (scrollPos > 1600) {
	            introBg.addClass('no-opacity');
            } else {
            	introBg.removeClass('no-opacity');
            }
		};

		let imageWidth = 0;
		let imagePosition = 0;
		let changeIntroImagePosition = (scrollPos) => {
			if (window.innerWidth < 600 || screen.width < 600) {
				if (scrollPos < 201) {
					introImage.css({'transform': 'scale(1) translate3d(-50%,0px,0px)', '-webkit-transform': 'scale(1) translate3d(-50%,0px,0px)'});
					introVideo.css({'transform': 'scale(1) translate3d(-50%,0px,0px)', '-webkit-transform': 'scale(1) translate3d(-50%,0px,0px)'});
				}
				if (scrollPos > 200 && scrollPos < 400) {
					imageWidth = ((100 - ((scrollPos - 201)/25))*.01);
					imagePosition = (200*.4) - (scrollPos*.4);
					introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)'});
					introVideo.css({'transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)'});
				}
				if (scrollPos > 399 && scrollPos < 500) {
					imageWidth = ((100 - ((scrollPos - 201)/25))*.01);
					imagePosition = (200*.4) - (scrollPos*.4);
					introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)'});
					introVideo.css({'transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)'});
				}
				if (scrollPos > 399 && scrollPos < 1900) {
					imagePosition = (200*.4) - (scrollPos*.4);
					introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)'});
					introVideo.css({'transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)'});
				}
			} else {
				if (scrollPos < 201) {
					introImage.css({'transform': 'scale(1) translate3d(-50%,0px,0px)', '-webkit-transform': 'scale(1) translate3d(-50%,0px,0px)'});
					introVideo.css({'transform': 'scale(1) translate3d(-50%,0px,0px)', '-webkit-transform': 'scale(1) translate3d(-50%,0px,0px)'});
				}
				if (scrollPos > 200 && scrollPos < 400) {
					imageWidth = ((100 - ((scrollPos - 201)/25))*.01);
					imagePosition = (200*2.7) - (scrollPos*2.7);
					introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)'});
					introVideo.css({'transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)'});
				}
				if (scrollPos > 399 && scrollPos < 500) {
					imageWidth = ((100 - ((scrollPos - 201)/25))*.01);
					imagePosition = (200*2.7) - (scrollPos*2.7);
					introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)'});
					introVideo.css({'transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)'});
				}
				if (scrollPos > 399 && scrollPos < 1900) {
					imagePosition = (200*2.7) - (scrollPos*2.7);
					introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)'});
					introVideo.css({'transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(-50%,' + imagePosition + 'px,0)'});
				}
			}
		};

		let gradientWidth = 0;
		let gradientPosition = 0;
		let changeIntroGradientPosition = (scrollPos) => {
		    if (scrollPos < 201) {
		    	introGradient.css({'transform': 'scale(1) translate3d(0px,0px,0px)', '-webkit-transform': 'scale(1) translate3d(0px,0px,0px)'});
		    }
		    if (scrollPos > 200 && scrollPos < 400) {
				gradientWidth = ((100 - ((scrollPos - 201)/29))*.01);
				introGradient.css({'transform': 'scale(' + gradientWidth + ')', '-webkit-transform': 'scale(' + gradientWidth + ')'});
		    }
		    if (scrollPos > 399 && scrollPos < 901) {
				gradientPosition = (399*1.3) - (scrollPos*1.3);
		    	introGradient.css({'transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)', '-webkit-transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)'});
		    }
		    if (scrollPos > 900 && scrollPos < 2200) {
		    	introGradient.css({'transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)', '-webkit-transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)'});
		    }
		};

		let servicesPosition = 0;
		let changeServicesOpacity = (scrollPos) => {
			if (scrollPos > 200 && scrollPos < 1300) {
				services.removeClass('no-opacity');
			}

			if (scrollPos > 200 && scrollPos < 2800) {
				servicesPosition = (800*1.3) - (scrollPos);
		    	services.css({'transform': 'translate3d(0,' + servicesPosition + 'px,0)', '-webkit-transform': 'translate3d(0,' + servicesPosition + 'px,0)'});
			} 
			
			if (scrollPos < 201 || scrollPos > 1301) {
				services.addClass('no-opacity');
			}
		};

		let changeBlotchOpacity = (scrollPos) => {
			if (scrollPos > 1400) {
				blotch.addClass('no-opacity');
			} else {
				blotch.removeClass('no-opacity');
			}
		};

		let changeProjectsPosition = (scrollPos) => {
		    if (scrollPos < 1400) {
		    	projects.addClass('no-opacity');
		    	selectedWorks.addClass('no-opacity');
				projectsContainer.addClass('no-opacity');
				projectsLoader.addClass('no-opacity');
				firstNav.removeClass('active');
				secondNav.removeClass('active');
				thirdNav.removeClass('active');
		    }
		    if (scrollPos > 1399) {
				firstNav.addClass('active');
				selectedWorks.removeClass('no-opacity');
				projectsLoader.removeClass('no-opacity');
		    	projects.removeClass('no-opacity');
		    	projectsContainer.removeClass('no-opacity');
		    }
		};

		$scope.transitioning = true;
		$scope.transition = (to) => {
            $scope.initTransition = true
            $timeout(() => {
                $scope.transitioning = true
                $scope.initTransition = false
                $location.path(to)
            }, 333)
        }

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
				changeServicesOpacity(scrollTop);
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
				changeServicesOpacity(window_.scrollY);
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

		$scope.showBg = (slug) => {
			angular.element(document.querySelectorAll('.projects__bg')).addClass('no-opacity');
			angular.element(document.querySelector('.projects__bg.' + '_' + slug)).removeClass('no-opacity');
		};

		$scope.hideBg = (slug) => {
			angular.element(document.querySelectorAll('.projects__bg')).addClass('no-opacity');
		};

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
			changeServicesOpacity(window_.scrollY);
			changeBlotchOpacity(window_.scrollY);
			changeProjectsPosition(window_.scrollY);
		};

    }]
};

export default Home;
