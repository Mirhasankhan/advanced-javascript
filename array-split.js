const numbers = [5, 6, 7, 8, 9, 99, 65, 22];
const part = numbers.slice(2, 5);
const remove = numbers.splice(2, 5,);
const together = numbers.join(" ");


console.log(numbers);
console.log(part);
console.log(remove);
console.log(together);