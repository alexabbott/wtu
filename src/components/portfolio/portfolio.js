app.component('portfolio', {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', '$http', function($scope, WordpressData, $http) {

        var ctrl = this;

        $scope.test = 'portfolio testing';

        // why does this appear to work /
        // trigger rerender only 90% of the time?
        setTimeout(() => {
          $scope.bish = 'bish';
        }, 1000);

        WordpressData.listPortfolio((response) => {
            $scope.data = response.data.acf;
            console.log('databebedaa', $scope.data);
            console.log($scope.bloobs)
        });

        // in reality this will be pulled from WordpressData
        const getBg = (url) => {
          console.log("getting guy")
          $http({
            method: 'GET',
            url: url,
          })
          .then((img) => {
            $scope.bg = img.config.url;
            console.log('scope', $scope.bg);
          }, (e) => {
            console.log('fawk', e);
            $scope.bg = 'https://http.cat/404.jpg';
          });
        }

        getBg('http://thecatapi.com/api/images/get?format=src&type=gif');

        // WordpressData should pass in the index/key of
        // the current portfolio client, along with the key
        // of the previous + next clients for the nav buttons.
        // Question: will we use anchor tags for those buttons
        // or is there an ng-element that can update state /
        // alert $routeProvider to rerender component without
        // refresh (similar to <Link/> in react)?

        // content: needs to be structured like a standard
        // Wordpress post, basically a glob of HTML; this is
        // because for some clients they'll wanna have photos,
        // a description, bulleted list who knows wtf what. So
        // I think the ideal JSON would look like:
        // Data{
        //   parris: {
        //     title: "Paris Goebel",
        //     shortTitle: "Parris",
        //     bgImg: "http://wethem.us/path/to/wp-content/media-id/hashtag/awful/path",
        //     content: "<div class='arbitrary-wp-class'>stuff</div>",
        //     ...
        //   },
        //   zayn: {...},
        //   ...
        // }

        // would this^ be something that I need to specify in
        // functions.php or wherever we configure wp-json?
    }]
});
