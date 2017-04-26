sureifyFrontendApp.directive('paginationScroll', function() {
    return {


        restrict: 'A',
        link: function(scope, elm, attr) {
            var raw = elm[0];

            elm.bind('scroll', function() {
                if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                    scope.$apply(attr.paginationScroll);
                }
            });
        }
    };
});