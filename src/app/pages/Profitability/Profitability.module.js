(function () {
  'use strict';

  angular.module('BlurAdmin.pages.Profitability', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('Profitability', {
          url: '/Profitability',
          templateUrl: 'app/pages/Profitability/Profitability.html',
          title: 'Profitability',
          constroller:"ProfitabilityCtrl",
          sidebarMeta: {
            icon: 'ion-arrow-graph-up-right',
            order: 100,
          },
        });
  }

})();