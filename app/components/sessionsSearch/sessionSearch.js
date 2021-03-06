/**
 * @ngdoc directive
 * @name webapp.directive:wa-session-serch
 * @restrict E
 * @description Discover section of the website. This component is useful to search conferences sorted by topics.
 */
angular.module('webapp').component('waSessionSearch', {
  controller: 'SessionSearchCtrl',
  templateUrl: ['$element', function($element) {
      angular.element($element).addClass('layout-column')
      return 'sessionSearch.html'
  }],
  bindings: {
      $router: '<'
  },
  $canActivate: ['ConferencesService', 'SessionsService', '$rootRouter', function(ConferencesService, SessionsService, $rootRouter) {
    return SessionsService.loadArray()
      .then(function() {
        return ConferencesService.loadArray()
      })
      .then(function() {
        return true
      })
      .catch(function(error) {
        $rootRouter.navigate(['SessionSearch'])
        return false
      })
  }]
})
