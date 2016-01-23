angular.module('COSL').controller('pageCtrl', ['$scope', function ($scope) {
	$scope.pageTitle = 'Hello';

	$scope.links = [
		{ 
			text: 'A Message From Our Director' 
		}, 
		{
			text: 'Contact Us'
		}
	];

	$scope.messages = [
		{
			text: `We are a non-profit organization working to
			convert part of the old Livingston Theater building 
			into a facility where we can host AA/NA/GA meetings 
			and also will offer extended-stay rooms for recovering 
			addicts.`
		},
		{
			text: `Plans are in the works to open a free inside 
			the facility to help those we serve with a: job interview, 
			shoes, and toiletries. Any donations of time, money, clothing, 
			shoes or services would greatly be appreciated.`
		}
	];

	$scope.goHome = function () {
		window.location = '/';
	};

	$scope.moveLeft = function () {
		alert('move image left');
	};

	$scope.moveRight = function () {
		alert('move image right');
	};

	$scope.scrollPageTo = function (navBtn) {
		var elementToScroll;
		console.log(navBtn);
		if (navBtn == 'A Message From Our Director') {
			elementToScroll = '.content_1';
		} else if (navBtn == 'Contact Us') {
			elementToScroll = '.content_2';
		}
		
		$('html, body').animate({
	        scrollTop: $(elementToScroll).offset().top
	    }, 1000, function () {
	    	$('.backToTop').show();
	    });
	};

}]);