var data = ["indore", "mumbai", "pune", "delhi", "bhopal"];

var [...temp] = data;

data[1] = "ujjain";

console.log(data);
console.log(temp);