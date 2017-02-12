app.component('portfolio', {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', '$http', function($scope, WordpressData, $http) {

        var ctrl = this;

        $scope.test = 'portfolio testing';

        setTimeout(() => {
          $scope.bish = 'bish';
        }, 1000);

        WordpressData.listPortfolio((response) => {
            $scope.data = response.data.acf;
            console.log('databebedaa', $scope.data);
            console.log($scope.bloobs)
        });

        // const randoBg = async () => {
        //   try {
        //     let request = await fetch('http://thecatapi.com/api/images/get?format=src&type=gif');
        //     $scope.bg = request.url;
        //     console.log("scope bg", $scope.bg);
        //     return request.url;
        //   }
        //   catch (error) {
        //     console.log("fawk", error);
        //   }
        // };

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

        getBg('http://thecatapi.com/api/images/get?format=src&type=gif')

    }]
});
