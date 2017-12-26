(function(app) {

    app.controller("contactsCtrl", ["$scope", "dataService","toastr" ,contactsCtrl])

    function contactsCtrl($scope, dataService,toastr) {

        console.log("akdjfbjh")

        $scope.addToLead = function(info,isValid) {
            if(isValid)
            {
            info.id=Math.floor(Math.random()*1000+12312)
            dataService.addToLeads(info);
            var leads = dataService.getLeads()
            console.log(leads)
            toastr.success("Converted to lead")    
            }
            else
            {
                toastr.error("Please fill all the details correctly.")
            }
            

        }

    }

}(angular.module("BlurAdmin.pages.PipeLine")));