/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('chart2Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", chart2Ctrl]);

    /** @ngInject */
    function chart2Ctrl($scope, baConfig, $element, layoutPaths) {

        $scope.viewByChart2 = "chart"

        var layoutColors = baConfig.colors;
        var id = "barChart2";
        $scope.data = {
            2017: {
                all: [

                    {
                        month: 'January',
                        Target: 4,
                        color: "#00D3C2"
                    }, {
                        month: 'February',
                        Target: 3,
                        color: "#00D3C2"

                    }, {
                        month: 'March',
                        Target: 8,
                        color: "#00D3C2"
                    }, {
                        month: 'April',
                        Target: 4,
                        color: "#00D3C2"
                    }, {
                        month: 'May',
                        Target: 2,
                        color: "#00D3C2"
                    }, {
                        month: 'June',
                        Target: 7,
                        color: "#00D3C2"
                    }, {
                        month: 'July',
                        Target: 3,
                        color: "#00D3C2"
                    }, {
                        month: 'August',
                        Target: 6,
                        color: "#00D3C2"
                    }, {
                        month: 'September',
                        Target: 4,
                        color: "#00D3C2"
                    }, {
                        month: 'October',
                        Target: 2,
                        color: "#00D3C2"
                    }, {
                        month: 'November',
                        Target: 9,
                        color: "#00D3C2"
                    }, {
                        month: 'December',
                        Target: 4,
                        color: "#00D3C2"
                    }
                ],
                A: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 3,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 3,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                B: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                C: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 2,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 15,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                D: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 7,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ]
            },
            2016: {
                all: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 3,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                A: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 3,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                B: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 6,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                C: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                D: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 5,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 2,
                        color: layoutColors.success
                    }
                ]
            },
            2015: {
                all: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 3,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                A: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 3,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                B: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 6,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                C: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                D: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ]
            },
            2014: {
                all: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 3,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: '5',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                A: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 3,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 8,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                B: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                C: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                D: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ]
            },
            2013: {
                all: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 3,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                A: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 3,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                B: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                C: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ],
                D: [

                    {
                        month: 'January',
                        Target: 4,
                        color: layoutColors.primary
                    }, {
                        month: 'February',
                        Target: 6,
                        color: layoutColors.danger

                    }, {
                        month: 'March',
                        Target: 8,
                        color: layoutColors.info
                    }, {
                        month: 'April',
                        Target: 5,
                        color: layoutColors.success
                    }, {
                        month: 'May',
                        Target: 2,
                        color: layoutColors.success
                    }, {
                        month: 'June',
                        Target: 7,
                        color: layoutColors.success
                    }, {
                        month: 'July',
                        Target: 6,
                        color: layoutColors.success
                    }, {
                        month: 'August',
                        Target: 3,
                        color: layoutColors.success
                    }, {
                        month: 'September',
                        Target: 4,
                        color: layoutColors.success
                    }, {
                        month: 'October',
                        Target: 1,
                        color: layoutColors.success
                    }, {
                        month: 'November',
                        Target: 9,
                        color: layoutColors.success
                    }, {
                        month: 'December',
                        Target: 10,
                        color: layoutColors.success
                    }
                ]
            }
        }

        $scope.mySegment="all";
        $scope.myYear="2017";

        var myData = $scope.data["2017"]["all"];


        $scope.changeBySegment = function(segment) {

            $scope.mySegment = segment;
            barChart.dataProvider = $scope.data[$scope.myYear][$scope.mySegment];
            barChart.validateData();
        }

        $scope.changeByYear = function(year) {

            $scope.myYear = year;

            barChart.dataProvider = $scope.data[$scope.myYear][$scope.mySegment];
            barChart.validateData();
        }


        var barChart = AmCharts.makeChart(id, {
            type: 'serial',
            theme: 'blur',
            color: layoutColors.defaultText,
            dataProvider: myData,
            valueAxes: [{
                axisAlpha: 0,
                position: 'left',
                title: 'Revenue (in Lacs)',
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