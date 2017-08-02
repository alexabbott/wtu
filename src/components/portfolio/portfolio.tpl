<div class="portfolio" ng-style="contentStyle"
     ng-class="{
        'trans': transitioning,
        'initTrans': initTransition
     }">
    <div class="marquee" ng-style="marqueeStyle">
        <svg class="title"
             xmlns="http://www.w3.org/2000/svg"
             width="100%" viewBox="0 0 80 80">
          <text x="40" y="65"
                text-anchor="middle"
                font-family="druk-wide"
                fill="rgba(255,255,255,0)"
                stroke="{{contentStyle.color || '#fff'}}"
                font-size="80">
            {{ current.title.rendered }}
          </text>
        </svg>
    </div>

    <main ng-style="contentStyle" ng-style="contentStyle">
        <div class="content relative">
            <header>
                <h1 class="title">{{ current.title.rendered }}</h1>
                <h2 class="cats">
                    <span class="cat" ng-repeat="c in current.cats track by $index">
                    {{c.name}}
                    </span>
                </h2>
            </header>

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
