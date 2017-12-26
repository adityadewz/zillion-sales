(function () {
  'use strict';

  angular.module('BlurAdmin.pages.YTDScorecard', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('YTDScorecard', {
          url: '/YTDScorecard',
          templateUrl: 'app/pages/YTDScorecard/YTDScorecard.html',
          controller:"YTDScorecardCtrl",
          title: 'YTD Scorecard',
          sidebarMeta: {
            icon: 'ion-university',
            order: 100,
          },
        });
  }

})();