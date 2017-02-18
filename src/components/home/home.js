let Home = {
    templateUrl: '/components/home/home.tpl',
    controller: ['WordpressData', '$scope', '$window', (WordpressData, $scope, $window) => {

        WordpressData.listHome((response) => {
            $scope.data = response.data.acf;
            console.log('home data', $scope.data);
        });

        const introText = document.querySelector('.intro__text');

        let changeIntroTextSize = () => {
			let scrollY = $window.scrollY;
			console.log('scroll', window_.scrollY);
		    if (scrollY < 400) {
	            introText.style.transform = 'translate(-50%, -50%) scale(' + (5 - (scrollY / 100)) + ')';
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
		        changeIntroTextSize();
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
    }]
};

export default Home;