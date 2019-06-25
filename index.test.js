const { map } = requiare('./index.js');

decribe('map function', () => {
    it('returns ad array', () =>{
        const numbers = [1, 2, 3];
        const mapped = map(numbers, number => number * 2);

        expect(mapped).toEqual(expect.any(Array));
    });

    it('returns a mapped array', ()=> {
        const colors = ['red', 'green'];
        const mapped = map[colors, color => color.]

        expect(mapped).toHaveLength(colors.length)
    })
}) 