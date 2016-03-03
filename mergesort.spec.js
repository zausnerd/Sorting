describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        // test the merging algorithm
        expect( merge([1,14,18,29,35],[7,12,22,32,39]) ).toEqual([1,7,12,14,18,22,29,32,35,39]);
    });
});
describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
  });
});


describe('recursive mergeSort function', function() {
  it('sorts an array using mergeSort algorithm', function() {
    expect(mergeSort([1,14,18,29,35,7,12,22,32,39])).toEqual([1,7,12,14,18,22,29,32,35,39]);
  });

  it('sorts an array ODD number vals', function() {
    expect(mergeSort([25,68,6,35,73,2,19])).toEqual([2,6,19,25,35,68,73]);
  });
});