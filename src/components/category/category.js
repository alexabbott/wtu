let Category = {
    templateUrl: '/components/category/category.tpl',
    controller: ['WordpressData', '$scope', '$location', (WordpressData, $scope, $location) => {

        const firstNav = angular.element(document.querySelector('.nav__items .nav__item:first-of-type'));
        const secondNav = angular.element(document.querySelector('.nav__items .nav__item:nth-of-type(2)'));
        const thirdNav = angular.element(document.querySelector('.nav__items .nav__item:last-of-type'));
        const aboutContainer = angular.element(document.querySelector('.about__container'));

        firstNav.removeClass('active');
        secondNav.removeClass('active');
        thirdNav.removeClass('active');

        $scope.data = { projects: [], categories: [] };

        $scope.category = {};

        WordpressData.fetchCats().then(() => {
            $scope.data.categories = WordpressData.categories;
            $scope.data.categories = $.map($scope.data.categories, function(value) {
                return [value];
            });
            $scope.category = $scope.data.categories.filter((c) => {
                return c.slug === $location.path().split('/category/')[1];
            })[0];
            checkStatus();
            console.log('categories', $scope.data.categories);
        });

        WordpressData.fetchPortfolio().then(() => {
            $scope.data.projects = WordpressData.portfolio;
            $scope.data.projects = $.map($scope.data.projects, function(value) {
                return [value];
            });
            checkStatus();
            console.log('projects', $scope.data.projects);
        });

        let checkStatus = () => {
            if ($scope.category.id && $scope.data.projects.length > 0) {
                $scope.data.projects = $scope.data.projects.filter((p) => {
                    return p.categories.indexOf($scope.category.id) > -1;
                });
            }
        };

    }]
};

export default Category;
