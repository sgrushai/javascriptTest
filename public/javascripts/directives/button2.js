myApp.directives.directive('button2', [function () {
    return {

        link: function ($scope, elem, attrs,style) {
//            console.log($scope);
//            console.log(elem);
//            console.log(attrs.color);
//            console.log(elem.style);
            elem.css({ "background-color": attrs.color,
                'max-width':'100px'});
        },
        scope:{
            color:'@'
        },
        template: '{{color}}'
    }
}]);