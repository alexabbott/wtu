app.component('sidenav', {
    templateUrl: '/components/sidenav/sidenav.tpl',
    controller: ['$scope', function($scope) {

        var ctrl = this;
    
        $scope.test = 'this is only a test';

    }]
});