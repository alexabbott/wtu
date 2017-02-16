<div class="portfolio" ng-style="bgStyle">
  <div class="nav">
    <a ng-if="current.prev" href="{{current.prev}}">back</a>
    <span>{{ current.slug }}</span>
    <a ng-if="current.next" href="{{current.next}}">next</a>
  </div>
  <div class="content" ng-bind-html="content">
  </div>
  <img class="block" src="{{bg}}" />
</div>
