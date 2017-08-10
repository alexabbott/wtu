<div class="home">
  <h1 class="hidden" id="top">WeThem.Us</h1>

  <section class="intro__bg">
		<img ng-src="{{ data.home.intro_image.url }}" class="intro__image no-opacity">
		<div class="intro__gradient"></div>
	</section>

	<div id="intro-indicator"></div>

    <section id="intro" class="intro">
    	<div class="intro__container">
	    	<div class="intro__text no-opacity" ng-bind-html="data.home.intro_text"></div>
	    </div>
    </section>

	<div class="intro__scroll-down no-opacity" scroll-to="about-indicator">
		{{ data.home.intro_scroll_down_text }}
	</div>

    <div class="blotch"></div>

    <div id="about-indicator"></div>

    <section id="about" class="about no-opacity">
		<div class="about-container">
			<span>
				<span class="about__text" ng-bind-html="data.home.services">
				</span>
			</span>
		</div>
    </section>

    <div id="projects-indicator"></div>

    <section id="projects" class="projects">
    	<div class="projects__container no-opacity">
    		<div ng-repeat="project in data.portfolio" class="projects__marquee-box">
	    		<div class="projects__marquee">
	    			<a href="/{{ project.slug }}"
               class="projects__link uppercase"
               ng-repeat="i in [1,2,3,4,5]"
               ng-mouseenter="showBg($index)"
               ng-mouseleave="hideBg($index)">
               {{ project.acf.short_title }}
            </a> <a href="/{{ project.slug }}"
               class="projects__link uppercase"
               ng-repeat="i in [1,2,3,4,5]"
               ng-mouseenter="showBg($index)"
               ng-mouseleave="hideBg($index)">
               {{ project.acf.short_title }}
            </a>
	    		</div>
	    		<div class="projects__bg no-opacity" style="background-image: url({{ project.acf.bg_img }});">
	    		</div>
    		</div>
			<div class="filter-trigger" ng-click="showFilter()">SEARCH / FILTER</div>
			<a ng-href="/internal" class="nav__white-rabbit mobile-only">
				<img ng-src="{{ data.nav.white_rabbit_image.url }}" class="nav__white-rabbit__image" alt="white rabbit">
			</a>
			<div class="nav__socials mobile-only">
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
			</a><br>
		</span>
	</section>
	<div class="modal-mask no-opacity" ng-click="hideFilter()"></div>
</div>
