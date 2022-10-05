/**
 * Chuyển đổi chuỗi thành dạng capitalize (chỉ viết hoa chữ cái đầu tiên)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `capitalize("  javascript is Fun ") => "Javascript is fun"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu
 */
function capitalize(str) {
    let arr = str.trim().split(' ');
    let newStr = '';
    for (const value of arr) {
        newStr += value.charAt(0).toUpperCase() + value.slice(1) + ' ';
    }
    return newStr.slice(0, -1);
}

// console.log(capitalize("  javascript is Fun "));

/**
 * Chuyển đổi chuỗi thành dạng title (viết hoa chữ cái đầu của mỗi từ)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `title("javaScript iS fUn") => "Javascript Is Fun"`
 *
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu mỗi từ
 */
function title(str) {
    str = str.toLowerCase();
    return capitalize(str);
}
// console.log(title("    javaScript iS fUn     "));
/**
 * Đếm số ký tự nguyên âm xuất hiện trong chuỗi
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {number} Số ký tự nguyên âm có trong chuỗi
 */
function countVowel(str) {
    let count = 0;
    let lengthStr = str.length;
    for(let i = 0; i < lengthStr; i++){
        if(isVowel(str.charAt(i))){
            count++;
        }
    }
    return count;
}

// console.log(countVowel('Ten toi la Nguyen Tan Cuong'));
function isVowel(character) {
  switch (character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
      return true;
    default:
      return false;
  }
}
/**
 * Tạo một mã màu ngẫu nhiên (hệ màu HEX)
 *
 * @return {string} Màu ngẫu nhiên
 */
function randomColor() {
    let lenStr = 6;
    let randomStr = '';
    for (let i = 0; i < lenStr; i++) {
        randomStr += Math.floor(Math.random() * 16).toString(16);
    }
    return randomStr;
}

// console.log(randomColor());

/**
 * Đảo ngược thứ tự các từ trong chuỗi
 *
 * Ví dụ: `reverseWords("The fox is comming for the chicken") => "chicken the for comming is fox The"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi đảo ngược
 */
function reverseWords(str) {
    let arr = str.trim().split(' ');
    let lenArr = arr.length;
    for(let i = 0; i < lenArr/2; i++){
        let temp = arr[i];
        arr[i] = arr[lenArr - 1 -i];
        arr[lenArr - i - 1] = temp;
    }
    return arr.join(' ');
}
// console.log(reverseWords("The fox is comming for the chicken "));

/**
 * Tạo chuỗi URL (viết thường, các từ được nối với nhau bằng dấu -)
 *
 * Ví dụ: `parameterize("JavaScript is fun") => "javascript-is-fun"`
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi URL
 */
function parameterize(str) {
    return str.toLowerCase().trim().replaceAll(' ', '-')
}

// console.log(parameterize("JavaScript is fun"));
