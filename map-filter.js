const numbers = [3, 5, 9, 12, 17];
// const outPut = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     outPut.push(result);
    
// }

// // function square(element){
// //     return element * element;
// // }
// // const result = numbers.map(function(element){
// //     return element * element;
// })
// const result = numbers.map(x => x * x);
const bigger = numbers.filter(x => x >5);

const isThere = numbers.find(x => x > 5);

console.log(isThere);