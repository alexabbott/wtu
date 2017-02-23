import Sidenav from './components/sidenav/sidenav';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
import smoothScroll from './jspm_packages/github/d-oliveros/ngSmoothScroll@2.0.0';

const app = angular.module('weThemUs', ['ngRoute', 'ngSanitize', 'smoothScroll'])

.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
	$routeProvider
	    .when('/', {
	        templateUrl: '/components/pages/home.tpl',
	        reloadOnSearch: false
	    })
	    .when('/:slug', {
	        templateUrl: '/components/pages/portfolio.tpl',
	        reloadOnSearch: false
	    })
	    .otherwise('/');

	$locationProvider.html5Mode(true);
}])

.factory('WordpressData', ($http) => {

  var portfolio = null;

  return {
  	listNav: (callback) => {
      	$http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/nav/42').then(callback);
    },
    listHome: (callback) => {
     	$http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/home/12').then(callback);
    },
    renderPortfolio: (callback) => {
    	if (!portfolio) {
  			// get it green...
  			console.log('getting polio...');
  			return(
  				$http.get(
							'http://alex-abbott.com/wtu/wp-json/wp/v2/portfolio'
							// required setting "Show in REST API" within WCK
			 				// Post Type editor (portfolio, advanced options)
					)
					.then((data) => {
							portfolio = data;
							callback(portfolio);
					})
				)
    	}
    	callback(portfolio);
  	}
  }
})

.filter('youtubeEmbedUrl', ($sce) => {
	return function(videoId) {
  		return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + videoId + '?controls=0&rel=0&modestbranding=1&showinfo=0');
	};	
})

.component('sidenav', Sidenav)
.component('home', Home)
.component('portfolio', Portfolio);
