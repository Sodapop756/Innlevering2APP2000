const { evaluate, sqrt, round } = require("mathjs");

console.log(evaluate("12 / (2.3 + 0.7)"));
console.log(evaluate("5.08 cm to inch").toString());
console.log(round(sqrt(2), 3));
