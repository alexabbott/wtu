<div class="portfolio" ng-style="contentStyle"
     ng-class="{
        'trans': transitioning,
        'initTrans': initTransition
     }">
    <svg class="loader" ng-class="{'hidden': !transitioning}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253.49 75.9">
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

    <div class="marquee" ng-style="marqueeStyle">
        <svg class="title"
             xmlns="http://www.w3.org/2000/svg"
             width="100%" viewBox="0 0 80 80">
          <text x="40" y="70"
                text-anchor="middle"
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
                 class="section fade {{b.acf_fc_layout}} {{b.layout}}">

                <span ng-if="b.acf_fc_layout === 'text_block'"
                      ng-bind-html="trustBlob(b.text)" ></span>

                <img  ng-if="b.acf_fc_layout === 'image_block'" src="{{b.image.url}}" />

                <div ng-if="b.acf_fc_layout === 'embed_block'"
                     class="embed"
                     ng-class="{'fixed-aspect': b.fixed_aspect}"
                     ng-bind-html="trustBlob(b.embed)" ></div>

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

        <div class="wtu-social">
            <a ng-repeat="s in socials" href="{{s.link}}">
                <img src="{{s.icon.url}}" />
            </a>
        </div>
    </main>

</div>
