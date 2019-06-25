const nums = [1, 2, 3, 4, 45];
//map function
 
function map(arr, callback) {
    const mapped = [];
    for( let i = 0; i < arr.length; i++) {
        mapped[i] = callback(arr[i])
    }
    return mapped;
}
    
//filter function
function filter(arr, callback) {
    const filtered = [];
    for( let i = 0; i < arr.length; i++) {
        if(callback = true) {
            callback(arr[i])
        } else {
            []
        }
    }
    return filtered;


//find index function
// function forInfdex(arr, callback) {
//     for( let i = 0; i < arr.length; i++) {
//         const firstIndex = Number
        
//     } 
// }
//reduce function

//every function


module.exports = { 
    filter,

}