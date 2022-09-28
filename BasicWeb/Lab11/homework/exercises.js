/**
 * Kiểm tra số một số nguyên dương bất kỳ có phải số nguyên tố hay không
 *
 * Số nguyên tố là số chỉ chia hết cho `1` và chính nó
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {boolean} Số `n` cho có phải số nguyên tố hay không
 */

//Cach 1
function isPrime(n) {
  let sqrtNum = Math.sqrt(n);
  if (n <= 0) {
    return false;
  }
  for (let i = 2; i <= sqrtNum; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(`Số ${4} ${isPrime(4) ? 'có' : 'không'} là số nguyên tố`);

//Cach 2
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

/**
 * Tính tổng các số nguyên tố trong khoảng từ 1 đến n
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {number} Tổng các số nguyên tố trong khoảng từ `1` đến `n`
 */
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

// console.log(sumOfPrimes(2));

/**
 * Tìm số Fibonacci thứ n
 *
 * Dãy Fibonacci là dãy số bắt đầu bằng 0 và 1, các số tiếp theo bằng tổng 2 số trước nó
 *
 * VD: 0 1 1 2 3 5 8 13 ... (Số thứ 1 là 0, số thứ 2 là 1, số thứ 3 là 2, ...)
 *
 * VD: `n = 5`, kết quả số Fibonacci thứ 5 là `3`
 *
 * @param {number} n Số nguyên dương bất kỳ (n > 0)
 *
 * @return {number} Số Fibonacci thứ `n`
 */
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

// console.log('Fibonacci', fibonacci(9));

/**
 * Tính giai thừa của một số nguyên bất kỳ
 *
 * Giai thừa của một số `n = 1 * 2 * 3 * ... * (n - 1) * n`
 *
 * @param {number} n Số nguyên dương bất kỳ (n >= 0)
 *
 * @return {number} Giai thừa của `n`
 */
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(`Giai thừa của số nguyên ${4} bằng ${factorial(4)}`);

/**
 * Kiểm tra một số nguyên dương bất kỳ có phải số Strong hay không
 *
 * Số Strong là số có tổng giai thừa các chữ số bằng chính nó
 *
 * VD: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {boolean} Số `n` có phải là số Strong hay không
 */
function isStrong(n) {
  if (n <= 0) {
    return false;
  }
  let sum = 0;
  let i = n;
  do {
    sum += factorial(i % 10);
    i = parseInt(i /= 10);
  } while (i > 0);
  if (sum === n) {
    return true;
  }
  return false;
}

let n = 2;
console.log(`Số ${n} ${isStrong(n) ? 'có' : 'không'} là số Strong.`);
