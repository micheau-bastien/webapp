angular.module('webapp').controller('SessionCardCtrl', SessionCardCtrl)
SessionCardCtrl.$inject = ['ConferencesService']

/**
 * @ngdoc controller
 * @name webapp.controller:SessionCardCtrl
 * @requires ConferencesService
 * @description In charge of the sessionCard in sessionSearch view.
 */

function SessionCardCtrl(ConferencesService) {
  var vm = this
  /**
   * @ngdoc property
   * @name session
   * @propertyOf webapp.controller:SessionCardCtrl
   * @description The session represented by the card.
   */
  vm.session = vm.session
  /**
   * @ngdoc property
   * @name sessionActivated
   * @propertyOf webapp.controller:SessionCardCtrl
   * @description Tells whether the card is displaying all the conférences of the session or not. Switch everytime you click on the title of the card.
   */
  vm.sessionActivated = false
  /**
   * @ngdoc property
   * @name conferences
   * @propertyOf webapp.controller:SessionCardCtrl
   * @description List of all the conferences of this session.
   */
  vm.conferences = []

  if(typeof vm.session.conferences !== 'undefined' ){
    for (var i = 0; i < vm.session.conferences.length; i++) {
        vm.conferences.push(ConferencesService.getConferenceById(vm.session.conferences[i]))
    }
  }

  /**
   * @ngdoc method
   * @name selectSession
   * @methodOf webapp.controller:SessionSearchCtrl
   * @description Switch the sessionActivated property when the card's title is clicked.
   */
  vm.selectSession = function(session) {
    vm.sessionActivated = !vm.sessionActivated
  }
}
