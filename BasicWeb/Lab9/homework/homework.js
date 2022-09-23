//Bai 1
const usd2vnd = (a) => 23000 * a;

console.log(5 + "$ co gia tri la", usd2vnd(5), "VND");

//Bai 2
const findArea = (a, b) => a * b;
console.log(
  "Dien tich hinh chu nhat co chieu dai",
  10,
  "va chieu rong",
  5,
  "la",
  findArea(10, 5)
);

//Bai 3
const celsiusToFahrenheit = (a) => a * 1.8 + 32;
console.log(24, "do C = ", celsiusToFahrenheit(24), "do F");

//Bai 4
const pow = (a, b) => a ^ b;
console.log(5 + "^" + 3, "=", pow(5, 3));

//Bai 5
const findAreaOfTriangle = (a, b, c) => {
  let p = (a + b + c) / 2;
  let powArea = p * (p - a) * (p - b) * (p - c);
  return Math.sqrt(powArea);
};

console.log(
  "Dien tich hinh tam gia co 3 canh lan luot",
  3,
  4,
  5,
  "la",
  findArea(3, 4, 5)
);

//Bai 6
   /*...*/