/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.YTDScorecard')
        .controller('YTDChart1Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", YTDChart1Ctrl]);

    /** @ngInject */
    function YTDChart1Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")

        $scope.distType = "volume";
        // $scope.data = [

        //     {
        //         type: 'Retail',
        //         value: 14
        //     }, {
        //         type: 'Hospital',
        //         value: 16
        //     }, {
        //         type: 'Retail',
        //         value: 70
        //     }

        // ]

        $scope.data = {
            revenue: [

                {
                    type: 'Retail',
                    value: 26
                }, {
                    type: 'Healthcare',
                    value: 14
                }, {
                    type: 'Manufacturing',
                    value: 60
                }

            ],
            volume: [

                {
                    type: 'Retail',
                    value: 14
                }, {
                    type: 'Healthcare',
                    value: 16
                }, {
                    type: 'Manufacturing',
                    value: 70
                }

            ]
        }


        $scope.changeDistType = function(type) {


            barChart.dataProvider = $scope.data[type];
            barChart.validateData();


        }

        var layoutColors = baConfig.colors;
        console.log(layoutColors)
            // var id = $element[0].getAttribute('id');
        var id = "YOYCHart1"
        var barChart = AmCharts.makeChart(id, {
            type: 'pie',
            startDuration: 0,
            theme: 'blur',
            addClassNames: true,
            color: layoutColors.defaultText,
            labelTickColor: layoutColors.borderDark,
            legend: {
                position: 'right',
                marginRight: 100,
                autoMargins: false,
            },
            innerRadius: '40%',
            defs: {
                filter: [{
                    id: 'shadow',
                    width: '200%',
                    height: '200%',
                    feOffset: {
                        result: 'offOut',
                        in: 'SourceAlpha',
                        dx: 0,
                        dy: 0
                    },
                    feGaussianBlur: {
                        result: 'blurOut',
                        in: 'offOut',
                        stdDeviation: 5
                    },
                    feBlend: { in: 'SourceGraphic',
                        in2: 'blurOut',
                        mode: 'normal'
                    }
                }]
            },
            dataProvider: $scope.data["volume"],
            valueField: 'value',
            titleField: 'type',
            export: {
                enabled: true
            },
            creditsPosition: 'bottom-left',

            autoMargins: false,
            marginTop: 10,
            alpha: 0.8,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            pullOutRadius: 0,
            pathToImages: layoutPaths.images.amChart,
            responsive: {
                enabled: true,
                rules: [
                    // at 900px wide, we hide legend
                    {
                        maxWidth: 900,
                        overrides: {
                            legend: {
                                enabled: false
                            }
                        }
                    },

                    // at 200 px we hide value axis labels altogether
                    {
                        maxWidth: 200,
                        overrides: {
                            valueAxes: {
                                labelsEnabled: false
                            },
                            marginTop: 30,
                            marginBottom: 30,
                            marginLeft: 30,
                            marginRight: 30
                        }
                    }
                ]
            }
        });
    }
})();