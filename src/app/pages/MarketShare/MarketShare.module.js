(function () {
  'use strict';

  angular.module('BlurAdmin.pages.MarketShare', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('MarketShare', {
          url: '/MarketShare',
          templateUrl: 'app/pages/MarketShare/MarketShare.html',
          controller:"MarketShareCtrl",
          title: 'Market Share',
          sidebarMeta: {
            icon: 'ion-pie-graph',
            order: 100,
          },
        });
  }

})();