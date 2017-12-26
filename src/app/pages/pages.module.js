/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    var dependencies;
    var depManagement=[
            'ui.router',
            'BlurAdmin.pages.dashboard',
            'BlurAdmin.pages.YOYTrends',
            'BlurAdmin.pages.CVPAnalysis',
            'BlurAdmin.pages.YTDScorecard',
            'BlurAdmin.pages.MarketShare',
            'BlurAdmin.pages.Profitability',
            // 'BlurAdmin.pages.MarketSegmentation',
            'BlurAdmin.pages.salesApprovals'
        ]

        var depSales=[
            'ui.router',
            'BlurAdmin.pages.dashboard',
            'BlurAdmin.pages.PipeLine'
        ]

    if(sessionStorage.viewAs==="sales")
    {
        dependencies=depSales
    }

    else if(sessionStorage.viewAs==="management")
    {
        dependencies=depManagement
    }

    else
    {
        dependencies=depManagement
    }

    angular.module('BlurAdmin.pages', dependencies)
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
        $urlRouterProvider.otherwise('/dashboard');

        // baSidebarServiceProvider.addStaticItem({
        //   title: 'Pages',
        //   icon: 'ion-document',
        //   subMenu: [{
        //     title: 'Sign In',
        //     fixedHref: 'auth.html',
        //     blank: true
        //   }, {
        //     title: 'Sign Up',
        //     fixedHref: 'reg.html',
        //     blank: true
        //   }, {
        //     title: 'User Profile',
        //     stateRef: 'profile'
        //   }, {
        //     title: '404 Page',
        //     fixedHref: '404.html',
        //     blank: true
        //   }]
        // });
        // baSidebarServiceProvider.addStaticItem({
        //   title: 'Menu Level 1',
        //   icon: 'ion-ios-more',
        //   subMenu: [{
        //     title: 'Menu Level 1.1',
        //     disabled: true
        //   }, {
        //     title: 'Menu Level 1.2',
        //     subMenu: [{
        //       title: 'Menu Level 1.2.1',
        //       disabled: true
        //     }]
        //   }]
        // });
    }

})();