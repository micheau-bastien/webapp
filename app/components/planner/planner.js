/**
 * @ngdoc directive
 * @name webapp.directive:wa-planner
 * @restrict E
 * @description Planner component.
 */
angular.module('webapp').component('waPlanner', {
    controller: 'PlannerCtrl',
    templateUrl: ['$element', function($element) {
        angular.element($element).addClass('layout-column')
        return 'planner.html'
    }],
    $routeConfig: [
      {path: '/', name:'PlannerCalendar', component: 'waPlannerCalendar', useAsDefault: true},
      {path: '/session/:id', name:'PlannerSession', component: 'waPlannerSession'},
      {path: '/conference/:id', name:'PlannerConference', component: 'waPlannerConference'}
    ]
})
