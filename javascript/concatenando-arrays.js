const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

// usando .concat()
// const num3 = num1.concat(num2, [7, 8 ,9], 'Paraná');

// spread operator
const num3 = [...num1, ...num2]

console.log(num3);