const { filter } = requiare('./index.js');

describe('filter function', () => {
    it('returns an array', () => {
        const numbers = [1, 2, 3];
        const filtered = filter(numbers, number => number * 2);
    })
})

// decribe('map function', () => {
//     it('returns ad array', () =>{
//         const numbers = [1, 2, 3];
//         const mapped = map(numbers, number => number * 2);

//         expect(mapped).toEqual(expect.any(Array));
//     });

//     it('returns a mapped array', ()=> {
//         const colors = ['red', 'green'];
//         const mapped = map[colors, color => color.]

//         expect(mapped).toHaveLength(colors.length)
//     })
// }) 