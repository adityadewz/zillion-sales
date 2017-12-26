/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('chart4Ctrl', ["$scope", "baConfig", "$element", "layoutPaths",chart4Ctrl]);

  /** @ngInject */
  function chart4Ctrl($scope, baConfig, $element, layoutPaths) {

    var layoutColors = baConfig.colors;
    // var id = $element[0].getAttribute('id');

    $scope.viewByChart4="chart";
    $scope.data=[
        {
          country: 'A',
          Target: 4,
          color: layoutColors.primary
        },
        {
          country: 'B',
          Target: 6,
          color: layoutColors.danger

        },
        {
          country: 'C',
          Target: 8,
          color: layoutColors.info
        },
        {
          country: 'D',
          Target: 3,
          color: layoutColors.success
        }
      ]

    var id="barChart3"
    var barChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      dataProvider: $scope.data,
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          title: 'Target (in Lacs)',
          gridAlpha: 0.5,
      gridColor: "#fff",
        color:"#fff"          }
      ],
      startDuration: 1,
      graphs: [
        {
          balloonText: '<b>[[category]]: [[value]]</b>',
          fillColorsField: 'color',
          fillAlphas: 0.7,
          lineAlpha: 0.2,
          type: 'column',
          valueField: 'Target'
        }
      ],
      chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
      },
      categoryField: 'country',
      categoryAxis: {
        gridPosition: 'start',
        labelRotation: 45,
        gridAlpha: 0.5,
        gridColor: "#fff",
        color:"#fff"      },
      export: {
        enabled: true
      },
      creditsPosition: 'top-right',
      pathToImages: layoutPaths.images.amChart
    });
  }
})();
