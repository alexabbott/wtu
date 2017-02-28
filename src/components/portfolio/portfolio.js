let Portfolio = {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', '$routeParams', '$sce', ($scope, WordpressData, $routeParams, $sce) => {

        const bindPortfolio = (data) => {
            console.log(data)
            let keys = Object.keys(data);
            $scope.portfolio = data;
            $scope.current = $scope.portfolio[$routeParams.slug];
            $scope.first = keys[0];
            $scope.last = keys[keys.length - 1];
            $scope.bgStyle = {
                backgroundImage: `url(${$scope.current.acf.bg_img})`
            }
            if ($scope.current.acf.full_screen_banner_image) {
                $scope.bannerImg = {
                    backgroundImage: `url(${$scope.current.acf.full_screen_banner_image.url})`
                }
                $scope.bannerImgSrc = $scope.current.acf.full_screen_banner_image.url
            }
            if ($scope.current.acf.subtitle) {
                $scope.subtitle = $scope.current.acf.subtitle
            }
            $scope.content = $sce.trustAsHtml($scope.current.acf.content)
        }

        if (!WordpressData.portfolio) {
            WordpressData.fetchPortfolio(bindPortfolio);
        }
        else {
            bindPortfolio(WordpressData.portfolio);
        }

    }]
};

export default Portfolio;
