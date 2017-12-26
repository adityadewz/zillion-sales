/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {

    angular.module('BlurAdmin.pages.Profitability')
        .controller('ProfitabilityChart1Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", ProfitabilityChart1Ctrl]);

    /** @ngInject */
    function ProfitabilityChart1Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")

        $scope.viewByChart1="chart"
        $scope.showCountryBy="us"
        $scope.data = {
            us: [{
                "cateogory": "Acquisition cost",
                "visits": 300
            }, {
                "cateogory": "Gross Margin",
                "visits": 0
            }, {
                "cateogory": "Customer Profit",
                "visits": -150
            }, {
                "cateogory": "Average Profit per Customer",
                "visits": -50
            }, {
                "cateogory": "Overall Average Profit per Customer",
                "visits": -75
            }],
            uk: [{
                "cateogory": "Acquisition cost",
                "visits": 200
            }, {
                "cateogory": "Gross Margin",
                "visits": 10
            }, {
                "cateogory": "Customer Profit",
                "visits": -250
            }, {
                "cateogory": "Average Profit per Customer",
                "visits": -20
            }, {
                "cateogory": "Overall Average Profit per Customer",
                "visits": -75
            }],
            france: [{
                "cateogory": "Acquisition cost",
                "visits": 300
            }, {
                "cateogory": "Gross Margin",
                "visits": 0
            }, {
                "cateogory": "Customer Profit",
                "visits": -350
            }, {
                "cateogory": "Average Profit per Customer",
                "visits": -70
            }, {
                "cateogory": "Overall Average Profit per Customer",
                "visits": -25
            }]
        }

        $scope.showByCountry = function(country) {
            var newData = $scope.data[country];
            barChart.dataProvider = newData
            barChart.validateData();
        }

        var layoutColors = baConfig.colors;
        console.log(layoutColors)
            // var id = $element[0].getAttribute('id');
        var id = "ProfitabilityChart1";
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "dataProvider": $scope.data['us'],
            "valueAxes": [{
                "gridColor": "#FFFFFF",
                "gridAlpha": 0.2,
                "dashLength": 0,
                "color": "#fff",
                "gridColor": "#FFF"
            }],
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [{
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "fillAlphas": 0.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "visits"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "cateogory",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickPosition": "start",
                "tickLength": 20,
                "color": "#fff",
                "gridColor": "#FFF"
            },
            "export": {
                "enabled": true
            }

        });
    }
})();