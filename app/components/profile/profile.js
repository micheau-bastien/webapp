/**
 * @ngdoc directive
 * @name webapp.directive:wa-profile
 * @restrict E
 * @description Profile component.
 */
angular.module('webapp').component('waProfile', {
    controller: 'ProfileCtrl',
    templateUrl: ['$element', function($element) {
        angular.element($element).addClass('layout-column')
        return 'profile.html'
    }],
    bindings: {
        $router: '<'
    },
    $canActivate: ['AuthService', '$rootRouter', function(AuthService, $rootRouter) {
        return AuthService.requireAuth()
        .then(function(){
          return true
        })
        .catch(function(error){
          $rootRouter.navigate(['Login'])
          return false
        })
    }]
})
