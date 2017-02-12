var app = angular.module('weThemUs', ['ngRoute', 'ngSanitize']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: '/components/pages/home.tpl',
		reloadOnSearch: false
	}).when('/:slug', {
		templateUrl: '/components/pages/portfolio.tpl',
		reloadOnSearch: false
	}).otherwise('/');

	$locationProvider.html5Mode(true);
}]);
app.component('home', {
    templateUrl: '/components/home/home.tpl',
    controller: ['$scope', 'WordpressData', function ($scope, WordpressData) {

        var ctrl = this;

        $scope.test = 'testing';

        WordpressData.listHome(function (response) {
            $scope.data = response.data.acf;
            console.log('data', $scope.data);
        });
    }]
});
app.factory('WordpressData', function ($http) {
  return {
    listHome: function (callback) {
      $http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/home/12').then(callback);
    },
    listPortfolio: function (callback) {
      $http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/portfolio/18').then(callback);
    }
  };
});
app.component('portfolio', {
  templateUrl: '/components/portfolio/portfolio.tpl',
  controller: ['$scope', 'WordpressData', '$http', function ($scope, WordpressData, $http) {

    var ctrl = this;

    $scope.test = 'portfolio testing';

    setTimeout(() => {
      $scope.bish = 'bish';
    }, 1000);

    WordpressData.listPortfolio(response => {
      $scope.data = response.data.acf;
      console.log('databebedaa', $scope.data);
      console.log($scope.bloobs);
    });

    // const randoBg = async () => {
    //   try {
    //     let request = await fetch('http://thecatapi.com/api/images/get?format=src&type=gif');
    //     $scope.bg = request.url;
    //     console.log("scope bg", $scope.bg);
    //     return request.url;
    //   }
    //   catch (error) {
    //     console.log("fawk", error);
    //   }
    // };

    const getBg = url => {
      console.log("getting guy");
      $http({
        method: 'GET',
        url: url
      }).then(img => {
        $scope.bg = img.config.url;
        console.log('scope', $scope.bg);
      }, e => {
        console.log('fawk', e);
        $scope.bg = 'https://http.cat/404.jpg';
      });
    };

    getBg('http://thecatapi.com/api/images/get?format=src&type=gif');
  }]
});
app.component('sidenav', {
    templateUrl: '/components/sidenav/sidenav.tpl',
    controller: ['$scope', function ($scope) {

        var ctrl = this;

        $scope.test = 'this is only a test';
    }]
});