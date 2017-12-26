/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('chart3Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", chart3Ctrl]);

    /** @ngInject */
    function chart3Ctrl($scope, baConfig, $element, layoutPaths) {

        var layoutColors = baConfig.colors;
        $scope.viewByChart3 = "chart"

        // var id = $element[0].getAttribute('id');
        $scope.viewBy = "chart";
        var id = "clusteredBarChart";

        $scope.data = [{
            "segment": "A",
            "p-quarter": 23.5,
            "c-quarter": 18.1
        }, {
            "segment": "B",
            "p-quarter": 26.2,
            "c-quarter": 22.8
        }, {
            "segment": "C",
            "p-quarter": 30.1,
            "c-quarter": 23.9
        }]

        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "categoryField": "segment",
            "rotate": false,
            "startDuration": 1,
            "categoryAxis": {
                "gridPosition": "start",
                "position": "left",
                "gridColor": "#fff",
                "color": "#fff",
            },
            "trendLines": [],
            "graphs": [{
                "balloonText": "Previous Quarter:[[value]]",
                "fillAlphas": 0.8,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": "Previous Quarter",
                "type": "column",
                "valueField": "p-quarter"
            }, {
                "balloonText": "Current Quarter:[[value]]",
                "fillAlphas": 0.8,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": "Current Quarter",
                "type": "column",
                "valueField": "c-quarter"
            }],
            "guides": [],
            "valueAxes": [{
                "id": "ValueAxis-1",
                "position": "bottom",
                "axisAlpha": 0,
                "gridColor": "#fff",
                "color": "#fff",
            }],
            "Guide": {
                "fillColor": "#fff"
            },
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": $scope.data,
            "export": {
                "enabled": true
            }

        });
    }
})();