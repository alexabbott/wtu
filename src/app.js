import Sidenav from './components/sidenav/sidenav';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';

const app = angular.module('weThemUs', ['ngRoute', 'ngSanitize'])

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

  const WPFactory = {
	  	listNav: (callback) => {
	      	$http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/nav/42').then(callback);
	    },
	    listHome: (callback) => {
	     		$http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/home/12').then(callback);
	    },
	    fetchPortfolio: (callback) => {
	  			console.log('getting polio...');
					$http.get('http://alex-abbott.com/wtu/wp-json/wp/v2/portfolio')
					.then((data) => {
							WPFactory.portfolio = {};
							data.data.forEach((c,i,a) => {
							    let next = a[i+1];
							    let prev = a[i-1];
							    c.next = next ? '/' + next.slug : null;
							    c.prev = prev ? '/' + prev.slug : null;
							    WPFactory.portfolio[c.slug] = c;
							});
							callback(WPFactory.portfolio);
					})
	  	}
  }

  return WPFactory
})

.component('sidenav', Sidenav)
.component('home', Home)
.component('portfolio', Portfolio);
