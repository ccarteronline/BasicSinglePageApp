angular.module('COSL').directive('backToTop', function () {
	return {
		restrict: 'E',
		template: `<button class="backToTop btn btn-success btn-lg">
							<center>Scroll To Top</center>
						</button>`,
		link: function (scope, element, attr) {
			element.on('click', function (event) {
				$('html, body').animate({
			        scrollTop: $('body').offset().top
			    }, 1000, function () {
			    	$('.backToTop').hide();
			    });
			});
		}
	}
});
//ng-click="backToTop()"