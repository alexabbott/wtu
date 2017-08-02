let Home = {
    templateUrl: '/components/home/home.tpl',
    controller: ['WordpressData', '$scope', '$window', '$timeout', (WordpressData, $scope, $window, $timeout) => {

		if (!$scope.data) {
			$scope.data = {};
		}

        WordpressData.listHome((response) => {
            $scope.data = response.data[0].acf;
			WordpressData.fetchCats().then(() => {
				console.log('dat', $scope.data);
                $scope.data.categories = WordpressData.categories;
            })
		});

		WordpressData.fetchPortfolio().then(() => {
			$scope.data.portfolio = WordpressData.portfolio;
		})

		let window_ = $window;

        const intro = angular.element(document.querySelector('.intro'));
        const introText = angular.element(document.querySelector('.intro__text'));
        const introBg = angular.element(document.querySelector('.intro__bg'));
        const introScrollDown = angular.element(document.querySelector('.intro__scroll-down'));
        const introImage = angular.element(document.querySelector('.intro__image'));
        const introGradient = angular.element(document.querySelector('.intro__gradient'));
        const about = angular.element(document.querySelector('.about'));
        const projects = angular.element(document.querySelector('.projects'));
        const projectsContainer = angular.element(document.querySelector('.projects__container'));

        let changeIntroTextSize = (scrollPos) => {
		    if (scrollPos < 400) {
	            introText.css({'transform': 'translate3d(-50%, -50%, 0) scale(' + (30 - (scrollY / 30)) + ')', '-webkit-transform': 'translate3d(-50%, -50%, 0) scale(' + (30 - (scrollY / 30)) + ')', });
	            intro.removeClass('no-opacity');
            } else if (scrollPos > 1200) {
            	intro.addClass('no-opacity');
            } else if (scrollPos < 1201 && scrollPos > 400) {
				intro.removeClass('no-opacity');
			}
		};

		let changeScrollOpacity = (scrollPos) => {
			if (scrollPos > 400 && scrollPos < 1200) {
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
				console.log('remove', scrollPos);
				about.addClass('no-opacity');
			}
		};

		let changeProjectsPosition = (scrollPos) => {
		    if (scrollPos < 3200) {
		    	projects.addClass('no-opacity');
		    	projectsContainer.addClass('no-opacity');
		    }
		    if (scrollPos > 3199) {
		    	projects.removeClass('no-opacity');
		    	projectsContainer.removeClass('no-opacity');
		    }
		};

		$scope.changeImageBlur = (index) => {
			$scope.showImage = index;
		};

		$scope.showBg = (index) => {
			angular.element(document.querySelectorAll('.projects__bg')[index]).removeClass('no-opacity');
			angular.element(document.querySelectorAll('.projects__bg')[index]).addClass('low-opacity');
		};

		$scope.hideBg = (index) => {
			angular.element(document.querySelectorAll('.projects__bg')[index]).addClass('no-opacity');
			angular.element(document.querySelectorAll('.projects__bg')[index]).removeClass('low-opacity');
		};

		let loop = () => {
		    let scrollTop = window_.scrollY;
		    if (lastScrollTop === scrollTop) {
		        return raf(loop);
		    } else {
		        lastScrollTop = scrollTop;

		        // fire scroll function if scrolls vertically
		        if (scrollTop < 1300) {
			        changeIntroTextSize(scrollTop);
			        changeScrollOpacity(scrollTop);
		        }
		        if (scrollTop < 3500) {
			        changeIntroImagePosition(scrollTop);
					changeIntroGradientPosition(scrollTop);
					changeIntroImageOpacity(scrollTop);
		    	}
		    	if (scrollTop > 1400 && scrollTop < 4000) {
		    		changeAboutOpacity(scrollTop);
		    	}
		    	if (scrollTop > 2500 && scrollTop < 6000) {
			        changeProjectsPosition(scrollTop);
		    	}
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

		$timeout(() => {
			if (document.querySelectorAll('.about__text-main em')) {

				let jq = $.noConflict();

				if (!jq('.projects__marquee').hasClass('scrolling')) {
					let portfolioLength = jq('.projects__marquee-box').length;
					for (let i = 0; i < portfolioLength; i++) {
						if (i % 2 != 0) {
							jq('.projects__marquee-box:nth-of-type(' + (i + 1) + ') .projects__marquee').marquee({
								duration: 25000,
								gap: 10,
								delayBeforeStart: 0,
								direction: 'left',
								duplicated: true,
								pauseOnHover: true,
								startVisible: true
								});
							} else {
								jq('.projects__marquee-box:nth-of-type(' + (i + 1) + ') .projects__marquee').marquee({
								duration: 25000,
								gap: 10,
								delayBeforeStart: 0,
								direction: 'right',
								duplicated: true,
								pauseOnHover: true,
								startVisible: true
								});
							}
					}

					jq('.projects__marquee').addClass('scrolling');
			}

			}
		}, 2000);

    }]
};

export default Home;
