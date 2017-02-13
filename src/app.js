var app = angular.module('weThemUs', ['ngRoute', 'ngSanitize'])

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
}]);
