/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Sổ nhỏ nhất trong mảng
 */
function min(arr) {
  let minValue = arr[0];
  for (const value of arr) {
    if (value < minValue) {
      minValue = value;
    }
  }
  return minValue;
}

// console.log(min(["asd", true, 0, 56]));

/**
 * Tìm số lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn nhất trong mảng
 */
function max(arr) {
  let maxValue = arr[0];
  for (const value of arr) {
    if (value > maxValue) {
      maxValue = value;
    }
  }
  return maxValue;
}

/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {[number, number]} Mảng chứa giá trị nhỏ nhất và lớn nhất
 */
function minMax(arr) {
  let minValue = arr[0];
  let maxValue = arr[0];
  for (const value of arr) {
    if (minValue > value) {
      minValue = value;
    }
    if (maxValue < value) {
      maxValue = value;
    }
  }

  return [minValue, maxValue];
}

/**
 * Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y)
 *
 * Lưu ý mảng sau khi gọi phải thay đổi
 *
 * @param {number[]} arr Mảng số bất kỳ
 * @param {number} x Index 1
 * @param {number} y Index 2
 */
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;

  return arr;
}

// console.log(swap([1,2,3,4,5,6,7,89], 3, 7));

/**
 * Tìm các số xuất hiện trong cả 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number[]} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số xuất hiện trong cả 2 mảng
 */
function intersection(arr1, arr2) {
  let resultArr = [];
  for (const value1 of arr1) {
    for (const value2 of arr2) {
      if (value1 === value2) {
        if (!resultArr.includes(value1)) {
          resultArr.push(value1);
        }
      }
    }
  }

  return resultArr;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 5, 3, 23];
let arr2 = [9, 7, 6, 3, 2, 4, 5, 1, 23];
// console.log(intersection(arr1, arr2));

/**
 * Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số chỉ xuất hiện ở 1 trong 2 mảng
 */
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

// console.log(difference(arr1, arr2));

/**
 * Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất
 *
 * Lưu ý: Thay đổi trực tiếp mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 */
function removeDuplicate(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] == arr[j] && i != j) {
        let temp = arr[arr.length - 1];
        arr[arr.length - 1] = arr[i];
        arr[j] = temp;
        arr.pop();
      }
    }
  }
  return arr;
}
arr1 = [1, 2, 3, 4, 6, 7, 7, 5, 7, 5, 3, 23];
// console.log(removeDuplicate(arr1));

/**
 * Tìm số lớn thứ 2 trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn thứ 2 trong mảng
 */
function secondLargest(arr) {
  let maxValue = max(arr);
  let newArr = removeDuplicate(arr);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === maxValue) {
      let temp = newArr[newArr.length - 1];
      newArr[newArr.length - 1] = newArr[i];
      newArr[i] = temp;
    }
  }
  newArr.pop();
  return max(newArr);
}

/**
 * Xáo trộn vị trí các phần tử trong một mảng
 *
 * @param {any[]} arr Mảng bất kỳ
 *
 * @return {arr} Mảng bị xáo trộn
 */
function shuffle(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let rand = randNum(len);
    let temp = arr[i];
    arr[i] = arr[rand];
    arr[rand] = temp;
  }

  return arr;
}
// console.log(shuffle([1,2,3,4,5,6,7,8,9,10]));

function randNum(limit) {
  return Math.floor(Math.random() * limit);
}

/**
 * @typedef {object} student
 * @property {number} id - Mã định danh
 * @property {string} firstname - Họ
 * @property {string} lastname - Tên
 * @property {string} gender - Giới tính
 * @property {number} point - Điểm tổng kết
 */

/**
 * @typedef {object} studentWithFullname
 */

/**
 *
 * @param {student[]} students - Danh sách sinh viên
 *
 * @return {student[]}
 */
function fullname(students) {
  let newStudents = [];
  for (const student of students) {
    const studentWithFullname = Object.assign({}, student);
    studentWithFullname.fullname =
      studentWithFullname.firstname + " " + studentWithFullname.lastname;
    newStudents.push(studentWithFullname);
  }
  return newStudents;
}

let students = [
  {
    id: 1,
    firstname: "Cuong1",
    lastname: "Nguyen",
    gender: "male",
    point: 10,
  },
  {
    id: 2,
    firstname: "Cuong2",
    lastname: "Nguyen",
    gender: "male",
    point: 10,
  },
  {
    id: 3,
    firstname: "Cuong3",
    lastname: "Nguyen",
    gender: "male",
    point: 10,
  },
  {
    id: 4,
    firstname: "Cuong4",
    lastname: "Nguyen",
    gender: "male",
    point: 10,
  },
];

console.log(fullname(students));
