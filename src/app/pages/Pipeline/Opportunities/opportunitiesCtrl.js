(function(app) {

    app.controller("opportunitiesCtrl", ["$scope", "dataService", "toastr", opportunitiesCtrl])

    function opportunitiesCtrl($scope, dataService, toastr) {
        // $(".al-title").prepend("Human Resource ");

        $scope.data = dataService.getOpportunities();

        console.log($scope.data)
        $scope.isDisabled = false

        $scope.createInvoice = function(item, isDisabled) {
            $scope.secret = item.name + item.number + item.keyNotes

            if (isDisabled) {
                toastr.warning("Not yet approved")
            } else {
                toastr.success("Creating invoice....")
            }
        }

    }

}(angular.module("BlurAdmin.pages.PipeLine")));