//Thong tin khoa hoc
/**
 * 1. Ten
 * 2. Hinh thuc hoc
 * 3. So luong
 * 4. Gia tien
 * 5. Anh minh hoa
 * 6. Link dinh kem
 */

const listcourses = [
  {
    id: 1,
    title: "Lớp học Thiết kế - Lập trình cơ sở dữ liệu",
    form: "lab",
    count: 4,
    price: 2500000,
    image: "https://media.techmaster.vn/api/static/36/bu7vt2451co5836g4l70",
    link: "/course-detail/25608/thiet-ke-lap-trinh-co-so-du-lieu",
  },
  {
    id: 2,
    title: "Lớp học Thiết kế - Lập trình cơ sở dữ liệu",
    form: "online",
    count: 2,
    price: 1800000,
    image: "https://media.techmaster.vn/api/static/36/bu7vt2451co5836g4l70",
    link: "/course-detail/25608/thiet-ke-lap-trinh-co-so-du-lieu",
  },
  {
    id: 3,
    title: "Lớp học Thiết kế - Lập trình cơ sở dữ liệu",
    form: "online",
    count: 5,
    price: 2000000,
    image: "https://media.techmaster.vn/api/static/36/bu7vt2451co5836g4l70",
    link: "/course-detail/25608/thiet-ke-lap-trinh-co-so-du-lieu",
  },
  {
    id: 4,
    title: "Lớp học Thiết kế - Lập trình cơ sở dữ liệu",
    form: "lab",
    count: 1,
    price: 1200000,
    image: "https://media.techmaster.vn/api/static/36/bu7vt2451co5836g4l70",
    link: "/course-detail/25608/thiet-ke-lap-trinh-co-so-du-lieu",
  },
];

const listCourses = JSON.parse(localStorage.getItem("courses")) || [];


const cartItems = document.querySelector(".cart-item");
const totalPrice = document.querySelector(".total-price");
const listCartItem = document.querySelector(".list-cart-item");

//create element with class list
const createElClasslist = (type, ...args) => {
  const ele = document.createElement(type);

  for (let arg of args) {
    ele.classList.add(arg);
  }
  return ele;
};

const save = (courses) => {
  const str = JSON.stringify(courses);
  localStorage.setItem("courses", str);
};

//create btn count number
const createButtonCount = (className) => {
  const btn = createElClasslist("button", "btn-count", className);
  const span = document.createElement("span");

  if (btn.classList.contains("btn-down")) {
    span.innerText = "-";
  } else if (btn.classList.contains("btn-up")) {
    span.innerText = "+";
  }
  btn.append(span);
  return btn;
};

const countTotalPrice = (courses) => {
  let totalPrice = courses.reduce(function (sum, course) {
    return sum + course.price * course.count;
  }, 0);

  return totalPrice;
};

//cartItemAmount
const createCartItemAmount = (course) => {
  const spanPrice = createElClasslist("span", "cart-item-quantity");
  spanPrice.innerText = ` ${course.count} `;
  const cartItemAmount = createElClasslist("div", "cart-item-amount");
  const btnDown = createButtonCount("btn-down");
  const btnUp = createButtonCount("btn-up");
  btnDown.onclick = function () {
    course.count--;
    if (course.count == 0) {
      btnDown.disabled = true;
    }
    spanPrice.innerText = ` ${course.count} `;
  };
  btnUp.onclick = function () {
    course.count++;
    btnDown.enabled = true;
    spanPrice.innerText = ` ${course.count} `;
  };

  cartItemAmount.append(btnDown);
  cartItemAmount.append(spanPrice);
  cartItemAmount.append(btnUp);
  return cartItemAmount;
};

//Cart item title
const createCartItemTitle = (course) => {
  const cartItemTitle = createElClasslist("div", "cart-item-title");

  const a = createElClasslist("a");
  a.href = course.link;
  a.innerText = course.title;
  cartItemTitle.append(a);

  const p = createElClasslist("p");
  p.innerText = `Hình thức: ${course.form}`;
  cartItemTitle.append(p);

  cartItemTitle.append(createCartItemAmount(course));

  return cartItemTitle;
};

//cart item price

const createCartItemPrice = (course) => {
  const cartItemPrice = createElClasslist("div", "cart-item-price");

  const span = createElClasslist("span", "techmaster-price");
  span.innerText = `${course.price}  đ`;
  cartItemPrice.append(span);
  return cartItemPrice;
};

function removeEl(course, courses) {
  if (confirm("Are you sure to delete this item?")) {
    const idx = courses.findIndex(function (val) {
      return val == course;
    });
    courses.splice(idx, 1);
    const el = document.querySelector(`#productId${course.id}`);
    el.remove();
  }
}

//create btn delete
const createBtnDelete = (course, courses) => {
  const btn = createElClasslist("div", "btn-delete");
  // btn.innerHTML = `<a class="btn-remove-item" style="color: #3c78e8">
  //   <i class="fa fa-trash-o"></i> Xóa</a>`;
  const a = createElClasslist("a", "btn-remove-item");
  a.style.color = "#3c78e8";
  a.innerHTML = `<i class="fa fa-trash-o"></i> Xóa`;
  btn.append(a);

  btn.onclick = () => {
    removeEl(course, courses);
    save(courses);
  };
  return btn;
};

//create cart item content
const createCartItemContent = (course, courses) => {
  const cartItemContent = createElClasslist("div", "cart-item-content");

  const div = document.createElement("div");
  const title = createCartItemTitle(course);
  const price = createCartItemPrice(course);
  div.append(title, price);
  cartItemContent.append(div, createBtnDelete(course, courses));
  return cartItemContent;
};

//create course img
const createCourseImg = (course) => {
  const courseImg = createElClasslist("div", "course-img");

  const img = document.createElement("img");
  img.src = course.image;
  img.thumbnail = "Thumbnail";
  courseImg.append(img);
  return courseImg;
};

const createCart = (course, courses) => {
  const cartItem = createElClasslist("div", "cart-item", "panel");
  cartItem.id = `productId${course.id}`;
  cartItem.dataItemId = course.id;

  const cartItemDetail = createElClasslist("div", "cart-item-detail");
  const courseImg = createCourseImg(course);
  cartItemDetail.append(
    courseImg,
    createCartItemContent(course, courses),
    createElClasslist("div", "clear")
  );
  cartItem.append(cartItemDetail);
  return cartItem;
};

const createTotalPrice = (courses) => {
  totalPrice.innerHTML = `<div class="card temporary-price-card panel">
    <div class="card-body total-info" style="font-size: 1.2rem;">
      <span>Tạm tính:</span>
      <strong style="color: #3c78e8;">
      <span class="techmaster-price temporary-price">
      ${countTotalPrice(courses)}</span> đ</strong>
    </div>
  </div>
  <button class="btn btn-blue" id="btn-move-to-payment">Tiến hành thanh toán</button>`;
};

const renderHtml = (courses) => {
  if (courses.length === 0) {
    listCartItem.innerHTML = `<h1>Khong co khoa hoc nao trong gio hang</h1>`;
  } else {
    for (let course of courses) {
      listCartItem.append(createCart(course, listCourses));
    }
    createTotalPrice(courses);
    save(courses);
  }
};

window.onload = function () {
  renderHtml(listCourses);
};
