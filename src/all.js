!function(e){function r(e,r,t){e in l||(l[e]={name:e,declarative:!0,deps:r,declare:t,normalizedDeps:r})}function t(e){return p[e]||(p[e]={name:e,dependencies:[],exports:{},importers:[]})}function n(r){if(!r.module){var o=r.module=t(r.name),a=r.module.exports,u=r.declare.call(e,function(e,r){if(o.locked=!0,"object"==typeof e)for(var t in e)a[t]=e[t];else a[e]=r;for(var n=0,u=o.importers.length;u>n;n++){var i=o.importers[n];if(!i.locked)for(var l=0;l<i.dependencies.length;++l)i.dependencies[l]===o&&i.setters[l](a)}return o.locked=!1,r},r.name);o.setters=u.setters,o.execute=u.execute;for(var s=0,d=r.normalizedDeps.length;d>s;s++){var f,c=r.normalizedDeps[s],v=l[c],m=p[c];m?f=m.exports:v&&!v.declarative?f=v.esModule:v?(n(v),m=v.module,f=m.exports):f=i(c),m&&m.importers?(m.importers.push(o),o.dependencies.push(m)):o.dependencies.push(null),o.setters[s]&&o.setters[s](f)}}}function o(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(d)for(var n in r)"default"!==n&&a(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,c(t,"__useDefault",{value:!0}),t}function a(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&c(e,t,n)}catch(o){return e[t]=r[t],!1}}function u(r,t){var n=l[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var d=n.normalizedDeps[o];-1==s.call(t,d)&&(l[d]?u(d,t):i(d))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function i(e){if(m[e])return m[e];if("@node/"==e.substr(0,6))return m[e]=o(v(e.substr(6)));var r=l[e];if(!r)throw"Module "+e+" not present.";return n(l[e]),u(e,[]),l[e]=void 0,r.declarative&&c(r.module.exports,"__esModule",{value:!0}),m[e]=r.declarative?r.module.exports:r.esModule}var l={},s=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},d=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(f){d=!1}var c;!function(){try{Object.defineProperty({},"a",{})&&(c=Object.defineProperty)}catch(e){c=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var p={},v="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,m={"@empty":{}};return function(e,t,n,a){return function(u){u(function(u){for(var l=0;l<t.length;l++)(function(e,r){r&&r.__esModule?m[e]=r:m[e]=o(r)})(t[l],arguments[l]);a({register:r});var s=i(e[0]);if(e.length>1)for(var l=1;l<e.length;l++)i(e[l]);return n?s["default"]:s})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register('2', [], function (_export) {
    'use strict';

    var Sidenav;
    return {
        setters: [],
        execute: function () {
            Sidenav = {
                templateUrl: '/components/sidenav/sidenav.tpl',
                controller: ['$scope', function ($scope) {

                    $scope.test = 'this is only a test';
                }]
            };

            _export('default', Sidenav);
        }
    };
});

$__System.register('3', [], function (_export) {
    'use strict';

    var Home;
    return {
        setters: [],
        execute: function () {
            Home = {
                templateUrl: '/components/home/home.tpl',
                controller: ['$scope', 'WordpressData', function ($scope, WordpressData) {

                    $scope.test = 'testin';

                    WordpressData.listHome(function (response) {
                        $scope.data = response.data.acf;
                        console.log('data', $scope.data);
                    });
                }]
            };

            _export('default', Home);
        }
    };
});

$__System.register('4', [], function (_export) {
    'use strict';

    var Portfolio;
    return {
        setters: [],
        execute: function () {
            Portfolio = {
                templateUrl: '/components/portfolio/portfolio.tpl',
                controller: ['$scope', 'WordpressData', '$routeParams', function ($scope, WordpressData, $routeParams) {

                    $scope.test = 'portfolio testing';

                    WordpressData.listPortfolio(function (data) {
                        var keys = {};
                        data.data.forEach(function (c, i, a) {
                            var next = a[i + 1];
                            var prev = a[i - 1];
                            c.next = next ? '/' + next.slug : null;
                            c.prev = prev ? '/' + prev.slug : null;
                            keys[c.slug] = c;
                        });

                        $scope.portfolio = keys;

                        $scope.current = $scope.portfolio[$routeParams.slug];
                        $scope.bgStyle = {
                            backgroundImage: 'url(' + $scope.current.acf.bg_img + ')'
                        };
                    });

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
                    //   $routeProvider.render('/%s', title);
                    // }

                    // ~ portfolio.tpl ~
                    // <el title="zayn" ng-click="shiftClient(nextClient.title)">next</el>
                }]
            };

            _export('default', Portfolio);
        }
    };
});

$__System.register('1', ['2', '3', '4'], function (_export) {
  'use strict';

  var Sidenav, Home, Portfolio, app;
  return {
    setters: [function (_) {
      Sidenav = _['default'];
    }, function (_2) {
      Home = _2['default'];
    }, function (_3) {
      Portfolio = _3['default'];
    }],
    execute: function () {
      app = angular.module('weThemUs', ['ngRoute', 'ngSanitize']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
          templateUrl: '/components/pages/home.tpl',
          reloadOnSearch: false
        }).when('/:slug', {
          templateUrl: '/components/pages/portfolio.tpl',
          reloadOnSearch: false
        }).otherwise('/');

        $locationProvider.html5Mode(true);
      }]).factory('WordpressData', function ($http) {

        //  let portfolio;
        // $http.get('http://alex-abbott.com/wtu/wp-json/wp/v2/portfolio')
        // 					 // required setting "Show in REST API" within WCK
        // 					 // Post Type editor (portfolio, advanced options)
        //  .then((data) => {
        // 		portfolio = data;
        // 	});

        return {
          listHome: function listHome(callback) {
            $http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/home/12').then(callback);
          },
          listPortfolio: function listPortfolio(callback) {
            $http.get('http://alex-abbott.com/wtu/wp-json/wp/v2/portfolio').then(callback);
          }
        };
      }).component('sidenav', Sidenav).component('home', Home).component('portfolio', Portfolio);
    }
  };
});

})
(function(factory) {
  factory();
});