let Portfolio = {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', '$routeParams', ($scope, WordpressData, $routeParams) => {

        $scope.test = 'portfolio testing';

        WordpressData.renderPortfolio((data) => {
            const keys = {}
            data.data.forEach((c,i,a) => {
                let next = a[i+1];
                let prev = a[i-1];
                c.next = next ? '/' + next.slug : null;
                c.prev = prev ? '/' + prev.slug : null;
                keys[c.slug] = c;
            });

            $scope.portfolio = keys;

            $scope.current = $scope.portfolio[$routeParams.slug];
            $scope.bgStyle = {
                backgroundImage: `url(${$scope.current.acf.bg_img})`
            }
        })

    }]
};

export default Portfolio;
