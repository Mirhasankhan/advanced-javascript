const students = [
    { id: 21, name: 'omor sunny' },
    { id: 22, name: 'mannaaaa' },
    { id: 23, name: 'mousumi' },
    { id: 24, name: 'dipjol' }
];

// let sum = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const newElement = element.name;
//     sum.push(newElement);
//     console.log(sum);
// }
const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id>22);
const biggerOne = students.find( s => s.id>22);

console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);