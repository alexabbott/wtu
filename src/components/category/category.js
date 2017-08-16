let Category = {
    templateUrl: '/components/category/category.tpl',
    controller: ['WordpressData', '$scope', '$location', '$rootScope', (WordpressData, $scope, $location, $rootScope) => {

        const firstNav = angular.element(document.querySelector('.nav__items .nav__item:first-of-type'));
        const secondNav = angular.element(document.querySelector('.nav__items .nav__item:nth-of-type(2)'));
        const thirdNav = angular.element(document.querySelector('.nav__items .nav__item:last-of-type'));
        const aboutContainer = angular.element(document.querySelector('.about__container'));

        firstNav.removeClass('active');
        secondNav.removeClass('active');
        thirdNav.removeClass('active');

        $scope.data = { projects: [], categories: [] };

        $scope.category = {};

        if ($location.path().indexOf('internal') === -1) {
            if (!$rootScope.categories) {
                WordpressData.fetchCats().then(() => {
                    $scope.data.categories = WordpressData.categories;
                    let arr = [];
                    angular.forEach($scope.data.categories, function(value, key){
                        arr.push(value);
                    });
                    $scope.category = arr.filter((c) => {
                        return c.slug === $location.path().split('/category/')[1];
                    })[0];
                    if ($location.path().indexOf('internal') > -1) {
                        $scope.data.projects = $scope.data.projects.filter((p) => {
                            return p.acf.internal_project == true;
                        });
                        console.log('proj3', $scope.data.projects);
                    } else {
                        if ($scope.category.id && $scope.data.projects.length > 0) {
                            $scope.data.projects = $scope.data.projects.filter((p) => {
                                return p.categories.indexOf($scope.category.id) > -1;
                            });
                        }
                    }
                });
            } else {
                $scope.data.categories = $rootScope.categories;
                let arr = [];
                angular.forEach($scope.data.categories, function(value, key){
                    arr.push(value);
                });
                $scope.category = arr.filter((c) => {
                    return c.slug === $location.path().split('/category/')[1];
                })[0];
                if ($location.path().indexOf('internal') > -1) {
                    $scope.data.projects = $scope.data.projects.filter((p) => {
                        return p.acf.internal_project == true;
                    });
                    console.log('proj3', $scope.data.projects);
                } else {
                    if ($scope.category.id && $scope.data.projects.length > 0) {
                        $scope.data.projects = $scope.data.projects.filter((p) => {
                            return p.categories.indexOf($scope.category.id) > -1;
                        });
                    }
                }
            }
        } else {
            $scope.category.name = '.US PROJECTS';
        }

        if (!$rootScope.portfolio) {
            WordpressData.fetchPortfolio().then(() => {
                $scope.data.projects = WordpressData.portfolio;
                console.log('proj1', $scope.data.projects);
                let arr = [];
                angular.forEach($scope.data.projects, function(value, key){
                    arr.push(value);
                });
                $scope.data.projects = arr;
                console.log('proj2', $scope.data.projects);
                if ($location.path().indexOf('internal') > -1) {
                    $scope.data.projects = $scope.data.projects.filter((p) => {
                        return p.acf.internal_project == true;
                    });
                    console.log('proj3', $scope.data.projects);
                } else {
                    if ($scope.category.id && $scope.data.projects.length > 0) {
                        $scope.data.projects = $scope.data.projects.filter((p) => {
                            return p.categories.indexOf($scope.category.id) > -1;
                        });
                    }
                }
            });
        } else {
            $scope.data.projects = $rootScope.portfolio;
            console.log('proj1', $scope.data.projects);
            let arr = [];
            angular.forEach($scope.data.projects, function(value, key){
                arr.push(value);
            });
            $scope.data.projects = arr;
            console.log('proj2', $scope.data.projects);
            if ($location.path().indexOf('internal') > -1) {
                $scope.data.projects = $scope.data.projects.filter((p) => {
                    return p.acf.internal_project == true;
                });
                console.log('proj3', $scope.data.projects);
            } else {
                if ($scope.category.id && $scope.data.projects.length > 0) {
                    $scope.data.projects = $scope.data.projects.filter((p) => {
                        return p.categories.indexOf($scope.category.id) > -1;
                    });
                }
            }
        }
    }]
};

export default Category;
