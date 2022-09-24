# WebFrontend29

## Biến trong JavaScript

### Khai báo biến dùng `let` / `const` / `var`

```
// Khai báo biến và không gán giá trị cho biến
let age;
age = 35;

// Khai báo biến và gán giá trị cho biến
let email = "hien@techmaster.vn"
```

### Quy tắc đặt tên biến

- Chứa các ký tự chữ, số, \_ và $
- Ký tự đầu tiên không được là số (nên là chữ)
- Có phân biệt hoa thường
- Không trùng với các từ khóa của Javascript như: **for, while, this, …**
- Nên đặt tên theo kiểu **camelCase** nếu tên biến có độ dài 2 từ trở lên cho dễ đọc. Ví dụ **binhphuong** thì nên đặt là **binhPhuong**.

## Hàm (function) trong JavaScript

### Định nghĩa function

```
function functionName(para_1, ..., para_n) {
 // code thực thi function
}
```

### Phân biệt tham số (parameter) và đối số (argument)

- Tham số (parameter) là biến trong khai báo hàm.
- Đối số (argument) là giá trị thực của biến này được truyền vào hàm.
