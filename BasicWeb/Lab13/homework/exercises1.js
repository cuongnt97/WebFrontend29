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
    if (!regex.test(user.dateOfBirth)) {
      console.log("Ngay thang nam khong dung dinh dang khai bao");
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
    const now = new Date();
    let value = (now - date) / 1000;//theo giay
    if (value < 5) {
        return 'Vua xong';
    } else if (value / 60 < 1) {
        return Math.floor(value) + ' giay truoc';
    } else if (value / (60 * 60) < 1) {
        return Math.floor(value / 60) + ' phut truoc';
    } else if (value / (60 * 60 * 24) < 1) {
        return Math.floor(value / (60 * 60)) + ' gio truoc';
    } else if (value / (60 * 60 * 24 * 31) < 1) {
        let month = now.getMonth() + 1;
        switch (month - 1) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                return Math.floor(value / (60 * 60 * 24)) + ' ngay truoc';
            case 2: case 4: case 6: case 9: case 11:
                return '1 thang truoc';

        }
    } else if (value / (366 * 60 * 60 * 24) < 1) {
        if ((value / (365 * 60 * 60 * 24) > 1)) {
            return 'Ngay xua ngay xua';
        } else {
            return Math.floor(value / (60 * 60 * 24 * 31)) + ' thang truoc';
        }
    }
    return 'Ngay xua ngay xua';
}
