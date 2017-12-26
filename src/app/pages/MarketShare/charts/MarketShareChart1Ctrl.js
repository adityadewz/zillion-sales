/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.MarketShare')
        .controller('MarketShareChart1Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", MarketShareChart1Ctrl]);

    /** @ngInject */
    function MarketShareChart1Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")


        var layoutColors = baConfig.colors;
        console.log(layoutColors)
        $scope.data = {
            a: [{
                month: 'Jan-11',
                Target: 1,
                color: layoutColors.primary
            }, {
                month: 'Feb-11',
                Target: 5,
                color: layoutColors.primary
            }, {
                month: 'Mar-11',
                Target: 11,
                color: layoutColors.primary
            }, {
                month: '5pr-11',
                Target: 9,
                color: layoutColors.primary
            }, {
                month: 'May-11',
                Target: 4,
                color: layoutColors.primary
            }, {
                month: 'Jun-11',
                Target: 7,
                color: layoutColors.primary
            }, {
                month: 'July-11',
                Target: 18,
                color: layoutColors.primary
            }, {
                month: 'Aug-11',
                Target: 7,
                color: layoutColors.primary
            }, {
                month: 'Sep-11',
                Target: 4,
                color: layoutColors.primary
            }, {
                month: 'Oct-11',
                Target: 23,
                color: layoutColors.primary
            }, {
                month: 'Nov-11',
                Target: 25,
                color: layoutColors.primary
            }, {
                month: 'Dec-11',
                Target: 21,
                color: layoutColors.primary
            }],
            b: [{
                month: 'Jan-11',
                Target: 4,
                color: layoutColors.primary
            }, {
                month: 'Feb-11',
                Target: 15,
                color: layoutColors.primary
            }, {
                month: 'Mar-11',
                Target: 11,
                color: layoutColors.primary
            }, {
                month: 'Apr-11',
                Target: 19,
                color: layoutColors.primary
            }, {
                month: 'May-11',
                Target: 4,
                color: layoutColors.primary
            }, {
                month: 'Jun-11',
                Target: 56,
                color: layoutColors.primary
            }, {
                month: 'July-11',
                Target: 18,
                color: layoutColors.primary
            }, {
                month: 'Aug-11',
                Target: 19,
                color: layoutColors.primary
            }, {
                month: 'Sep-11',
                Target: 4,
                color: layoutColors.primary
            }, {
                month: 'Oct-11',
                Target: 41,
                color: layoutColors.primary
            }, {
                month: 'Nov-11',
                Target: 25,
                color: layoutColors.primary
            }, {
                month: 'Dec-11',
                Target: 26,
                color: layoutColors.primary
            }]
        }

        $scope.changeByproduct = function(type) {
            console.log(type)
            var newData = $scope.data[type]
            barChart.dataProvider = newData
            barChart.validateData();
        }

        // var id = $element[0].getAttribute('id');

        var id="MarketShareCHart1"
        var barChart = AmCharts.makeChart(id, {
            type: 'serial',
            theme: 'blur',
            color: layoutColors.defaultText,
            dataProvider: $scope.data["a"],
            valueAxes: [{
                axisAlpha: 0,
                position: 'left',
                title: '',
                gridAlpha: 0.5,
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false,
                axisColor:"#fff"
            }],
            startDuration: 1,
            graphs: [{
                balloonText: '<b>[[category]]: [[value]]</b>',
                fillColorsField: 'color',
                fillAlphas: 0.7,
                lineAlpha: 0.2,
                type: 'column',
                valueField: 'Target'
            }],
            chartCursor: {
                categoryBalloonEnabled: false,
                cursorAlpha: 0,
                zoomable: false
            },
            categoryField: 'month',
            categoryAxis: {
                gridPosition: 'start',
                labelRotation: 45,
                gridAlpha: 0.5,
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false,
                axisColor:"#fff"
            },
            export: {
                enabled: true
            },
            creditsPosition: 'top-right',
            pathToImages: layoutPaths.images.amChart
        });
    }
})();