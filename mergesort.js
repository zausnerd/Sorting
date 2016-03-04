function merge(left, right) {
	var returnArray = [];
	var leftCount = 0;	
	var rightCount = 0;
	while (leftCount < left.length && rightCount < right.length) {
		if (left[leftCount] < right[rightCount]) {
			returnArray.push(left[leftCount]);
			leftCount++;
		}
		else {
			returnArray.push(right[rightCount]);
			rightCount++;
		}
	}
	if (leftCount < left.length) {
		return returnArray.concat(left.slice(leftCount));
	}
	else {
		return returnArray.concat(right.slice(rightCount));	
	}
}

function split(wholeArray) {
	if (wholeArray.length < 2)  {
		return wholeArray;
	}
	var middle = Math.floor(wholeArray.length / 2);
	var firstHalf = wholeArray.slice(0,middle);
	var secondHalf = wholeArray.slice(middle);
	return [firstHalf, secondHalf];
}

function mergeSort(array) {
	if (array.length < 2) {
		return array;
	}
	var arraySplit = split(array);
	return merge(mergeSort(arraySplit[0]),mergeSort(arraySplit[1]));
}