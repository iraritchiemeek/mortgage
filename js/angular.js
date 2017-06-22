var mortgageApp = angular.module('mortgageApp', []);

mortgageApp.controller('mainController', function($scope) {
	$scope.housePrice = 0
	$scope.deposit = 0
	$scope.loanLength = 0
	$scope.interest = 0

	$scope.calcRepayment = function (housePrice, deposit, loanLength, interest, term) {
		r = (interest/100)/loanLength;
	    n = loanLength * term;
	    p = housePrice - deposit;
	    part1 = Math.pow((1+r), -n);
	    repayment = (r/(1- part1)) * p;
	    repayment = Math.round(repayment);
	    return repayment
	}
})