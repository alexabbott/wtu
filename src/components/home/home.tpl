<div id="top"></div>
<div>{{ data.home.intro_gradient_color_2 }}</div>

<div class="home" ng-init="init()">
  <h1 class="hidden">WeThem.Us</h1>

  <section class="intro__bg">
		<img ng-src="{{ data.home.intro_image.url }}" class="intro__image no-opacity" ng-show="!data.home.intro_video">
		<video ng-src="{{ data.home.intro_video.url }}" muted poster="{{data.home.intro_image.url}}" class="intro__video no-opacity" ng-show="data.home.intro_video" autoplay playsinline loop></video>
		<div class="intro__gradient" style="background: {{ data.home.intro_gradient_color_1 }};
			background: -moz-linear-gradient(top, {{ data.home.intro_gradient_color_1 }} 0%, {{ data.home.intro_gradient_color_1 }} 20%, {{ data.home.intro_gradient_color_2 }} 100%);
			background: -webkit-gradient(left top, left bottom, color-stop(0%, {{ data.home.intro_gradient_color_1 }}), color-stop(20%, {{ data.home.intro_gradient_color_1 }}), color-stop(100%, {{ data.home.intro_gradient_color_2 }}));
			background: -webkit-linear-gradient(top, {{ data.home.intro_gradient_color_1 }} 0%, {{ data.home.intro_gradient_color_1 }} 20%, {{ data.home.intro_gradient_color_2 }} 100%);
			background: -o-linear-gradient(top, {{ data.home.intro_gradient_color_1 }} 0%, {{ data.home.intro_gradient_color_1 }} 20%, {{ data.home.intro_gradient_color_2 }} 100%);
			background: -ms-linear-gradient(top, {{ data.home.intro_gradient_color_1 }} 0%, {{ data.home.intro_gradient_color_1 }} 20%, {{ data.home.intro_gradient_color_2 }} 100%);
			background: linear-gradient(to bottom, {{ data.home.intro_gradient_color_1 }} 0%, {{ data.home.intro_gradient_color_1 }} 20%, {{ data.home.intro_gradient_color_2 }} 100%);
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='{{ data.home.intro_gradient_color_1 }}', endColorstr='{{ data.home.intro_gradient_color_2 }}', GradientType=0 );"></div>
	</section>

    <section id="intro" class="intro">
    	<div class="intro__container">
	    	<div class="intro__text no-opacity" ng-bind-html="data.home.intro_text">
			</div>
	    </div>
    </section>

	<div class="intro__scroll-down no-opacity" scroll-to="about-indicator">
		{{ data.home.intro_scroll_down_text }}
	</div>

    <div class="blotch" style="background: {{ data.home.blotch_color }};
		box-shadow: 0px 0px 340px 230px {{ data.home.blotch_color }};"></div>

    <section id="services" class="services no-opacity">
		<div class="services-container">
			<span class="services__text" ng-bind-html="data.home.services">
			</span>
		</div>
    </section>

    <div id="work"></div>

    <section id="projects" class="projects">
		<div class="selected-works no-opacity">Selected Works</div>
    	<div class="projects__container no-opacity" ng-class="{
        'trans': transitioning,
        'initTrans': initTransition }">
			<svg ng-class="{ 'no-opacity-on': projectsLoaded}" class="loader projects__loader" ng-class="{'hidden': !transitioning}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253.49 75.9">
				<title>Loading...</title>
				<path d="M6.1,75.1,0,.7H13.1l1.5,48.6L16.7.7H28.5l2.2,48.9L32.2.7H44.37L38.3,75.1H24L22.37,32.7,20.7,75.1Z" fill="#fff"/>
				<path d="M66.7.7V12.1h-9V30.2h7.6V42H57.7V63.5H67V75.1H45.29V.7Z" fill="#fff"/>
				<path d="M73.99,12.1h-5.7V.7h23.9V12.1h-5.7v63H73.99Z" fill="#fff"/>
				<path d="M93.99.7h12.7V29.6h2.68V.7h12.6V75.1h-12.6V42.7h-2.7V75.1H93.99Z" fill="#fff"/>
				<path d="M145.37.7V12.1h-9V30.2h7.6V42h-7.6V63.5h9.3V75.1h-21.7V.7Z" fill="#fff"/>
				<path d="M147.49.7h14.5l2.2,36.1L166.37.7h14.1V75.1h-10.6V33.5l-3.68,41.6h-4.5l-3.8-41.6V75.1h-10.4Z" fill="#fff"/>
				<path class="square" d="M193.09,75.1H182.37V62.3h10.7Z" fill="#fff"/>
				<path d="M207.99,75.9c-9.7,0-13.3-5.7-13.3-12.3V.7h13V62.1c0,1.3.4,1.9,1.3,1.9s1.4-.6,1.4-1.9V.7h12.9V63.6c0,6.5-4.2,12.3-13.3,12.3Z" fill="#fff"/>
				<path d="M237.49,75.8c-8.3,0-12.4-3.8-12.4-11.5V44.8h12.4V63.4c0,1.3.4,2,1.3,2s1.4-.7,1.4-2.1V48.8c0-2.4-.3-3.4-2.2-5.1l-6.5-5.6c-4.3-3.6-6.1-7.7-6.1-13.3V11.6c0-6.9,3.6-11.6,12.7-11.6h2.9c9.1,0,12,4.6,12,10.6V27h-12.2V11.2c0-1.1-.4-1.6-1.3-1.6s-1.3.5-1.3,1.6V23.9c0,2,.4,2.7,2,4.2l6.4,5.6c5,4.2,6.9,7.5,6.9,14.1V62.6c0,8-3.9,13.2-13.1,13.2Z" fill="#fff"/>
			</svg>
    		<div ng-repeat="project in data.portfolio track by $index | limitTo : 6" class="projects__marquee-box" ng-if="project.acf.featured">
	    		<div class="projects__marquee" ng-class="{ 'paused': pause[project.slug] === true }">
	    			<a href="/{{ project.slug }}"
						class="projects__link uppercase"
						ng-mouseenter="showBg(project.slug); pause[project.slug] = true;"
						ng-mouseleave="hideBg(project.slug); pause[project.slug] = false;"
						ng-class="{ 'fade-in': projectsLoaded }">
						<span ng-repeat="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]">
							{{ project.acf.short_title }}
						</span>
					</a>
	    		</div>
	    		<div class="projects__bg no-opacity _{{project.slug}}" style="background-image: url({{ project.acf.bg_img }});">
	    		</div>
			</div>
			<div class="projects__hidden-bg" ng-repeat="project in data.portfolio track by $index | limitTo : 6" ng-if="project.acf.featured" style="background-image: url({{ project.acf.bg_img }});"></div>
			<div class="filter-trigger no-opacity" ng-click="showFilter()">SEARCH / FILTER</div>
			<a ng-href="/internal" class="nav__white-rabbit mobile-only">
				<img ng-src="{{ data.nav.white_rabbit_image.url }}" class="nav__white-rabbit__image  no-opacity" alt="white rabbit">
			</a>
			<div class="nav__socials mobile-only no-opacity">
				<a target="_blank" ng-href="{{ data.nav.facebook_link }}">
					<i class="fa fa-facebook" aria-hidden="true"></i>
				</a>
				<a target="_blank" ng-href="{{ data.nav.twitter_link }}">
					<i class="fa fa-twitter" aria-hidden="true"></i>
				</a>
				<a target="_blank" ng-href="{{ data.nav.instagram_link }}">
					<i class="fa fa-instagram" aria-hidden="true"></i>
				</a>
				<a target="_blank" ng-href="{{ data.nav.snapchat_link }}">
					<i class="fa fa-snapchat-ghost" aria-hidden="true"></i>
				</a>
			</div>
    	</div>
    </section>
	<section class="filter modal no-opacity">
		<h4>SEARCH/FILTER</h4>
		<span ng-repeat="category in data.categories">
			<a ng-href="/category/{{ category.name | slugify }}" >
				{{ category.name }}
			</a>
		</span>
	</section>
	<div class="modal-close no-opacity" ng-click="hideFilter()">&times;</div>
	<div class="modal-mask no-opacity" ng-click="hideFilter()"></div>
</div>
