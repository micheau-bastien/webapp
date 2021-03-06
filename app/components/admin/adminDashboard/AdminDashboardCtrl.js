angular.module('webapp').controller('AdminDashboardCtrl', AdminDashboardCtrl)
AdminDashboardCtrl.$inject = ['EventService', 'NotificationsService']

/**
 * @ngdoc controller
 * @name webapp.controller:AdminDashboardCtrl
 * @description In charge of the admin dashboard view.
 */
function AdminDashboardCtrl(EventService, NotificationsService) {
    var vm = this

    vm.titleName = "Admin Dashboard"

    vm.event = EventService.Model

    vm.timeslot = {
        start_time: null,
        end_time: null
    }

    vm.$routerOnActivate = function(next, prev) {
      vm.event.reset()
        vm.event.start_date = new Date(EventService.event.start_date)
        vm.event.end_date = new Date(EventService.event.end_date)
        if (EventService.event.timeslots) {
            EventService.event.timeslots.forEach(function(item) {
                vm.event.timeslots.push({
                    start_time: new Date(item.start_time),
                    end_time: new Date(item.end_time)
                })
            })
        }
    }

    vm.addTimeslot = function() {
        var timeslot = angular.copy(vm.timeslot)
        vm.event.timeslots.push(timeslot)
        vm.timeslot.start_time = null
        vm.timeslot.end_time = null
    }

    vm.removeTimeslot = function(timeslot) {
        vm.event.timeslots.splice(vm.event.timeslots.indexOf(timeslot), 1)
    }

    vm.saveEvent = function() {
        EventService.save(vm.event).then(function() {
            NotificationsService.success('The event has been well updated!')
        }).catch(function(error) {
            NotificationsService.error('An error occurred... Please try again.')
        })
    }

    vm.goToSessions = function() {
        vm.$router.navigate(['AdminSessions'])
    }

    vm.goToPlaces = function() {
        vm.$router.navigate(['AdminPlaces'])
    }
}
