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
app.component('portfolio', {
  templateUrl: '/components/portfolio/portfolio.tpl',
  controller: ['$scope', 'WordpressData', '$http', function ($scope, WordpressData, $http) {

    var ctrl = this;

    $scope.test = 'portfolio testing';

    // why does this appear to work /
    // trigger rerender only 90% of the time?
    setTimeout(() => {
      $scope.bish = 'bish';
    }, 1000);

    WordpressData.listPortfolio(response => {
      $scope.data = response.data.acf;
      console.log('databebedaa', $scope.data);
      console.log($scope.bloobs);
    });

    // in reality this will be pulled from WordpressData
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

    // Content:
    // Needs to be structured like a standard Wordpress post,
    // basically a glob of HTML; this is because for some clients
    // they'll wanna have photos, a description, bulleted list,
    // iframes, who knows wtf what. So I think the ideal JSON
    // would look like:

    // Data{
    //   parris: {
    //     title: "Paris Goebel",
    //     shortTitle: "Parris",
    //     bgImg: "http://wethem.us/path/to/wp-content/media-id/hashtag/awful/path",
    //     content: "<div class='arbitrary-wp-class'>stuff</div>",
    //     ...
    //   },
    //   zayn: {...},
    //   ...
    // }

    // would this^ be something that I need to specify in
    // functions.php or wherever we configure wp-json?


    // State:
    // WordpressData should pass in the index/key of
    // the current portfolio client, along with the key
    // of the previous + next clients for the nav buttons.
    // Question: will we use anchor tags for those buttons
    // or is there an ng-element that can update state /
    // alert $routeProvider to rerender component without
    // refresh (similar to <Link/> in react)? Something like:

    // ~ portfolio.js ~
    // ctrl.shiftClient = (title) => {
    //   $routeProvider.render('/%s', title)
    // }

    // ~ portfolio.tpl ~
    // <el title="zayn" ng-click="shiftClient(this.title)">next</el>
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
app.component('sidenav', {
    templateUrl: '/components/sidenav/sidenav.tpl',
    controller: ['$scope', function ($scope) {

        var ctrl = this;

        $scope.test = 'this is only a test';
    }]
});