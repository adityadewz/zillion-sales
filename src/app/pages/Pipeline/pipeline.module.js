(function() {
    'use strict';

    angular.module('BlurAdmin.pages.PipeLine', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('PipeLine', {
                url: '/PipeLine',
                title: 'PipeLine',
                template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                sidebarMeta: {
                    icon: 'ion-android-apps',
                    order: 100,
                },
            })
            .state('PipeLine.contacts', {
                url: '/contacts',
                title: 'Contacts',
                controller: "contactsCtrl",
                templateUrl: 'app/pages/Pipeline/Contacts/Contacts.html',
                sidebarMeta: {
                    icon: 'ion-android-apps',
                    order: 100,
                },
            })
            .state('PipeLine.leads', {
                url: '/leads',
                title: 'Leads',
                controller: "leadsCtrl",
                templateUrl: 'app/pages/Pipeline/Leads/leads.html',
                sidebarMeta: {
                    icon: 'ion-android-apps',
                    order: 100,
                },
            })
            .state('PipeLine.opportunities', {
                url: '/opportunities',
                title: 'Opportunities',
                controller: "opportunitiesCtrl",
                templateUrl: 'app/pages/Pipeline/Opportunities/opportunities.html',
                sidebarMeta: {
                    icon: 'ion-android-apps',
                    order: 100,
                },
            })
            .state('PipeLine.reports', {
                url: '/reports',
                title: 'Reports',
                controller: "reportsCtrl",
                templateUrl: 'app/pages/Pipeline/Reports/reports.html',
                sidebarMeta: {
                    icon: 'ion-android-apps',
                    order: 100,
                },
            });
    }

})();