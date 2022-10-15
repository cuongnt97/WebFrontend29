//-----NUMBER-----
//Ex1
function cubeVol(r) {
  if (r > 0) {
    return (4 / 3) * Math.PI * Math.pow(r, 3);
  }
  return "Invalid";
}

// console.log(cubeVol(3));

//Ex2
const sumBetweenTwoNums = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    return "Invalid";
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

// console.log(sumBetweenTwoNums(8,3));

//Ex3
function sumOfDivisors(x) {
  if (typeof x != "number" || x <= 0) {
    return 0;
  }
  let res = 0;
  for (let i = 1; i <= x; i++) {
    if (x % i == 0) {
      res += i;
    }
  }
  return res;
}

// console.log(sumOfDivisors(15));

//Ex4
function isPrime(x) {
  if (typeof x != "number" || x < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(4));

//Ex5
function sumOfPrimeNums(x) {
  if (typeof x != "number" || x < 2) {
    return -1;
  }
  let res = 0;
  for (let i = 2; i <= x; i++) {
    if (isPrime(i)) {
      res += i;
    }
  }
  return res;
}

// console.log(sumOfPrimeNums(9));

//-----STRING-----
//Ex1
function capitalize(str) {
  if (typeof str !== "string") {
    return -1;
  }
  let arr = str.trim().toLowerCase().split(" ");
  let newStr = "";
  for (const value of arr) {
    newStr += value.charAt(0).toUpperCase().concat(value.slice(1), " ");
  }
  return newStr.slice(0, -1);
}

// console.log(capitalize(undefined));


//Ex2
function parameterize(str) {
  str = str.trim();
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) == " " && str.charAt(i + 1) == " ") {
      str = str.substring(0, i).concat(str.substring(i + 1, str.length));
      i--;
    }
  }
  return str.trim().toLowerCase().replaceAll(" ", "-");
}

// console.log(parameterize("  JAVASCRIPT  is   fun "));

//Ex3
function isSymmetricalStr(str) {
  if (typeof str !== "string") {
    return false;
  }
  let newStr = str.toLowerCase().trim().replace(" ", "");
  let len = newStr.length;
  for (let i = 0; i <= len / 2; i++) {
    if (newStr.charAt(i) !== newStr.charAt(len - 1 - i)) {
      return false;
    }
  }
  return true;
}

// console.log(isSymmetricalStr("toI laLioT"));

//Ex4
function hasContains(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return -1;
  }
  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();

  return newStr1.includes(newStr2) || newStr2.includes(newStr1);
}

// console.log(hasContains('Cuong nguyen', ' ng'));

//-----ARRAY-----
//Ex1
// function removeFalsy(arr) {
//   let newArr = [];
//   for (const val of arr) {
//     if (!!val) {
//       newArr.push(val);
//     }
//   }
//   return (arr = newArr);
// }

function removeFalsy(arr) {
  return arr.filter(function (val) {
    return !!val;
  });
}

// let testArr = [1, false, "", undefined, NaN, null, 0, "cuong", 123, []];
// console.log(removeFalsy(testArr));

//Ex2
function getLongestElements(arr) {
  let arrLen = arr.map(function (val) {
    return val.length;
  });
  let maxLen = Math.max(...arrLen);
  return arr.filter(function (val) {
    return val.length === maxLen;
  });
}

// console.log(
//   getLongestElements(["ascdv", "asctc", "asc", "deasc", "a", "as", "asssa"])
// );

//Ex3
let arr1 = [7, 5, 3, 23];
let arr2 = [9, 7, 6, 3, 2, 4, 5, 1, 23];

function difference(arr1, arr2) {
  let resultArr = [];
  for (const value of arr1) {
    if (arr2.includes(value)) {
      continue;
    }
    resultArr.push(value);
  }
  for (const value of arr2) {
    if (arr1.includes(value)) {
      continue;
    }
    resultArr.push(value);
  }
  return resultArr;
}

function differences(arr1, arr2) {
  return arr1
    .filter(function (val) {
      return !arr2.includes(val);
    })
    .concat(
      arr2.filter(function (val) {
        return !arr1.includes(val);
      })
    );
}

// console.log(difference(arr1, arr2));
// console.log(differences(arr1, arr2));

//Ex4
function twoDimArr(m, n) {
  if (typeof m !== "number" || typeof n !== "number" || m <= 0 || n <= 0) {
    return -1;
  }
  let x = 1;
  let mArr = [];
  for (let i = 0; i < m; i++) {
    let nArr = [];
    for (let j = 0; j < n; j++) {
      nArr[j] = x;
      x++;
    }
    if (i % 2 != 0) {
      nArr.reverse();
    }
    mArr.push(nArr);
  }
  return mArr;
}

// console.log(twoDimArr(3, 5));

//-----OBJECT-----
const studentList = [
  {
    name: "Huy",
    age: 20,
  },
  {
    name: "Hue",
    age: 21,
  },
  {
    name: "Ha",
    age: 22,
  },
  {
    name: "Ha",
    age: 23,
  },
  {
    name: "Oanh",
    age: 25,
  },
  {
    name: "Nguyen",
    age: 19,
  },
  {
    name: "Viet",
    age: 24,
  },
  {
    name: "Cuong",
    age: 25,
  },
];
//Ex1
function getAvgAge(students) {
  return (
    students.reduce(function (sum, student) {
      return sum + student.age;
    }, 0) / students.length
  );
}

// console.log(getAvgAge(studentList));

