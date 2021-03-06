angular.module('webapp').config(Theme)
Theme.$inject = ['$mdThemingProvider']

/**
 * @ngdoc object
 * @name webapp.config:Theme
 * @requires $mdThemingProvider
 * @description
 * To do...
 */
function Theme($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('blue')
        .warnPalette('red')

    $mdThemingProvider.theme("error-toast")
    $mdThemingProvider.theme("success-toast")
    $mdThemingProvider.theme("info-toast")
    $mdThemingProvider.theme("warn-toast")
}
