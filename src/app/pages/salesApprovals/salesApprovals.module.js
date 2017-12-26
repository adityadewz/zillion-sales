(function () {
  'use strict';

  angular.module('BlurAdmin.pages.salesApprovals', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('salesApprovals', {
          url: '/salesApprovals',
          templateUrl: 'app/pages/salesApprovals/salesApprovals.html',
          title: 'Sales Approvals',
          controller:"salesApprovalCtrl",
          sidebarMeta: {
            icon: 'ion-android-apps',
            order: 100,
          },
        });
  }

})();