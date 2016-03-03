describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles single items', function(){
        expect( bubbleSort([4]) ).toEqual( [4] );
    });

    it('handles multiple items', function(){
        expect( bubbleSort([4, 1, 17, 38, 12]) ).toEqual( [1, 4, 12, 17, 38] );
    });
});

