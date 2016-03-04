function numerically (a, b) { return a - b; }

function generateArray(size, lower, upper) {
  var randomArray = [];
  while (size--) {
    var randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
}

describe('Merge Sort', function() {
  describe('merge', function(){
    it('is able to merge two sorted arrays of equal length', function(){
      expect( merge([1,14,18,29,35],[7,12,22,32,39]) ).toEqual([1,7,12,14,18,22,29,32,35,39]);
    });

    it('is able to merge two sorted arrays of unequal length', function(){
      expect( merge([1,14,29],[7,12,18,22,32,35,39]) ).toEqual([1,7,12,14,18,22,29,32,35,39]);
    });
  });
  describe('split', function() {
    it('is able to split an array of even length', function() {
      expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
    });

    it('is able to split an array of odd length', function() {
      expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
    });
  });


  describe('mergeSort', function() {
    it('is able to identify an empty array',function() {
      expect( mergeSort([])).toEqual([]);
    });

    it('sorts an even-length array', function() {
      expect(mergeSort([1,14,18,29,35,7,12,22,32,39])).toEqual([1,7,12,14,18,22,29,32,35,39]);
    });

    it('sorts an odd-length array', function() {
      expect(mergeSort([25,68,6,35,73,2,19])).toEqual([2,6,19,25,35,68,73]);
    });
    for (var i = 1; i < 10; i++) {
      it('runs recursively ' + (2*i-1) + ' times', function() {
        spyOn(window,'mergeSort').and.callThrough();
        var arr = generateArray(i,0,100);
        var sorted = arr.slice(0).sort(numerically);
        var mergedSorted = mergeSort(arr);
        expect(mergedSorted).toEqual(sorted);
        expect(mergeSort.calls.count()).toEqual(2*i-1);
      });
    }
  });
});