//Ex2
function sortStudentsByAge(students) {
  return students.sort(function (std1, std2) {
    return -(std1.age - std2.age);
  });
}

// console.log(sortStudentsByAge(studentList));

//Ex3
function sortStudentsByName(students) {
  return students.sort(function (std1, std2) {
    return std1.name.toLowerCase() >= std2.name.toLowerCase() ? 1 : -1;
  });
}
// console.log(sortStudentsByName(studentList));
//Ex4
function getStudentsByKey(students, key) {
  return students.filter(function (std) {
    return std.name.charAt(0).toLowerCase() === key.toLowerCase();
  });
}
// console.log(getStudentsByKey(studentList, 'h'));

//-----TONG HOP-----
//Ex1
// function plusTime(t, x) {
//   let regex = new RegExp("^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$");
//   if (!regex.test(t) || (typeof x !== "number" && x > 1000)) {
//     return -1;
//   }

//   let arr = t.split(":").map(function (val) {
//     return parseInt(val);
//   });

//   //Neu +x ma van ko vuot 59s
//   if (arr[2] + x < 60) {
//     arr[2] += x;
//     //Neu vuot 59s
//   } else {
//     let s = (arr[2] + x) % 60;
//     let m = Math.floor((arr[2] + x) / 60);
//     arr[2] = s;
//     //Neu ko vuot qua 59'
//     if (arr[1] + m < 60) {
//       arr[1] += m + 1;
//       //Neu vuot qua 59'
//     } else {
//       arr[1] = (arr[1] + m) % 60;
//       if (arr[0] == 23) {
//         arr[0] = 0;
//       } else {
//         arr[0] += 1;
//       }
//     }
//   }
//   return arr
//     .reduce(function (sum, el) {
//       return sum + (el < 10 ? "0" + el : el) + ":";
//     }, "")
//     .slice(0, -1);
// }

// console.log(plusTime("22:59:50", 1000));

// function changeTime(t, x) {
//   const REGEX_STR = new RegExp(
//     "^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$"
//   );
//   const SEC_PER_DAY = 86400;
//   if (!REGEX_STR.test(t) || (typeof x !== "number" && x > 1000) || x < -1000) {
//     return -1;
//   }

//   let arr = t.split(":").map(function (val) {
//     return parseInt(val);
//   });
//   let len = arr.length - 1;
//   let beforeTime = 0;
//   for (let i = len; i >= 0; i--) {
//     beforeTime += arr[i] * Math.pow(60, len - i);
//   }
//   let affterTime = beforeTime + x;
//   if (affterTime < 0) {
//     affterTime = SEC_PER_DAY + x + beforeTime;
//   }
//   let i = 0;
//   while (affterTime > 0) {
//     arr[i] = Math.floor(affterTime / Math.pow(60, len - i));
//     if (arr[i] > 23 && i === 0) {
//       arr[i] = 0;
//     }
//     affterTime -= arr[i] * Math.pow(60, len - i);
//     i++;
//   }

//   return arr
//     .reduce(function (sum, el) {
//       return sum + (el < 10 ? "0" + el : el) + ":";
//     }, "")
//     .slice(0, -1);
// }

// console.log(changeTime("00:00:05", -10));

function changeTime(t, s) {
  const REGEX_STR = new RegExp(
    "^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$"
  );
  if (!REGEX_STR.test(t) || (typeof s !== "number" && x > 1000) || s < -1000) {
    return -1;
  }
  let arr = t.split(":").map(function (val) {
    return parseInt(val);
  });
  let beforeDate = new Date();
  beforeDate.setHours(arr[0], arr[1], arr[2]);
  let afterDate = new Date(beforeDate.getTime() + s * 1000);

  let hour = afterDate.getHours();
  let min = afterDate.getMinutes();
  let sec = afterDate.getSeconds();

  return "".concat(
    hour < 10 ? "0" + hour : hour,
    ":",
    min < 10 ? "0" + min : min,
    ":",
    sec < 10 ? "0" + sec : sec
  );
}

// console.log(changeTime("00:00:05", -10));

//Ex2
function countDate(h, x, y) {
  if (
    typeof h !== "number" ||
    typeof x !== "number" ||
    typeof y !== "number" ||
    x < y ||
    x <= 0 ||
    y <= 0 ||
    h <= 0
  ) {
    return -1;
  }
  if (x >= h) return 1;
  if (x === y && x < h) {
    return Infinity;
  }
  let count = 0;
  while (h > 0) {
    count++;
    if (h <= x) {
      break;
    }
    h += -x + y;
  }
  return count;
}

// console.log(countDate(6, 5, 2));

//Ex3
function minNumber(x) {
  //Check dieu kien dau vao
  if (typeof x != "number" || x <= 0) {
    return 0;
  }
  //Neu x< 10 return x
  let xStr = String(x);
  if (x < 10) return x;
  //Chuyen so ve string va map lai thanh mang gia tri so va sort mang
  let arrNum = xStr
    .split("")
    .map(function (char) {
      return Number(char);
    })
    .sort();

  //Duyet mang so neu khac 0 va index khac 0 thi swap voi phan tu dau tien
  for (let el in arrNum) {
    if (arrNum[el] > 0 && el != 0) {
      [arrNum[el], arrNum[0]] = [arrNum[0], arrNum[el]];
      break;
    }
  }
  //tra ve gia tri join tu mang va chuyen doi sang number
  return Number(arrNum.join(""));
}

console.log(minNumber(500000000010));
