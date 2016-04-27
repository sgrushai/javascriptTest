myApp.directives.directive('button2', [function () {
    return {

        link: function ($scope, elem, attrs) {
            console.log($scope);
            console.log(elem);
            console.log(attrs.color);
        },
        scope:{
            color:'@'
        },
        template: '{{color}}'
    }
}]);