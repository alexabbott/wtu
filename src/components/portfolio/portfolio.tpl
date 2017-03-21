<div class="portfolio" ng-style="bgStyle" ng-class="{'trans': transitioning}">
  <div class="nav relative">
    <span ng-click="current.prev ? transition(current.prev) : transition(last)" class="navi pointer">
      <svg xmlns="http://www.w3.org/2000/svg"
           width="80" height="80" viewBox="0 0 80 80">
        <text x="-125" y="65" font-family="druk-wide" fill="none" stroke-width="1" stroke="white"  font-size="80">
          back
        </text>
      </svg>
    </span><span class="navi slug">
      <svg xmlns="http://www.w3.org/2000/svg"
           width="80" height="80" viewBox="0 0 80 80">
        <g ng-style="titleAnim"><text x="-108" y="65" font-family="druk-wide" fill="rgba(255,255,255,1)" font-size="80">
          {{ current.title.rendered }}
        </text></g>
      </svg>
    </span><span ng-click="current.next ? transition(current.next) : transition(first)" class="navi pointer">
      <svg xmlns="http://www.w3.org/2000/svg"
           width="80" height="80" viewBox="0 0 80 80">
        <text x="-110" y="65" font-family="druk-wide" fill="none" stroke-width="1" stroke="white"  font-size="80">
          next
        </text>
      </svg>
    </span>
  </div>

  <div class="content relative">
    <div ng-repeat="b in content" class="section {{b.acf_fc_layout}}">
      <img ng-if="b.acf_fc_layout === 'banner'" ng-src="{{b.image}}" />

      <h1 ng-if="b.acf_fc_layout === 'subheader'" class="subheader">
        {{b.text}}
      </h1>

      <p ng-if="b.acf_fc_layout === 'text'" class="text" ng-bind-html="b.text"></p>

      <div masonry ng-if="b.acf_fc_layout === 'gallery'" loadImages="true">
        <span masonry-brick ng-repeat="i in b.images">
          <img ng-src="{{i.image}}" />
        </span>
      </div>

      <span ng-if="b.acf_fc_layout === 'embed'"
            ng-bind-html="trustBlob(b.string)"
            class="embed block text-center"></span>

      <a ng-if="b.acf_fc_layout === 'socials'"
         ng-repeat="s in b.socials"
         href="{{s.url}}" target="_blank"
         class="icon inline-block">
        <img ng-src="{{s.icon}}" />
      </a>
    </div>
  </div>
</div>
