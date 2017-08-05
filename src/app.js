import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';
import Category from './components/category/category';
import smoothScroll from './jspm_packages/github/d-oliveros/ngSmoothScroll@2.0.0';

const app = angular.module('weThemUs', ['ngRoute', 'ngSanitize', 'smoothScroll'])

.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
	$routeProvider
	    .when('/', {
	        templateUrl: '/components/pages/home.tpl',
	        reloadOnSearch: false
		})
		.when('/about', {
	        templateUrl: '/components/pages/about.tpl',
	        reloadOnSearch: false
		})
		.when('/contact', {
	        templateUrl: '/components/pages/contact.tpl',
	        reloadOnSearch: false
		})
		.when('/category/:slug', {
	        templateUrl: '/components/pages/category.tpl',
	        reloadOnSearch: false
	    })
	    .when('/:slug', {
	        templateUrl: '/components/pages/portfolio.tpl',
	        reloadOnSearch: false,
	        onEnter: ($rootScope) => {
	        	console.log("balls")
	        	$rootScope.portfolio = $routeParams.slug
	        }
	    })
	    .otherwise('/');

	$locationProvider.html5Mode(true);
}])

.factory('WordpressData', ['$http', function($http) {

  const WPFactory = {
	  	listNav: (callback) => {
	      	$http.get('//wethem.us/cms/wp-json/wp/v2/nav').then(callback);
	    },
	    listHome: (callback) => {
     		$http.get('//wethem.us/cms/wp-json/wp/v2/home').then(callback);
		},
		listAbout: (callback) => {
     		$http.get('//wethem.us/cms/wp-json/wp/v2/about').then(callback);
	    },
	    fetchCats: () => {
    		return $http.get('//wethem.us/cms/wp-json/wp/v2/categories').then((data) => {
				console.log('thecategories', data.data);
    			return WPFactory.categories = data.data
    		})
	    },
	    fetchPortfolio: () => {
			return $http.get('//wethem.us/cms/wp-json/wp/v2/portfolio').then((data) => {
				WPFactory.portfolio = {}
				data.data.forEach((c,i,a) => {
				    let next = a[i+1]
				    let prev = a[i-1]
				    c.next = next ? '/' + next.slug : null
				    c.prev = prev ? '/' + prev.slug : null
				    WPFactory.portfolio[c.slug] = c
				})
				return WPFactory.portfolio
			})
	  	},
	  	fetchSocials: () => {
	  		return $http.get('//wethem.us/cms/wp-json/wp/v2/social_bar/381').then((res) => {
	  			return WPFactory.socials = res.data.acf.links
	  		})
	  	}
  }

  return WPFactory
}])

.filter('youtubeEmbedUrl', ['$sce', function($sce) {
	return function(videoId) {
  		return $sce.trustAsResourceUrl('//www.youtube.com/embed/' + videoId + '?controls=0&rel=0&modestbranding=1&showinfo=0&autoplay=1');
	};
}])

.filter('slugify', function(){
	return function (input) {
		if (!input)
			return;
		var slug = input.toLowerCase().trim();
		slug = slug.replace(/[^a-z0-9\s-]/g, ' ');
		slug = slug.replace(/[\s-]+/g, '-');
		return slug;
	};
})

.component('navigation', Navigation)
.component('home', Home)
.component('about', About)
.component('category', Category)
.component('contact', Contact)
.component('portfolio', Portfolio);
