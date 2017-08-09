<nav>
	<div class="nav__main no-opacity">
		<a href="/" id="nav__home" ng-click="hideWhiteRabbit()">
			<img ng-src="{{ data.nav_logo.url }}" class="nav__logo nav__logo-main">
			<img ng-src="{{ data.nav_logo_alt.url }}" class="nav__logo nav__logo-alt">
		</a>
		<div class="hamburger" ng-click="openCloseNav()">
			<div class="nav-icon mobile-only" ng-class="{ 'open': navOpen }">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="nav__items" ng-class="{'mobile-hide': !navOpen}" ng-click="openCloseNav()">
			<a href="/?q=work" class="nav__item">
				{{ data.nav_item_1 }}
			</a>
			<a href="/about" class="nav__item">
				{{ data.nav_item_2 }}
			</a>
			<a href="/contact" class="nav__item">
				{{ data.nav_item_3 }}
			</a>
		</div>
		<a ng-href="/internal" class="nav__white-rabbit mobile-hide" ng-class="{'mobile-hide': navOpen}">
			<img ng-src="{{ data.white_rabbit_image.url }}" class="nav__white-rabbit__image" alt="white rabbit">
		</a>
		<a ng-href="/internal" class="nav__white-rabbit mobile-only no-opacity">
			<img ng-src="{{ data.white_rabbit_image.url }}" class="nav__white-rabbit__image" alt="white rabbit">
		</a>
		<div class="nav__socials mobile-hide" ng-class="{'mobile-hide': !navOpen}">
			<a target="_blank" ng-href="{{ data.facebook_link }}">
				<i class="fa fa-facebook" aria-hidden="true"></i>
			</a>
			<a target="_blank" ng-href="{{ data.twitter_link }}">
				<i class="fa fa-twitter" aria-hidden="true"></i>
			</a>
			<a target="_blank" ng-href="{{ data.instagram_link }}">
				<i class="fa fa-instagram" aria-hidden="true"></i>
			</a>
			<a target="_blank" ng-href="{{ data.snapchat_link }}">
				<i class="fa fa-snapchat-ghost" aria-hidden="true"></i>
			</a>
		</div>
		<div class="nav__socials mobile-only no-opacity">
			<a target="_blank" ng-href="{{ data.facebook_link }}">
				<i class="fa fa-facebook" aria-hidden="true"></i>
			</a>
			<a target="_blank" ng-href="{{ data.twitter_link }}">
				<i class="fa fa-twitter" aria-hidden="true"></i>
			</a>
			<a target="_blank" ng-href="{{ data.instagram_link }}">
				<i class="fa fa-instagram" aria-hidden="true"></i>
			</a>
			<a target="_blank" ng-href="{{ data.snapchat_link }}">
				<i class="fa fa-snapchat-ghost" aria-hidden="true"></i>
			</a>
		</div>
	</div>
</nav>