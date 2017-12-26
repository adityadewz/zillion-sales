(function(app) {

    app.controller("salesApprovalCtrl", ["$scope", salesApprovalCtrl])

    function salesApprovalCtrl($scope) {
        // $(".al-title").prepend("Human Resource ");
        console.log("smart table")

        $scope.approval = function(item, isApproved) {
            item.approval = isApproved;
            console.log(item, isApproved)
        }

        function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


        $scope.smartTableData = [{
            id: 1,
            name: 'Mark',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'ABC Builders Private LTD.',
            CS: 12000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: "  ",
            remarks: "Good Work!",
            productLine: "New Installation",
            productName: "Product J",
            quantity: 10,
            location: "Mumbai",
            customerType: "Private"
        }, {
            id: 2,
            name: 'John',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'XYZ Contracter Private LTD.',
            CS: 20000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Nice contracts issued.",
            productLine: "Services",
            productName: "Product A",
            quantity: 12,
            location: "Gurgaon",
            customerType: "Corporate"
        }, {
            id: 3,
            name: 'Donald',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'DFG Caterers Private LTD.',
            CS: 90000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Food tasted great!",
            productLine: "New Installation",
            productName: "Product B",
            quantity: 1234,
            location: "New Delhi",
            customerType: "Government"
        }, {
            id: 4,
            name: 'Alan',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'MNO Trading Private LTD.',
            CS: 20000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Bring a better deal ",
            productLine: "Services",
            productName: "Product A",
            quantity: 13,
            location: "Mumbai",
            customerType: "Private"
        }, {
            id: 5,
            name: 'Rahul',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'ABACC Builders Private LTD.',
            CS: 30000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: "  ",
            remarks: "Good Work!",
            productLine: "Modernisation",
            productName: "Product C",
            quantity: 11,
            location: "Delhi",
            customerType: "Government"
        }, {
            id: 6,
            name: 'John',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'ABC Contracter Private LTD.',
            CS: 20000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Nice contracts issued.",
            productLine: "Services",
            productName: "Product Z",
            quantity: 3421,
            location: "Surat",
            customerType: "Corporate"
        }, {
            id: 3,
            name: 'Donald',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'ABACC Caterers Private LTD.',
            CS: 20000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Food tasted great!",
            productLine: "New Installation",
            productName: "Product A",
            quantity: 1234,
            location: "New Delhi",
            customerType: "Government"
        }, {
            id: 4,
            name: 'Alan',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'MNO Trading Private LTD.',
            CS: 10000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Bring a better deal ",
            productLine: "Modernisation",
            productName: "Product D",
            quantity: 32,
            location: "Mumbai",
            customerType: "Private"
        }, {
            id: 1,
            name: 'Ashish',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'ABC Builders Private LTD.',
            CS: 20000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: "  ",
            remarks: "Good Work!",
            productLine: "Services",
            productName: "Product A",
            quantity: 8,
            location: "Noida",
            customerType: "Corporate"
        }, {
            id: 2,
            name: 'John',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'ABACC Contracter Private LTD.',
            CS: 50000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Nice contracts issued.",
            productLine: "New Installation",
            productName: "Product A",
            quantity: 4,
            location: "Gurgaon",
            customerType: "Government"
        }, {
            id: 3,
            name: 'Aditya',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'DFG Caterers Private LTD.',
            CS: 20000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Food tasted great!",
            productLine: "Modernisation",
            productName: "Product A",
            quantity: 5,
            location: "New Delhi",
            customerType: "Private"
        }, {
            id: 4,
            name: 'Alan',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'MNO Trading Private LTD.',
            CS: 70000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Bring a better deal ",
            productLine: "New Installation",
            productName: "Product B",
            quantity: 2,
            location: "Mumbai",
            customerType: "Corporate"
        }, {
            id: 1,
            name: 'Kewal',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'ABC Builders Private LTD.',
            CS: 20000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: "  ",
            remarks: "Good Work!",
            productLine: "Services",
            productName: "Product V",
            quantity: 5,
            location: "Noida",
            customerType: "Government"
        }, {
            id: 2,
            ticketNo: Math.floor(100000 * (Math.random())),
            ticketNo: 100000 * Math.floor((Math.random())),
            accName: 'XYZ Contracter Private LTD.',
            CS: 20000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Nice contracts issued.",
            productLine: "Modernisation",
            productName: "Product H",
            quantity: 5,
            location: "Noida",
            customerType: "Private"
        }, {
            id: 3,
            name: 'Donald',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'DFG Caterers Private LTD.',
            CS: 24000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Food tasted great!",
            productLine: "New Installation",
            productName: "Product C",
            quantity: 7,
            location: "New Delhi",
            customerType: "Private"
        }, {
            id: 4,
            name: 'Alan',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'MNO Trading Private LTD.',
            CS: 20000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Bring a better deal ",
            productLine: "Services",
            productName: "Product C",
            quantity: 8,
            location: "Mumbai",
            customerType: "Corporate"
        }, {
            id: 1,
            name: 'Mark',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'ABC Builders Private LTD.',
            CS: 70000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: "  ",
            remarks: "Good Work!",
            productLine: "New Installation",
            productName: "Product A",
            quantity: 3,
            location: "Noida",
            customerType: "Government"
        }, {
            id: 2,
            name: 'John',
            ticketNo: 100000 * Math.floor((Math.random())),
            accName: 'XYZ Contracter Private LTD.',
            CS: 20000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Nice contracts issued.",
            productLine: "New Installation",
            productName: "Product X",
            quantity: 4,
            location: "Gurgaon",
            customerType: "Private"
        }, {
            id: 3,
            name: 'Donald',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'DFG Caterers Private LTD.',
            CS: 22000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Food tasted great!",
            productLine: "Services",
            productName: "Product L",
            quantity: 1,
            location: "New Delhi",
            customerType: "Corporate"
        }, {
            id: 4,
            name: 'Alan',
            ticketNo: Math.floor(100000 * (Math.random())),
            accName: 'MNO Trading Private LTD.',
            CS: 20000,
            ECD: randomDate(new Date(2017, 0, 1), new Date()),
            DO: 30,
            approval: undefined,
            remarks: "Bring a better deal ",
            productLine: "New Installation",
            productName: "Product K",
            quantity: 13,
            location: "Noida",
            customerType: "Private"
        }];

        $scope.editableTableData = $scope.smartTableData.slice(0, 36);


    }

}(angular.module("BlurAdmin.pages.salesApprovals")));