(function(app) {

    app.controller("leadsCtrl", ["$scope", "dataService", "toastr", leadsCtrl])

    function leadsCtrl($scope, dataService, toastr) {
        $scope.isDisabled = true;
        $scope.opportunity = {};
        $scope.data = dataService.getLeads();

        $scope.open = function() {
            $scope.opened = true;
        };
        $scope.isSelected = false;
        $scope.opened = false;
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.options = {
            showWeeks: false
        };
        $scope.addToOpportunity = function(info) {
            dataService.addToOpportunity(info);
            toastr.success("Converted to opportunity")
        }

        $scope.copyToOpportunity = function(item) {
            $scope.secret = item.name + item.number + item.keyNotes
            $scope.isSelected = true;
            $scope.lead = {
                company: item.company,
                name: item.name,
                accType: item.accType,
                email: item.email,
                title: item.title,
                address: item.address,
                keyNotes: item.keyNotes
            }
            $scope.isDisabled = false;
        }

    }

}(angular.module("BlurAdmin.pages.PipeLine")));