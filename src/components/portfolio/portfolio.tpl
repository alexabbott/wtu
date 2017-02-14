<div class="portfolio" ng-style="bgStyle">
  <a ng-if="current.prev" href="{{current.prev}}">back</a>
  <span>{{ current.slug }}</span>
  <a ng-if="current.next" href="{{current.next}}">next</a>
  <img class="block" src="{{bg}}" />
</div>
