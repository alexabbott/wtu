<div class="portfolio" ng-style="bgStyle">
  <div class="nav">
    <a href="{{current.prev ? current.prev : last}}">back</a>
    <span>{{ current.slug }}</span>
    <a href="{{current.next ? current.next : first}}">next</a>
  </div>
  <div class="content relative">
    <a href="/" class="escape absolute"><img src="/images/portfolio-escape.svg"/></a>
    <div class="wp-data" ng-bind-html="content"></div>
  </div>
  <img class="block" src="{{bg}}" />
</div>
