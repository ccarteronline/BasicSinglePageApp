angular.module('COSL').controller('sliderCtrl', ['$scope', '$interval', function ($scope, $interval) {
	$scope.divName = ['dotCircle_1', 'dotCircle_2', 'dotCircle_3', 'dotCircle_4'];
	$scope.totalImages = $scope.divName.length;
	$scope.imageWaitTime = 5 // in seconds
	$scope.imageShownbyNumber = 1;
	console.log($scope.divName.length);
	// On first launch, hide images
	hideImages('all');

	// create timeout to run in loop
	$interval(function () {
		if ($scope.imageShownbyNumber === $scope.totalImages) {
			$scope.imageShownbyNumber = 1;
		} else {
			$scope.imageShownbyNumber ++;
		}
		
		hideImages();
		displayImageByNum($scope.imageShownbyNumber);
	}, ($scope.imageWaitTime * 1000));

	function displayImageByNum (num){
		$scope[$scope.divName[num-1]] = 'shownImage';
	};

	function hideImages (howmany) {
		// turn off all the images except the first one
		for (var i = 1; i <= $scope.totalImages; i++) {
			console.log(i, 'what is I?');
			if (i == 1 && howmany == 'all') {
				// show it dont hide it.
			} else {
				$scope[$scope.divName[i-1]] = 'hiddenImage';
			}
		}
		
	};

}]);