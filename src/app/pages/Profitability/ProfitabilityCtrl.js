/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {

    angular.module('BlurAdmin.pages.Profitability')
        .controller('ProfitabilityCtrl', ["$scope", "baConfig", "$element", "layoutPaths", ProfitabilityCtrl]);

    /** @ngInject */
    function ProfitabilityCtrl($scope, baConfig, $element, layoutPaths) {
        console.log("m here")


        $scope.SalesVolume = [{
            tc: 32264,
            tr: 30000,
            pr: 2264,
            month: "Jan-11"
        }, {
            tc: 32264,
            tr: 30000,
            pr: 2264,
            month: "Feb-11"
        }, {
            tc: 32264,
            tr: 30000,
            pr: 2264,
            month: "Mar-11"
        }, {
            tc: 32264,
            tr: 30000,
            pr: 2264,
            month: "Apr-11"
        }, {
            tc: 32264,
            tr: 30000,
            pr: 2264,
            month: "May-11"
        }, {
            tc: 32264,
            tr: 30000,
            pr: 2264,
            month: "June-11"
        }, {
            tc: 32264,
            tr: 30000,
            pr: 2264,
            month: "Jul-11"
        }, {
            tc: 32264,
            tr: 30000,
            pr: 2264,
            month: "Aug-11"
        }, {
            tc: 32264,
            tr: 30000,
            pr: 2264,
            month: "Sep-11"
        }, {
            tc: 32264,
            tr: 30000,
            pr: 2264,
            month: "Oct-11"
        }, {
            tc: 32264,
            tr: 30000,
            pr: 2264,
            month: "Nov-11"
        }, {
            tc: 32264,
            tr: 30000,
            pr: 2264,
            month: "Dec-11"
        }]

    }
})();