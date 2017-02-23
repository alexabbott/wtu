let Portfolio = {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', '$routeParams', '$sce', ($scope, WordpressData, $routeParams, $sce) => {

        const bindPortfolio = (data) => {
            $scope.portfolio = data;
            $scope.current = $scope.portfolio[$routeParams.slug];
            $scope.bgStyle = {
                backgroundImage: `url(${$scope.current.acf.bg_img})`
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
