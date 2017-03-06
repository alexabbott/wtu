let Portfolio = {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', '$routeParams', '$sce', '$location', '$timeout', ($scope, WordpressData, $routeParams, $sce, $location, $timeout) => {

        $scope.transitioning = true;
        $timeout(() => {
            $scope.transitioning = false;
        }, 666)

        $scope.trustBlob = (blob) => $sce.trustAsHtml(blob)
        $scope.transition = (to) => {
            $scope.transitioning = true;
            $timeout(() => {
                $location.path(to);
                $scope.transitioning = false;
            }, 666);
        }

        const bindPortfolio = (data) => {
            let keys = Object.keys(data);
            $scope.portfolio = data;
            $scope.current = $scope.portfolio[$routeParams.slug];
            $scope.first = keys[0];
            $scope.last = keys[keys.length - 1];
            $scope.bgStyle = {
                backgroundImage: `url(${$scope.current.acf.bg_img})`
            }

            $scope.content = $scope.current.acf.content;
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
