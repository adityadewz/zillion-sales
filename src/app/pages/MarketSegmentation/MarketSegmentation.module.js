(function () {
  'use strict';

  angular.module('BlurAdmin.pages.MarketSegmentation', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('MarketSegmentation', {
          url: '/MarketSegmentation',
          templateUrl: 'app/pages/MarketSegmentation/MarketSegmentation.html',
          title: 'Market Segmentation',
          sidebarMeta: {
            icon: 'ion-android-apps',
            order: 100,
          },
        });
  }

})();