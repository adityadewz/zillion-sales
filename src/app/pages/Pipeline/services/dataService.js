(function(app) {

    app.factory("dataService", [dataService])

    function dataService() {
        var allLeads = [];
        var allOpportunity=[]
        return {
            allLeads: allLeads,
            getLeads: getLeads,
            addToLeads: addToLeads,
            allOpportunity:allOpportunity,
            addToOpportunity:addToOpportunity,
            getOpportunities:getOpportunities
        }

        function getLeads() {
            return allLeads;
        }

        function addToLeads(info) {
            allLeads.push(info);
        }

        function addToOpportunity(info)
        {
            allOpportunity.push(info)
        }

        function getOpportunities()
        {
            return allOpportunity
        }

    }

}(angular.module("BlurAdmin.pages.PipeLine")));