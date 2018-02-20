var app = angular.module('mg', []);

// Lets get some transcludes goin'
function createTransclude(name, templatePath) {
    templatePath = templatePath || name;
    app.directive(name, function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: templatePath + '.html'
        };
    });
}

createTransclude('base-content', 'templates/base_content')
createTransclude('about', 'templates/about');
createTransclude('cv', 'templates/cv');
createTransclude('contact', 'templates/contact');

function getLevel(levelStr) {
    return 9001
}

app.filter('level', function() {
    return function (input) {
        return getLevel(input);
    };
});