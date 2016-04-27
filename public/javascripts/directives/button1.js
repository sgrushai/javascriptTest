myApp.directives.directive('button1', [function () {
    return {

        link: function ($scope, elem, attrs, style) {

            elem.bind('click', function(){alertHandler()});
            //elem.css(style,'{background-color:red}');
            //elem.style.backgroundColor="red";
            //var cl=attrs.color;
            console.log($scope.color);
            elem.css({ "background-color": $scope.color,
        'max-width':'100px'});
        },
        scope:{
            color:'=',
            onClick:'='
        },
        template: '{{color}}'
    }

}]);