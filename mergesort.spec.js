describe('Merge Sort', function(){
    it('is able to merge two sorted, same-length arrays', function(){
        expect( merge([1,14,18,29,35],[7,12,22,32,39]) ).toEqual([1,7,12,14,18,22,29,32,35,39]);
    });

    it('is able to merge two sorted, different-length arrays', function(){
        expect( merge([1,14,29],[7,12,18,22,32,35,39]) ).toEqual([1,7,12,14,18,22,29,32,35,39]);
    });
});
describe('Split Array function', function() {
  it('is able to split an even array into two halves', function() {
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
  });

  it('is able to split an odd array into two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
  });
});


describe('Recursive Merge Sort function', function() {
  it('is able to identify an empty array',function() {
    expect( mergeSort([])).toEqual([]);
  });

  it('sorts an even-length array', function() {
    expect(mergeSort([1,14,18,29,35,7,12,22,32,39])).toEqual([1,7,12,14,18,22,29,32,35,39]);
  });

  it('sorts an odd-length array', function() {
    expect(mergeSort([25,68,6,35,73,2,19])).toEqual([2,6,19,25,35,68,73]);
  });
});

describe('Spy Life',function() {
  it('spies on the mergeSort function and returns the recursive count', function() {
    spyOn(window,'mergeSort').and.callThrough();
    mergeSort([19,39,5,81,54,6,50,28]);
    expect(mergeSort.calls.count()).toEqual(15);
  });

  it('spies on the mergeSort function and checks if merge is called',function() {
    spyOn(window,'merge').and.callThrough();
    mergeSort([19,39,5,81,54,6,50,28]);
    expect(merge).toHaveBeenCalled();
  });
});