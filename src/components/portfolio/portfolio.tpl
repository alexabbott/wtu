<div class="portfolio" ng-style="contentStyle" ng-class="{'trans': transitioning}">
    <div class="marquee" ng-style="marqueeStyle">
        <svg class="title"
             xmlns="http://www.w3.org/2000/svg"
             width="100%" viewBox="0 0 80 80">
          <text x="-108" y="65"
                font-family="druk-wide"
                fill="rgba(255,255,255,0)"
                stroke="{{contentStyle.color}}"
                font-size="80">
            {{ current.title.rendered }}
          </text>
        </svg>
    </div>
    <!--   <div class="nav relative">
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
    </div> -->

    <main ng-style="contentStyle" ng-style="contentStyle">
        <div class="content relative">
            <h1 class="title">{{ current.title.rendered }}</h1>

            <div ng-repeat="b in content"
                 class="section {{b.acf_fc_layout}} {{b.layout}}">

                <span ng-if="b.acf_fc_layout === 'text_block'"
                      ng-bind-html="trustBlob(b.text)" />

                <img  ng-if="b.acf_fc_layout === 'image_block'" src="{{b.image.url}}" />

                <div ng-if="b.acf_fc_layout === 'embed_block'"
                     class="embed"
                     ng-bind-html="trustBlob(b.embed)" />

            </div>
        </div>

        <div class="nav">
            <span ng-click="current.prev ? transition(current.prev) : transition(last)"
                  class="navi">
                BACK
            </span>
            <a href="/"
               class="navi">
                MAIN
            </a>
            <span ng-click="current.next ? transition(current.next) : transition(first)"
                  class="navi">
                NEXT
            </span>
        </div>
    </main>
</div>
