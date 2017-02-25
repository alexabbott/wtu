let Home = {
    templateUrl: '/components/home/home.tpl',
    controller: ['WordpressData', '$scope', '$window', '$timeout', (WordpressData, $scope, $window, $timeout) => {

        WordpressData.listHome((response) => {
            $scope.data = response.data.acf;
            console.log('home data', $scope.data);
        });

        const bindPortfolio = (data) => {
	        $scope.portfolio = data;
	        console.log('folio', $scope.portfolio);
	    }
	    if (!WordpressData.portfolio) {
	        WordpressData.fetchPortfolio(bindPortfolio);
	    }
	    else {
	        bindPortfolio(WordpressData.portfolio);
	    }

        const intro = angular.element(document.querySelector('.intro'));
        const introText = angular.element(document.querySelector('.intro__text'));
        const introScrollDown = angular.element(document.querySelector('.intro__scroll-down'));
        const introLogo = angular.element(document.querySelector('.intro__big-logo'));
        const introImage = angular.element(document.querySelector('.intro__image'));
        const introGradient = angular.element(document.querySelector('.intro__gradient'));
        const aboutIntro = angular.element(document.querySelector('.about-intro'));
        const aboutIntroImage = angular.element(document.querySelector('.about-intro__image-container'));
        const aboutIntroText = angular.element(document.querySelector('.about-intro__text'));
        const about = angular.element(document.querySelector('.about'));
        const projects = angular.element(document.querySelector('.projects'));
        const projectsContainer = angular.element(document.querySelector('.projects__container'));
        const contact = angular.element(document.querySelector('.contact'));
        const contact1 = angular.element(document.querySelector('.contact__text-1'));
        const contact2 = angular.element(document.querySelector('.contact__text-2'));
        const contact3 = angular.element(document.querySelector('.contact__text-3'));
        const contact4 = angular.element(document.querySelector('.contact__text-4'));
        const contact5 = angular.element(document.querySelector('.contact__text-5'));
        const contactEmail = angular.element(document.querySelector('.contact__email'));
        const whiteRabbit = angular.element(document.querySelector('.white-rabbit'));

        let changeIntroTextSize = (scrollPos) => {
		    if (scrollPos < 400) {
	            introText.css('transform', 'translate(-50%, -50%) scale(' + (5 - (scrollY / 100)) + ')');
	            intro.removeClass('no-opacity');
            } else if (scrollPos > 600) {
            	intro.addClass('no-opacity');
            }
		};

		let changeScrollOpacity = (scrollPos) => {
			if (scrollPos > 400 && scrollPos < 600) {
	            introScrollDown.removeClass('no-opacity');
            } else {
            	introScrollDown.addClass('no-opacity');
            }
		};

		let changeIntroLogoPosition = (scrollPos) => {
		    if (scrollPos > 400 && scrollPos < 600) {
	            introLogo.addClass('mid-position');
	            introLogo.removeClass('high-position low-position no-opacity');
            } else if (scrollPos > 600) {
	            introLogo.addClass('high-position');
	            introLogo.removeClass('mid-position low-position no-opacity');
            } else if (scrollPos < 400) {
	            introLogo.addClass('no-opacity low-position');
	            introLogo.removeClass('high-position mid-position');
            }
		};

		let changeIntroImagePosition = (scrollPos) => {
			if (scrollPos < 601) {
		    	introImage.removeClass('absolute');
		    	introImage.css('top', 0);
		    	introImage.css('width', '100vw');
		    }
		    if (scrollPos > 600 && scrollPos < 800) {
		    	introImage.addClass('absolute');
		    	introImage.css('top', (600 - scrollPos));
		    	introImage.css('width', (100 - ((scrollPos - 601)/5)) + 'vw');
		    }
		    if (scrollPos > 799 && scrollPos < 1301) {
		    	introImage.css('top', (600 - scrollPos));
		    	introImage.addClass('absolute');
		    }
		    if (scrollPos > 1300 && scrollPos < 2300) {
		    	introImage.removeClass('absolute');
		    	introImage.css('top', '-700px');
		    }
		    if (scrollPos > 2299) {
		    	introImage.addClass('absolute');
		    	introImage.css('top', (1600 - scrollPos));
		    }
		};


		let changeIntroGradientPosition = (scrollPos) => {
		    if (scrollPos < 601) {
		    	introGradient.css('top', 0);
		    	introGradient.css('width', '100vw');
		    }
		    if (scrollPos > 600 && scrollPos < 800) {
		    	introGradient.addClass('absolute');
		    	introGradient.css('top', (600 - scrollPos));
		    	introGradient.css('width', (100 - ((scrollPos - 600)/15)) + 'vw');
		    }
		    if (scrollPos > 799 && scrollPos < 1301) {
		    	introGradient.css('top', (600 - scrollPos));
		    	introGradient.addClass('absolute');
		    }
		    if (scrollPos > 2299) {
		    	introGradient.addClass('absolute');
		    	introGradient.css('top', (1600 - scrollPos));
		    }
		};


		let changeAboutIntroPosition = (scrollPos) => {
			let ogScrollPos = 0;
		    if (scrollPos < 1399) {
		    	aboutIntroImage.css('top', '100vh');
		    	aboutIntroImage.css('bottom', 'auto');
		    	aboutIntroText.css('top', '100vh');
		    	aboutIntroText.css('bottom', 'auto');
		    }
		    if (scrollPos > 1398 && scrollPos < 2100) {
		    	let aboutPos = scrollPos - (1399 + window_.innerHeight);
		    	aboutIntroText.css('top', 'auto');
		    	aboutIntroText.css('bottom', aboutPos + 'px');
		    }
		    if (scrollPos > 1398 && scrollPos < 4500) {
		    	let aboutPos = scrollPos - (1399 + window_.innerHeight);
		    	aboutIntroImage.css('top', 'auto');
		    	aboutIntroImage.css('bottom', ((0.5 * aboutPos)  - 300) + 'px');
		    }
		    if (scrollPos > 2900) {
		    	let aboutPos = scrollPos - (2199 + window_.innerHeight);
		    	aboutIntroText.css('top', 'auto');
		    	aboutIntroText.css('bottom', aboutPos + 'px');
		    }
		};


		let changeAboutOpacity = (scrollPos) => {
			if (scrollPos > 4500 && scrollPos < 5400) {
				about.removeClass('no-opacity');
			} else {
				about.addClass('no-opacity');
			}
		};

		let changeProjectsPosition = (scrollPos) => {
			let ogScrollPos = 0;
			console.log('scrollY', scrollPos);
		    if (scrollPos < 5400) {
		    	projects.css('top', '100vh');
		    	projects.css('bottom', 'auto');
		    	projects.removeClass('no-opacity');
		    }
		    if (scrollPos > 5399 && scrollPos < (5399 + window_.innerHeight)) {
		    	let aboutPos = scrollPos - (5399 + window_.innerHeight);
		    	projects.css('top', 'auto');
		    	projects.css('bottom', aboutPos + 'px');
		    	projects.removeClass('no-opacity');
		    }
		    if (scrollPos > (5399 + window_.innerHeight)) {
		    	projectsContainer.removeClass('no-opacity');
		    } else {
		    	projectsContainer.addClass('no-opacity');
		    }
		    if (scrollPos > 6800) {
		    	projects.addClass('no-opacity');
		    }
		    
		};

		$scope.removeImageBlur = (index) => {
			angular.element(document.querySelector('.about-intro__image-box .clear')).removeClass('hidden');
			angular.element(document.querySelector('.about-intro__image-box .blur')).addClass('hidden');
		};

		$scope.addImageBlur = (index) => {
			angular.element(document.querySelector('.about-intro__image-box .clear')).addClass('hidden');
			angular.element(document.querySelector('.about-intro__image-box .blur')).removeClass('hidden');
		};

		$scope.showBg = (index) => {
			angular.element(document.querySelectorAll('.projects__bg')[index]).removeClass('no-opacity');
			angular.element(document.querySelectorAll('.projects__bg')[index]).addClass('low-opacity');
		};

		$scope.hideBg = (index) => {
			angular.element(document.querySelectorAll('.projects__bg')[index]).addClass('no-opacity');
			angular.element(document.querySelectorAll('.projects__bg')[index]).removeClass('low-opacity');
		};

		let jq = $.noConflict();

		jq(window).on('scroll', () => {
			if (jq(window).scrollTop() > 5400 && !jq('.projects__marquee').hasClass('scrolling')) {
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
		});

		let changeContactOpacity = (scrollPos) => {
			if (scrollPos > 6750 && scrollPos < 7400) {
				contact.removeClass('no-opacity');
				contact1.addClass('fade-in one');
				contact2.addClass('fade-in two');
				contact3.addClass('fade-in three');
				contact4.addClass('fade-in four');
				contact5.addClass('fade-in five');
				contactEmail.addClass('fade-in six');
			} else {
				contact.addClass('no-opacity');
				contact1.removeClass('fade-in one');
				contact2.removeClass('fade-in two');
				contact3.removeClass('fade-in three');
				contact4.removeClass('fade-in four');
				contact5.removeClass('fade-in five');
				contactEmail.removeClass('fade-in six');
			}
		};

		let changeWhiteRabbitOpacity = (scrollPos) => {
			if (scrollPos > 7401) {
				whiteRabbit.removeClass('no-opacity');
			} else if (scrollPos < 7500) {
				whiteRabbit.addClass('no-opacity');
			}
		};

		let loop = () => {
		    let scrollTop = window_.scrollY;
		    if (lastScrollTop === scrollTop) {
		        raf(loop);
		        return;
		    } else {
		        lastScrollTop = scrollTop;

		        // fire scroll function if scrolls vertically
		        if (scrollTop < 1000) {
			        changeIntroTextSize(scrollTop);
			        changeScrollOpacity(scrollTop);
			        changeIntroLogoPosition(scrollTop);
		        }
		        if (scrollTop < 2799) {
			        changeIntroImagePosition(scrollTop);
			        changeIntroGradientPosition(scrollTop);
		    	}
		    	if (scrollTop > 1100 && scrollTop < 5500) {
			        changeAboutIntroPosition(scrollTop);
		    	}
		    	if (scrollTop > 3000 && scrollTop < 6500) {
		    		changeAboutOpacity(scrollTop);
		    	}
		    	if (scrollTop > 3500 && scrollTop < 7500) {
			        changeProjectsPosition(scrollTop);
		    	}
		    	if (scrollTop > 5000) {
		    		changeContactOpacity(scrollTop);
		    	}
		    	if (scrollTop > 6000) {
		    		changeWhiteRabbitOpacity(scrollTop);
		    	}
		        raf(loop);
		    }
		};

		let raf = window.requestAnimationFrame ||
		    window.webkitRequestAnimationFrame ||
		    window.mozRequestAnimationFrame ||
		    window.msRequestAnimationFrame ||
		    window.oRequestAnimationFrame;

		let window_ = $window;
		let lastScrollTop = window_.scrollY;

		if (raf) {
		    loop();
		}

		$timeout(() => {
			let rolloverWords = document.querySelectorAll('.about__text-main em');
			rolloverWords[0].addEventListener('mouseover', () => {
				angular.element(document.querySelector('.about__gif-1')).removeClass('hidden');
			});

			rolloverWords[0].addEventListener('mouseout', () => {
				angular.element(document.querySelector('.about__gif-1')).addClass('hidden');
			});
			rolloverWords[1].addEventListener('mouseover', () => {
				angular.element(document.querySelector('.about__gif-2')).removeClass('hidden');
				angular.element(document.querySelector('.about__gif-3')).removeClass('hidden');
				angular.element(document.querySelector('.about__gif-4')).removeClass('hidden');
			});

			rolloverWords[1].addEventListener('mouseout', () => {
				angular.element(document.querySelector('.about__gif-2')).addClass('hidden');
				angular.element(document.querySelector('.about__gif-3')).addClass('hidden');
				angular.element(document.querySelector('.about__gif-4')).addClass('hidden');
			});
		}, 2000);
    }]
};

export default Home;
