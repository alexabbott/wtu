<div class="home">
  <h1 class="hidden" smooth-scroll duration="3000" easing="easeInQuint">WeThem.Us</h1>

  <section class="intro__bg">
		<img ng-src="{{ data.intro_image.url }}" class="intro__image">
		<div class="intro__gradient"></div>
	</section>

	<div id="intro-indicator"></div>

    <section id="intro" class="intro">
    	<div class="intro__container">
	    	<img ng-src="{{ data.intro_big_logo.url }}" class="intro__big-logo no-opacity low-position" alt="WeThem.Us">
	    	<div class="intro__text" ng-bind-html="data.intro_text"></div>
	    	<div class="intro__scroll-down no-opacity" scroll-to="about-indicator">
	    		{{ data.intro_scroll_down_text }}
	    		<img ng-src="{{ data.intro_scroll_down_arrow.url }}" class="intro__scroll-down-arrow" alt="{{ data.intro_scroll_down_text }}">
	    	</div>
	    </div>
    </section>

    <img ng-src="{{ data.pink_blotch.url }}" class="pink-blotch">

    <div id="about-indicator"></div>

    <section id="about" class="about no-opacity">
    	<div class="about__container">
	    	<div class="about__text">
			    <div ng-bind-html="data.about_paragraph" class="about__text-main"></div>
			    <div class="about__bottom-headline fade-in-out">{{ data.about_bottom_headline }}</div>
			</div>
		</div>
    </section>

    <div id="projects-indicator"></div>

    <section id="projects" class="projects">
    	<div class="projects__container no-opacity">
    		<div ng-repeat="project in portfolio" class="projects__marquee-box">
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
    	</div>
    </section>
</div>
