//Ex1
const repeatString = (a) => {
  let result = "";
  let count = 10;
  for (let i = 0; i < 10; i++) {
    result += a;
  }
  return result;
};

// console.log(repeatString(1));

//Ex2
const repeatStr = (a) => {
  let result = "";
  let count = 10;
  for (let i = 0; i < 10; i++) {
    result += a + "-";
  }
  result = result.slice(0, -1);
  return result;
};

// console.log(repeatStr(1));

//Ex3
const repeatStrAndN = (a, n) => {
  if (n < 1) {
    return "n not valid";
  }
  let result = "";
  let count = 10;
  for (let i = 0; i < n; i++) {
    result += a + (i == n - 1 ? "" : "-");
  }
  //   result = result.slice(0, -1);
  return result;
};
console.log(repeatStrAndN(1, 5));

//Ex4
const sumOfMultiple5 = () => {
  let result = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
      result += i;
    }
  }
  return result;
};

// console.log(sumOfMultiple5());

//Ex5
const volOfCube = (r) => {
  if (typeof r != "number") {
    return -1;
  }
  return (Math.PI * (r ^ 3) * 4) / 3;
};

//Ex6
const sum = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    return "Arguments not valid";
  }
  if (a === b) {
    return a;
  }
  let result = 0;
  if (a > b) {
    a--;
    while (a > b) {
      result += a;
      a--;
    }
  } else {
    a++;
    while (a < b) {
      result += a;
      a++;
    }
  }
  return result;
};

// console.log(sum(8, 4));

//Ex 7
function isPrime(n) {
  let result = true;
  if (n <= 0) {
    result = false;
  } else {
    let sqrtNum = Math.sqrt(n);
    for (let i = 2; i <= sqrtNum; i++) {
      if (n % i === 0) {
        result = false;
        break;
      }
    }
  }
  return result;
}

//Ex 8
function sumOfPrimes(n) {
  if (n >= 2) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
  }
  return -1;
}

//Ex 9
function sumOfDivisor(n) {
  if (typeof n != "number") {
    return -1;
  }
  if (n <= 0) {
    return 0;
  }
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      result += i;
    }
  }
  return result;
}

// console.log(sumOfDivisor(200))
