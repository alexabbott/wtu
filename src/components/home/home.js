let Home = {
    templateUrl: '/components/home/home.tpl',
    controller: ['WordpressData', '$scope', '$window', '$timeout', (WordpressData, $scope, $window, $timeout) => {

        WordpressData.listHome((response) => {
            $scope.data = response.data.acf;
            console.log('home data', $scope.data);
        });

        const bindPortfolio = (data) => {
	        $scope.portfolio = data;
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
		    	introImage.css('width', (100 - ((scrollPos - 601)/5)) + 'vw');
		    }
		    if (scrollPos > 799 && scrollPos < 1301) {
		    	introImage.addClass('absolute');
		    	introImage.css('top', 0);
		    }
		    if (scrollPos > 1300 && scrollPos < 2300) {
		    	introImage.removeClass('absolute');
		    	introImage.css('top', '-700px');
		    }
		    if (scrollPos > 2299) {
		    	introImage.addClass('absolute');
		    	introImage.css('top', (2300 - 700) + 'px');
		    }
		};


		let changeIntroGradientPosition = (scrollPos) => {
		    if (scrollPos < 601) {
		    	introGradient.removeClass('absolute');
		    	introGradient.css('top', 0);
		    	introGradient.css('width', '100vw');
		    }
		    if (scrollPos > 600 && scrollPos < 800) {
		    	introGradient.addClass('absolute');
		    	introGradient.css('width', (100 - ((scrollPos - 600)/15)) + 'vw');
		    }
		    if (scrollPos > 799 && scrollPos < 1301) {
		    	introGradient.addClass('absolute');
		    	introGradient.css('top', 0);
		    }
		    if (scrollPos > 1300 && scrollPos < 2300) {
		    	introGradient.removeClass('absolute');
		    	introGradient.css('top', '-700px');
		    }
		    if (scrollPos > 2299) {
		    	introGradient.addClass('absolute');
		    	introGradient.css('top', (2300 - 700) + 'px');
		    }
		};

		let getPositionAtBottom = (element) => {
		  var data = element.getBoundingClientRect();
		  return { y: data.top };
		};


		let getPositionAtTop = (element) => {
		  var data = element.getBoundingClientRect();
		  return { y: data.bottom };
		};

		let getDistanceBetweenElements = (a, b) => {
		  let aPosition = getPositionAtTop(a);
		  let bPosition = getPositionAtBottom(b);

		  return bPosition.y - aPosition.y;
		};


		let changeAboutIntroPosition = (scrollPos) => {
			// console.log('scrollPos', scrollPos);
	    	// let distance = getDistanceBetweenElements(introGradient, aboutIntro);
		    if (scrollPos > 1900 && scrollPos < 2300) {
		    	aboutIntro.css('position', 'fixed');
		    	aboutIntro.css('top', '12px');
		    }
		    if (scrollPos < 1899) {
		    	aboutIntro.css('position', 'absolute');
		    	aboutIntro.css('top', '280vh');
		    }
		    if (scrollPos > 2300) {
		    	aboutIntro.css('position', 'absolute');
		    	aboutIntro.css('top', (2.8*document.documentElement.clientHeight) + 12 + 'px');
		    }
		};

		let changeAboutOpacity = (scrollPos) => {
			if (scrollPos > 2700 && scrollPos < 3200) {
				about.removeClass('no-opacity');
			} else {
				about.addClass('no-opacity');
			}
		};

		let changeContactOpacity = (scrollPos) => {
			if (scrollPos > 3900 && scrollPos < 4400) {
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
			if (scrollPos > 4399) {
				whiteRabbit.removeClass('no-opacity');
			} else if (scrollPos < 4400) {
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

				// console.log(scrollTop);
		        // fire scroll function if scrolls vertically
		        if (scrollTop < 1000) {
			        changeIntroTextSize(scrollTop);
			        changeScrollOpacity(scrollTop);
			        changeIntroLogoPosition(scrollTop);
		        }
		        if (scrollTop < 2599) {
			        changeIntroImagePosition(scrollTop);
			        changeIntroGradientPosition(scrollTop);
			        changeAboutIntroPosition(scrollTop);
		    	}
		    	if (scrollTop > 2599) {
		    		changeAboutOpacity(scrollTop);
		    	}
		    	if (scrollTop > 3800) {
		    		changeContactOpacity(scrollTop);
		    	}
		    	if (scrollTop > 4300) {
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
