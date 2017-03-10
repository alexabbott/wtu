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

		let window_ = $window;

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
	            introText.css({'transform': 'translate(-50%, -50%) scale(' + (5 - (scrollY / 50)) + ')', '-webkit-transform': 'translate(-50%, -50%) scale(' + (5 - (scrollY / 100)) + ')', });
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

		let imageWidth = 0;
		let imagePosition = 0;
		let changeIntroImagePosition = (scrollPos) => {
			if (scrollPos < 601) {
				introImage.css({'transform': 'scale(1) translate3d(0px,0px,0px)', '-webkit-transform': 'scale(1) translate3d(0px,0px,0px)'});
		    }
		    if (scrollPos > 600 && scrollPos < 800) {
				imageWidth = ((100 - ((scrollPos - 601)/5))*.01);
				imagePosition = (600*1.4) - (scrollPos*1.4);
				introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)'});
		    }
		    if (scrollPos > 799 && scrollPos < 1301) {
				imagePosition = (600*1.4) - (scrollPos*1.4);
		    	introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)'});
		    }
		    if (scrollPos > 1300 && scrollPos < 2300) {
		    	introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)'});
		    }
		    if (scrollPos > 2299) {
				imagePosition = (1599*1.4) - (scrollPos*1.4);
		    	introImage.css({'transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)', '-webkit-transform': 'scale(' + imageWidth + ') translate3d(0,' + imagePosition + 'px,0)'});
		    }
		};

		let gradientWidth = 0;
		let gradientPosition = 0;
		let changeIntroGradientPosition = (scrollPos) => {
		    if (scrollPos < 601) {
		    	introGradient.css({'transform': 'scale(1) translate3d(0px,0px,0px)', '-webkit-transform': 'scale(1) translate3d(0px,0px,0px)'});
		    }
		    if (scrollPos > 600 && scrollPos < 800) {
				gradientWidth = ((100 - ((scrollPos - 601)/16))*.01);
				introGradient.css({'transform': 'scale(' + gradientWidth + ')', '-webkit-transform': 'scale(' + gradientWidth + ')'});
		    }
		    if (scrollPos > 799 && scrollPos < 1301) {
				gradientPosition = (799*1.3) - (scrollPos*1.3);
		    	introGradient.css({'transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)', '-webkit-transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)'});
		    }
		    if (scrollPos > 1300 && scrollPos < 2300) {
		    	introGradient.css({'transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)', '-webkit-transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)'});
		    }
		    if (scrollPos > 2299) {
				gradientPosition = (1799*1.3) - (scrollPos*1.3);
		    	introGradient.css({'transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)', '-webkit-transform': 'scale(' + gradientWidth + ') translate3d(0,' + gradientPosition + 'px,0)'});
		    }
		};

		let changeAboutIntroPosition = (scrollPos) => {
		    if (scrollPos <= 1399) {
				aboutIntroImage.css({'transform': 'translate3d(8vw,' + window_.innerHeight + ', 0)', '-webkit-transform': 'translate3d(8vw,' + window_.innerHeight + ',0)'});
				aboutIntroText.css({'transform': 'translate3d(60vw,' + window_.innerHeight + ', 0)', '-webkit-transform': 'translate3d(60vw,' + window_.innerHeight + ',0)'});
		    }
		    if (scrollPos > 1398 && scrollPos < 1900) {
				let aboutPos1 = window_.innerHeight - ((scrollPos * 1.2) - (1399*1.2));
				aboutIntroText.css({'transform': 'translate3d(60vw,' + aboutPos1 + 'px,0)', '-webkit-transform': 'translate3d(60vw,' + aboutPos1 + ',0)'});
		    }
		    if (scrollPos > 1898 && scrollPos < 4500) {
				let aboutPos2 = window_.innerHeight - ((scrollPos*0.8) - (1899*0.8));
				aboutIntroImage.css({'transform': 'translate3d(8vw,' + aboutPos2 + 'px,0)', '-webkit-transform': 'translate3d(0,' + aboutPos2 + ',0)'});
		    }
		    if (scrollPos > 2900) {
				let aboutPos1 = window_.innerHeight - ((scrollPos * 1.2) - (2399*1.2));
				aboutIntroText.css({'transform': 'translate3d(60vw,' + aboutPos1 + 'px,0)', '-webkit-transform': 'translate3d(60vw,' + aboutPos1 + ',0)'});
		    }
		};


		let changeAboutOpacity = (scrollPos) => {
			if (scrollPos > 3600 && scrollPos < 4400) {
				about.removeClass('no-opacity');
			} else {
				about.addClass('no-opacity');
			}
		};

		let changeProjectsPosition = (scrollPos) => {
		    if (scrollPos < 4400) {
		    	projects.css({'transform': 'translate3d(0,' + window_.innerHeight + ', 0)', '-webkit-transform': 'translate3d(0,' + window_.innerHeight + ',0)'});
		    	projects.removeClass('no-opacity');
		    }
		    if (scrollPos > 4399 && scrollPos < (4399 + window_.innerHeight)) {
		    	let aboutPos1 = window_.innerHeight - (scrollPos - 4399);
				projects.css({'transform': 'translate3d(0,' + aboutPos1 + 'px,0)', '-webkit-transform': 'translate3d(0,' + aboutPos1 + ',0)'});
		    	projects.removeClass('no-opacity');
		    }
		    if (scrollPos > (4399 + window_.innerHeight)) {
		    	projectsContainer.removeClass('no-opacity');
		    } else {
		    	projectsContainer.addClass('no-opacity');
		    }
		    if (scrollPos > 6000) {
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

		let changeContactOpacity = (scrollPos) => {
			if (scrollPos > 5950 && scrollPos < 6400) {
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
			if (scrollPos > 6401) {
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
				console.log(scrollTop);
		        if (scrollTop < 1000) {
			        changeIntroTextSize(scrollTop);
			        changeScrollOpacity(scrollTop);
			        changeIntroLogoPosition(scrollTop);
		        }
		        if (scrollTop < 3000) {
			        changeIntroImagePosition(scrollTop);
			        changeIntroGradientPosition(scrollTop);
		    	}
		    	if (scrollTop > 700 && scrollTop < 4000) {
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

		let resetAll = () => {
			setTimeout(() => {
				changeIntroTextSize(window_.scrollY);
				changeScrollOpacity(window_.scrollY);
				changeIntroLogoPosition(window_.scrollY);
				changeIntroImagePosition(window_.scrollY);
				changeIntroGradientPosition(window_.scrollY);
				changeAboutIntroPosition(window_.scrollY);
				changeAboutOpacity(window_.scrollY);
				changeProjectsPosition(window_.scrollY);
				changeContactOpacity(window_.scrollY);
				changeWhiteRabbitOpacity(window_.scrollY);
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
		}, 2000);

    }]
};

export default Home;
