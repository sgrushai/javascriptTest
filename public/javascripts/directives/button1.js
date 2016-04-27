myApp.directives.directive('button1', [function () {
    return {

        link: function ($scope, elem, attrs) {

            elem.bind('click', function(){alertHandler()})
        },
        scope:{
            color:'=',
            onClick:'='
        },
        template: '{{color}}'
    }
}]);