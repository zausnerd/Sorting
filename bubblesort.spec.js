describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array of one element', function(){
        expect( bubbleSort([4]) ).toEqual( [4] );
    });

    it('handles an array of multiple elements', function(){
        expect( bubbleSort([4, 1, 17, 38, 12]) ).toEqual( [1, 4, 12, 17, 38] );
    });
});

