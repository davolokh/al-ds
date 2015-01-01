(function main() {
	var inputArray = [44, 55, 12, 42, 94, 18, 06, 67];

	function insertionSort(input) {
		for (var i = 0; i < input.length - 1; i++) {
			var x = input[i],
				j = i;
			while ((j > 0) && (x < input[j-1])) {
				input[j] = input[j - 1];
				j--;
			}
			input[j] = x;
		};
		return input;
	};

	function selectionSort(input) {
		var l = input.length;
		for (var i = 0; i < l - 2; i++) {
			var x = input[i],
				k = i;
			for (var j = i + 1; j < l - 1; j++) {
				if (input[j] < x) {
					k = j;
					x = input[k];
				}
			};
			input[k] = input[i];
			input[i] = x;
		};
		return input;
	};

	function bubbleSort(input) {
		var l = input.length;
		for (var i = 0; i < l - 1; i++) {
			for (var j = l - 1; j > i; j--) {
				if (input[i] > input[j]) {
					var temp = input[i];
					input[i] = input[j];
					input[j] = temp;
				}
			};
		};
		return input;
	};



	console.log(insertionSort(inputArray));
	console.log(selectionSort(inputArray));
	console.log(bubbleSort(inputArray));
})();