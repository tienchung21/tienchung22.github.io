"use strict";

//======================================================================DATA===================================================================================================
const product1 = {
  name: "Vest Nam Bucket Suri Kars 8 PHILADELPHIA",
  type: "vest",
  price: 100.00,
  image: "../img//product/vest2.jpg",
};

const product2 = {
  name: "Vest type Kars 9 philadel handbag Sinzgetiera",
  type: "vest",
  price: 200.00,
  image: "../img//product/vest3.webp",
};

const product3 = {
  name: "Max vest3 2394 Kars 8 PHILAD gouheliam",
  type: "vest",
  price: 300.00,
  image: "../img//product/vest4.jpg",
};

const product4 = {
  name: "Washington Vest buckets tuasvoice vocalnoe",
  type: "vest",
  price: 400.00,
  image: "../img/product/vest5.jpg",
};

const product5 = {
  name: "Vest 90 handmade KOREA version 1990",
  type: "vest",
  price: 500.00,
  image: "../img//product/vest6.jpg",
};

const product6 = {
  name: "Vest 90 handmade America version 1890",
  type: "vest",
  price: 100.00,
  image: "../img//product/vest7.png",
};

const product7 = {
  name: "Vest best seller ENGLAND KE1U89 1990",
  type: "vest",
  price: 200.00,
  image: "../img//product/vest8.jpg",
};

const product8 = {
  name: "KOIRS Coruroy WESTERNS vest 2000 KARS9999",
  type: "vest",
  price: 300.00,
  image: "../img//product/vest9.jpg",
};

const product9 = {
  name: "Black vest WESTERNS cottont type soft",
  type: "vest",
  price: 400.00,
  image: "../img//product/vest10.jpg",
};

const product10 = {
  name: "Black vest WESTERNS cottont type Coral",
  type: "vest",
  price: 500.00,
  image: "../img//product/vest11.jpg",
};
const product11 = {
  name: "Black vest WESTERNS cottont type Cotton",
  type: "vest",
  price: 100.00,
  image: "../img//product/vest12.jpg",
};
const product12 = {
  name: "Blazer WESTER  kernels vest 778899",
  type: "vest",
  price: 200.00 ,
  image: "../img//product/vest13.jpg",
};
const listProduct = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
];

// console.log(listProduct);

localStorage.setItem("listProduct", JSON.stringify(listProduct));
// const listProduct = JSON.parse(localStorage.getItem("listProduct"));
//==========================================================================================================================================================================

const products = document.querySelector(".product-list");

// Load list product
const displayProduct = function () {
  products.innerHTML = "";
  const productList = listProduct.forEach((product) => {
    const html = ` 

      <div class="product-box">
        <img src="${product.image}" class="product-img" />
        <a href="product-detail.html" class="product-link">${product.name}</a>
        <div class="product-row">
          <span class="product-price">$${product.price}</span>
          <a class="product-cart">
            <i class="product-add-cart fa-solid fa-cart-plus"></i>
            
          </a>
      </div>
  </div>`;

    products.insertAdjacentHTML("afterbegin", html);
  });
};

displayProduct();

const product__list = document.querySelector(".product-list");
const product__item = document.querySelectorAll(".product-box");
const product__name = document.querySelector(".product-link");
const product__price = document.querySelector(".product-price");

const selectedProduct = {};

product__item.forEach((product) => {
  product.addEventListener("click", function () {
    selectedProduct.name = product.querySelector(".product-link").innerHTML;
    selectedProduct.price = product.querySelector(".product-price").innerHTML;
    selectedProduct.image = product
      .querySelector(".product-img")
      .getAttribute("src");
    // console.log(
    //   (selectedProduct.image = product
    //     .querySelector(".product-img")
    //     .getAttribute("src"))
    // );

    saveData();
  });
});

function saveData() {
  localStorage.setItem("name", selectedProduct.name);
  localStorage.setItem("image", selectedProduct.image);
  localStorage.setItem("price", selectedProduct.price);
}
////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////

const btnAddToCart = document.querySelectorAll(".product-cart");
let cartList = JSON.parse(localStorage.getItem("carts"));
if (cartList == null) {
  cartList = [];
}
console.log(cartList);

btnAddToCart.forEach((btn) => {
  btn.addEventListener("click", addToCartClicked);
});

function checkCartProduct(productItem) {
  for (let i = 0; i < cartList.length; i++) {
    // console.log(cartList[i].name == String(productItem.name));
    // console.log(cartList[i].price == Number(productItem.price));
    // console.log(String(cartList[i].productImg) == String(productItem.img));
    // console.log(String(cartList[i].img));
    // console.log(productItem.img);

    if (
      cartList[i].name == String(productItem.name) &&
      cartList[i].price == Number(productItem.price) &&
      String(cartList[i].img) == String(productItem.img)
    ) {
      return false;
    }
  }
  return true;
}

function addToCartClicked(event) {
  var btn = event.target;
  var productItem = btn.parentElement.parentElement.parentElement;
  var productName = productItem.querySelector(".product-link").innerHTML;
  // console.log(productName);
  var productPrice = productItem
    .querySelector(".product-price")
    .innerHTML.slice(1);
  // console.log(productPrice);
  var productImg = productItem
    .querySelector(".product-img")
    .getAttribute("src");
  var cartProduct = productInformation(productName, productPrice, productImg);

  if (cartList.length == 0) {
    cartList.push(cartProduct);
    localStorage.setItem("carts", JSON.stringify(cartList));
    alert("Add suscessfully");
    return true;
  }
  checkCartProduct(cartProduct);
  let check = checkCartProduct(cartProduct);
  console.log(checkCartProduct(cartProduct));
  if (checkCartProduct(cartProduct) == false) {
    alert("You have added this product already");
  } else {
    alert("Added sucessfully");
    cartList.push(cartProduct);
    localStorage.setItem("carts", JSON.stringify(cartList));
  }
  // cartList.push(cartProduct);
  // console.log(cartList);
  // console.log(cartList);
  // localStorage.setItem("carts", JSON.stringify(cartList));
}

function productInformation(productName, productPrice, productImg) {
  var productCart = {};
  productCart.name = productName;
  productCart.price = productPrice;
  productCart.img = productImg;
  return productCart;
}
