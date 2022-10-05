/**
 * Tính số ngày cho đến sinh nhật tiếp theo
 *
 * @param {number} month Tháng sinh
 * @param {number} day Ngày sinh
 *
 * @return {number} Số ngày cho đến sinh nhật tiếp theo
 */
function getDaysToNextBirthday(month, day) {
  if (month < 0 || month > 11 || day < 1 || day > 31) {
    return -1;
  }
  let nowDate = new Date();
  let birthday = new Date();
  if (nowDate.getMonth() > month) {
    birthday.setFullYear(nowDate.getFullYear() + 1, month - 1, day);
  } else {
    birthday.setMonth(month - 1);
    birthday.setDate(day);
  }
  console.log(nowDate);
  return (birthday - nowDate) / (1000 * 86400);
}

// console.log(getDaysToNextBirthday(7, 16));

/**
 * @typedef {Object} user
 * @property {string} fullname - Họ tên
 * @property {string} dateOfBirth - Ngày sinh
 */

/**
 * Kiểm tra xem ai có sinh nhật vào hôm nay
 *
 * @param {user[]} users Danh sách người dùng
 *
 * @return {user[]} Danh sách người có sinh nhật vào hôm nay
 */
function User(fullname, dateOfBirth) {
  this.fullname = fullname;
  this.dateOfBirth = dateOfBirth;
}
const user1 = new User("Cuong", "1997-07-16");
const user2 = new User("Nam", "1997-10-06");
const user3 = new User("Thang", "2000-10-06");
let usersTest = [user1, user2, user3];

function todayBirthday(users) {
  let usersToday = [];
  let today = new Date();
  let regex = new RegExp("[0-9]{4}-[0-9]{2}-[0-9]{2}");
  
  for (const user of users) {
    if(!regex.test(user.dateOfBirth)){
        console.log('Ngay thang nam khong dung dinh dang khai bao');
        continue;
    }
    let dob = new Date(user.dateOfBirth);
    if (
      today.getMonth() === dob.getMonth() &&
      today.getDate() === dob.getDate()
    ) {
      usersToday.push(user);
    }
  }
  return usersToday;
}

console.log(todayBirthday(usersTest));

/**
 * Tạo chuỗi biểu thị thời gian đã trôi qua tính đến thời điểm hiện tại theo quy tắc sau:
 *
 * - Nếu thời gian đã trôi qua ít hơn 5 giây thì trả về "Vừa xong"
 * - Nếu thời gian đã trôi qua ít hơn 1 phút thì trả về "X giây trước"
 * - Nếu thời gian đã trôi qua ít hơn 1 giờ thì trả về "X phút trước"
 * - Nếu thời gian đã trôi qua ít hơn 1 ngày thì trả về "X giờ trước"
 * - Nếu thời gian đã trôi qua ít hơn 1 tháng thì trả về "X ngày trước" (chú ý so sánh xem có cùng tháng hay không)
 * - Nếu thời gian đã trôi qua ít hơn 1 năm thì trả về "X tháng trước"
 * - Nếu thời gian đã trôi qua nhiều hơn 1 năm thì trả về "Ngày xửa ngày xưa, ..."
 *
 * @param {Date} date Ngày bất kỳ
 *
 * @returns {string} Chuỗi biểu thị thời gian đã trôi qua
 */
function humanize(date) {
    
}
