let Portfolio = {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', '$routeParams', ($scope, WordpressData, $routeParams) => {

        $scope.test = 'portfolio testing';

        WordpressData.listPortfolio((data) => {
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


        // State:
        // WordpressData should pass in the index/key of
        // the current portfolio client, along with the key
        // of the previous + next clients for the nav buttons.
        // Question: will we use anchor tags for those buttons
        // or is there an ng-element that can update state /
        // alert $routeProvider to rerender component without
        // refresh (similar to <Link/> in react)? Something like:

        // ~ portfolio.js ~
        // ctrl.shiftClient = (title) => {
        //   $routeProvider.render('/%s', title);
        // }

        // ~ portfolio.tpl ~
        // <el title="zayn" ng-click="shiftClient(nextClient.title)">next</el>
    }]
};

export default Portfolio;
