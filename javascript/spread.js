let x = ["red", "green", "blue"];
let y = [...x];

x[0] = "yellow";

let z = y;

console.log(x)
console.log(y)
console.log(z)
