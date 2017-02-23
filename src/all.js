!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.register('2', [], function (_export) {
	'use strict';

	var Sidenav;
	return {
		setters: [],
		execute: function () {
			Sidenav = {
				templateUrl: '/components/sidenav/sidenav.tpl',
				controller: ['WordpressData', '$scope', '$window', function (WordpressData, $scope, $window) {

					WordpressData.listNav(function (response) {
						$scope.data = response.data.acf;
						console.log('nav data', $scope.data);
					});

					var nav = angular.element(document.querySelector('nav'));
					$scope.navColor = 'black';

					var changeNavOpacity = function changeNavOpacity(scrollPos) {
						if (scrollPos > 400) {
							nav.removeClass('no-opacity');
						} else {
							nav.addClass('no-opacity');
						}
					};

					var changeNavColor = function changeNavColor(scrollPos) {
						if (scrollPos > 1200 && scrollPos < 3800) {
							nav.addClass('color-alt');
							nav.addClass('logo-alt');
						} else if (scrollPos > 3799) {
							nav.addClass('logo-alt');
							nav.removeClass('color-alt');
						} else if (scrollPos < 1201) {
							nav.removeClass('color-alt');
							nav.removeClass('logo-alt');
						}
					};

					var loop = function loop() {
						var scrollTop = window_.scrollY;
						if (lastScrollTop === scrollTop) {
							raf(loop);
							return;
						} else {
							lastScrollTop = scrollTop;

							// fire scroll function if scrolls vertically
							changeNavOpacity(scrollTop);
							changeNavColor(scrollTop);
							raf(loop);
						}
					};

					var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

					var window_ = $window;
					var lastScrollTop = window_.scrollY;

					if (raf) {
						loop();
					}
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
				controller: ['WordpressData', '$scope', '$window', '$timeout', function (WordpressData, $scope, $window, $timeout) {

					WordpressData.listHome(function (response) {
						$scope.data = response.data.acf;
						console.log('home data', $scope.data);
					});

					var intro = angular.element(document.querySelector('.intro'));
					var introText = angular.element(document.querySelector('.intro__text'));
					var introScrollDown = angular.element(document.querySelector('.intro__scroll-down'));
					var introLogo = angular.element(document.querySelector('.intro__big-logo'));
					var introImage = angular.element(document.querySelector('.intro__image'));
					var introGradient = angular.element(document.querySelector('.intro__gradient'));
					var aboutIntro = angular.element(document.querySelector('.about-intro'));
					var aboutIntroImage = angular.element(document.querySelector('.about-intro__image-container'));
					var aboutIntroText = angular.element(document.querySelector('.about-intro__text'));
					var about = angular.element(document.querySelector('.about'));
					var contact = angular.element(document.querySelector('.contact'));
					var contact1 = angular.element(document.querySelector('.contact__text-1'));
					var contact2 = angular.element(document.querySelector('.contact__text-2'));
					var contact3 = angular.element(document.querySelector('.contact__text-3'));
					var contact4 = angular.element(document.querySelector('.contact__text-4'));
					var contact5 = angular.element(document.querySelector('.contact__text-5'));
					var contactEmail = angular.element(document.querySelector('.contact__email'));
					var whiteRabbit = angular.element(document.querySelector('.white-rabbit'));

					var changeIntroTextSize = function changeIntroTextSize(scrollPos) {
						if (scrollPos < 400) {
							introText.css('transform', 'translate(-50%, -50%) scale(' + (5 - scrollY / 100) + ')');
							intro.removeClass('no-opacity');
						} else if (scrollPos > 600) {
							intro.addClass('no-opacity');
						}
					};

					var changeScrollOpacity = function changeScrollOpacity(scrollPos) {
						if (scrollPos > 400 && scrollPos < 600) {
							introScrollDown.removeClass('no-opacity');
						} else {
							introScrollDown.addClass('no-opacity');
						}
					};

					var changeIntroLogoPosition = function changeIntroLogoPosition(scrollPos) {
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

					var changeIntroImagePosition = function changeIntroImagePosition(scrollPos) {
						if (scrollPos < 601) {
							introImage.removeClass('absolute');
							introImage.css('top', 0);
							introImage.css('width', '100vw');
						}
						if (scrollPos > 600 && scrollPos < 800) {
							introImage.addClass('absolute');
							introImage.css('width', 100 - (scrollPos - 601) / 5 + 'vw');
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
							introImage.css('top', 2300 - 700 + 'px');
						}
					};

					var changeIntroGradientPosition = function changeIntroGradientPosition(scrollPos) {
						if (scrollPos < 601) {
							introGradient.removeClass('absolute');
							introGradient.css('top', 0);
							introGradient.css('width', '100vw');
						}
						if (scrollPos > 600 && scrollPos < 800) {
							introGradient.addClass('absolute');
							introGradient.css('width', 100 - (scrollPos - 600) / 15 + 'vw');
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
							introGradient.css('top', 2300 - 700 + 'px');
						}
					};

					var getPositionAtBottom = function getPositionAtBottom(element) {
						var data = element.getBoundingClientRect();
						return { y: data.top };
					};

					var getPositionAtTop = function getPositionAtTop(element) {
						var data = element.getBoundingClientRect();
						return { y: data.bottom };
					};

					var getDistanceBetweenElements = function getDistanceBetweenElements(a, b) {
						var aPosition = getPositionAtTop(a);
						var bPosition = getPositionAtBottom(b);

						return bPosition.y - aPosition.y;
					};

					var changeAboutIntroPosition = function changeAboutIntroPosition(scrollPos) {
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
							aboutIntro.css('top', 2.8 * document.documentElement.clientHeight + 12 + 'px');
						}
					};

					var changeAboutOpacity = function changeAboutOpacity(scrollPos) {
						if (scrollPos > 2700 && scrollPos < 3200) {
							about.removeClass('no-opacity');
						} else {
							about.addClass('no-opacity');
						}
					};

					var changeContactOpacity = function changeContactOpacity(scrollPos) {
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

					var changeWhiteRabbitOpacity = function changeWhiteRabbitOpacity(scrollPos) {
						if (scrollPos > 4399) {
							whiteRabbit.removeClass('no-opacity');
						} else if (scrollPos < 4400) {
							whiteRabbit.addClass('no-opacity');
						}
					};

					var loop = function loop() {
						var scrollTop = window_.scrollY;
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

					var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

					var window_ = $window;
					var lastScrollTop = window_.scrollY;

					if (raf) {
						loop();
					}

					$timeout(function () {
						var rolloverWords = document.querySelectorAll('.about__text-main em');
						rolloverWords[0].addEventListener('mouseover', function () {
							angular.element(document.querySelector('.about__gif-1')).removeClass('hidden');
						});

						rolloverWords[0].addEventListener('mouseout', function () {
							angular.element(document.querySelector('.about__gif-1')).addClass('hidden');
						});
						rolloverWords[1].addEventListener('mouseover', function () {
							angular.element(document.querySelector('.about__gif-2')).removeClass('hidden');
							angular.element(document.querySelector('.about__gif-3')).removeClass('hidden');
							angular.element(document.querySelector('.about__gif-4')).removeClass('hidden');
						});

						rolloverWords[1].addEventListener('mouseout', function () {
							angular.element(document.querySelector('.about__gif-2')).addClass('hidden');
							angular.element(document.querySelector('.about__gif-3')).addClass('hidden');
							angular.element(document.querySelector('.about__gif-4')).addClass('hidden');
						});
					}, 2000);
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
                controller: ['$scope', 'WordpressData', '$routeParams', '$sce', function ($scope, WordpressData, $routeParams, $sce) {

                    WordpressData.renderPortfolio(function (data) {
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

                        $scope.content = $sce.trustAsHtml($scope.current.acf.content);
                    });
                }]
            };

            _export('default', Portfolio);
        }
    };
});

$__System.registerDynamic('5', [], false, function ($__require, $__exports, $__module) {
	var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

	(function ($__global) {
		/*!
   *	 Angular Smooth Scroll (ngSmoothScroll)
   *	 Animates scrolling to elements, by David Oliveros.
   *
   *   Callback hooks contributed by Ben Armston https://github.com/benarmston
   *	 Easing support contributed by Willem Liu. https://github.com/willemliu
   *	 Easing functions forked from Gaëtan Renaudeau. https://gist.github.com/gre/1650294
   *	 Infinite loop bugs in iOS and Chrome (when zoomed) by Alex Guzman. https://github.com/alexguzman
   *	 Support for scrolling in custom containers by Joseph Matthias Goh. https://github.com/zephinzer
   *	 Influenced by Chris Ferdinandi
   *	 https://github.com/cferdinandi
   *
   *	 Version: 2.0.0
   * 	 License: MIT
   */

		(function () {
			'use strict';

			var module = angular.module('smoothScroll', []);

			/**
    * Smooth scrolls the window/div to the provided element.
    *
    * 20150713 EDIT - zephinzer
    * 	Added new option - containerId to account for scrolling within a DIV
    */
			var smoothScroll = function (element, options) {
				options = options || {};

				// Options
				var duration = options.duration || 800,
				    offset = options.offset || 0,
				    easing = options.easing || 'easeInOutQuart',
				    callbackBefore = options.callbackBefore || function () {},
				    callbackAfter = options.callbackAfter || function () {},
				    container = document.getElementById(options.containerId) || null,
				    containerPresent = container != undefined && container != null;

				/**
     * Retrieve current location
     */
				var getScrollLocation = function () {
					if (containerPresent) {
						return container.scrollTop;
					} else {
						if (window.pageYOffset) {
							return window.pageYOffset;
						} else {
							return document.documentElement.scrollTop;
						}
					}
				};

				/**
     * Calculate easing pattern.
     *
     * 20150713 edit - zephinzer
     * - changed if-else to switch
     * @see http://archive.oreilly.com/pub/a/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html
     */
				var getEasingPattern = function (type, time) {
					switch (type) {
						case 'easeInQuad':
							return time * time; // accelerating from zero velocity
						case 'easeOutQuad':
							return time * (2 - time); // decelerating to zero velocity
						case 'easeInOutQuad':
							return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
						case 'easeInCubic':
							return time * time * time; // accelerating from zero velocity
						case 'easeOutCubic':
							return --time * time * time + 1; // decelerating to zero velocity
						case 'easeInOutCubic':
							return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
						case 'easeInQuart':
							return time * time * time * time; // accelerating from zero velocity
						case 'easeOutQuart':
							return 1 - --time * time * time * time; // decelerating to zero velocity
						case 'easeInOutQuart':
							return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * --time * time * time * time; // acceleration until halfway, then deceleration
						case 'easeInQuint':
							return time * time * time * time * time; // accelerating from zero velocity
						case 'easeOutQuint':
							return 1 + --time * time * time * time * time; // decelerating to zero velocity
						case 'easeInOutQuint':
							return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * --time * time * time * time * time; // acceleration until halfway, then deceleration
						default:
							return time;
					}
				};

				/**
     * Calculate how far to scroll
     */
				var getEndLocation = function (element) {
					var location = 0;
					if (element.offsetParent) {
						do {
							location += element.offsetTop;
							element = element.offsetParent;
						} while (element);
					}
					location = Math.max(location - offset, 0);
					return location;
				};

				// Initialize the whole thing
				setTimeout(function () {
					var currentLocation = null,
					    startLocation = getScrollLocation(),
					    endLocation = getEndLocation(element),
					    timeLapsed = 0,
					    distance = endLocation - startLocation,
					    percentage,
					    position,
					    scrollHeight,
					    internalHeight;

					/**
      * Stop the scrolling animation when the anchor is reached (or at the top/bottom of the page)
      */
					var stopAnimation = function () {
						currentLocation = getScrollLocation();
						if (containerPresent) {
							scrollHeight = container.scrollHeight;
							internalHeight = container.clientHeight + currentLocation;
						} else {
							scrollHeight = document.body.scrollheight;
							internalHeight = window.innerHeight + currentLocation;
						}

						if ( // condition 1
						position == endLocation || // condition 2
						currentLocation == endLocation || // condition 3
						internalHeight >= scrollHeight) {
							// stop
							clearInterval(runAnimation);
							callbackAfter(element);
						}
					};

					/**
      * Scroll the page by an increment, and check if it's time to stop
      */
					var animateScroll = function () {
						timeLapsed += 16;
						percentage = timeLapsed / duration;
						percentage = percentage > 1 ? 1 : percentage;
						position = startLocation + distance * getEasingPattern(easing, percentage);
						if (containerPresent) {
							container.scrollTop = position;
						} else {
							window.scrollTo(0, position);
						}
						stopAnimation();
					};

					callbackBefore(element);
					var runAnimation = setInterval(animateScroll, 16);
				}, 0);
			};

			// Expose the library in a factory
			//
			module.factory('smoothScroll', function () {
				return smoothScroll;
			});

			/**
    * Scrolls the window to this element, optionally validating an expression
    *
    * 20150713 EDIT - zephinzer
    * 	Added containerId to attributes for smooth scrolling within a DIV
    */
			module.directive('smoothScroll', ['smoothScroll', function (smoothScroll) {
				return {
					restrict: 'A',
					scope: {
						callbackBefore: '&',
						callbackAfter: '&'
					},
					link: function ($scope, $elem, $attrs) {
						if (typeof $attrs.scrollIf === 'undefined' || $attrs.scrollIf === 'true') {
							setTimeout(function () {

								var callbackBefore = function (element) {
									if ($attrs.callbackBefore) {
										var exprHandler = $scope.callbackBefore({ element: element });
										if (typeof exprHandler === 'function') {
											exprHandler(element);
										}
									}
								};

								var callbackAfter = function (element) {
									if ($attrs.callbackAfter) {
										var exprHandler = $scope.callbackAfter({ element: element });
										if (typeof exprHandler === 'function') {
											exprHandler(element);
										}
									}
								};

								smoothScroll($elem[0], {
									duration: $attrs.duration,
									offset: $attrs.offset,
									easing: $attrs.easing,
									callbackBefore: callbackBefore,
									callbackAfter: callbackAfter,
									containerId: $attrs.containerId
								});
							}, 0);
						}
					}
				};
			}]);

			/**
    * Scrolls to a specified element ID when this element is clicked
    *
    * 20150713 EDIT - zephinzer
    * 	Added containerId to attributes for smooth scrolling within a DIV
    */
			module.directive('scrollTo', ['smoothScroll', function (smoothScroll) {
				return {
					restrict: 'A',
					scope: {
						callbackBefore: '&',
						callbackAfter: '&'
					},
					link: function ($scope, $elem, $attrs) {
						var targetElement;

						$elem.on('click', function (e) {
							e.preventDefault();

							targetElement = document.getElementById($attrs.scrollTo);
							if (!targetElement) return;

							var callbackBefore = function (element) {
								if ($attrs.callbackBefore) {
									var exprHandler = $scope.callbackBefore({ element: element });
									if (typeof exprHandler === 'function') {
										exprHandler(element);
									}
								}
							};

							var callbackAfter = function (element) {
								if ($attrs.callbackAfter) {
									var exprHandler = $scope.callbackAfter({ element: element });
									if (typeof exprHandler === 'function') {
										exprHandler(element);
									}
								}
							};

							smoothScroll(targetElement, {
								duration: $attrs.duration,
								offset: $attrs.offset,
								easing: $attrs.easing,
								callbackBefore: callbackBefore,
								callbackAfter: callbackAfter,
								containerId: $attrs.containerId
							});

							return false;
						});
					}
				};
			}]);
		})();
	})(this);

	return _retrieveGlobal();
});
$__System.registerDynamic("6", ["5"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("5");
});
$__System.register('1', ['2', '3', '4', '6'], function (_export) {
	'use strict';

	var Sidenav, Home, Portfolio, smoothScroll, app;
	return {
		setters: [function (_) {
			Sidenav = _['default'];
		}, function (_2) {
			Home = _2['default'];
		}, function (_3) {
			Portfolio = _3['default'];
		}, function (_4) {
			smoothScroll = _4['default'];
		}],
		execute: function () {
			app = angular.module('weThemUs', ['ngRoute', 'ngSanitize', 'smoothScroll']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
				$routeProvider.when('/', {
					templateUrl: '/components/pages/home.tpl',
					reloadOnSearch: false
				}).when('/:slug', {
					templateUrl: '/components/pages/portfolio.tpl',
					reloadOnSearch: false
				}).otherwise('/');

				$locationProvider.html5Mode(true);
			}]).factory('WordpressData', function ($http) {

				var portfolio = null;

				return {
					listNav: function listNav(callback) {
						$http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/nav/42').then(callback);
					},
					listHome: function listHome(callback) {
						$http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/home/12').then(callback);
					},
					renderPortfolio: function renderPortfolio(callback) {
						if (!portfolio) {
							// get it green...
							console.log('getting polio...');
							return $http.get('http://alex-abbott.com/wtu/wp-json/wp/v2/portfolio'
							// required setting "Show in REST API" within WCK
							// Post Type editor (portfolio, advanced options)
							).then(function (data) {
								portfolio = data;
								callback(portfolio);
							});
						}
						callback(portfolio);
					}
				};
			}).filter('youtubeEmbedUrl', function ($sce) {
				return function (videoId) {
					return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + videoId + '?controls=0&rel=0&modestbranding=1&showinfo=0');
				};
			}).component('sidenav', Sidenav).component('home', Home).component('portfolio', Portfolio);
		}
	};
});

})
(function(factory) {
  factory();
});