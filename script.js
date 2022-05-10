const cartPopup = document.querySelector(".cart-popup");
const incrementCounter = document.querySelector(".plus");
const decrementCounter = document.querySelector(".minus");
const quantity = document.querySelector(".product-quantity");
const addToCartBtn = document.querySelector(".add-to-cart");
const dPrice = document.querySelector(".d-price");
const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerPopUp = document.querySelector(".popup");
const closeBtn = document.querySelector(".close");
const cartBtn = document.querySelector(".cart");
const prevBtn = document.querySelector(".p-arrow");
const nextBtn = document.querySelector(".n-arrow");
const shoesImg = document.querySelector(".shoe-img");
const shortImages = document.querySelectorAll(".img-short");
const productImagesContainer = document.querySelector(
  ".desktop-popup .product-images-container"
);
const startProductImagesContainer = document.querySelector(
  ".product-images-container"
);
const desktopPopUp = document.querySelector(".desktop-popup");
const desktopNArrow = document.getElementById("popup-n-arrow");
const desktopPArrow = document.getElementById("popup-p-arrow");
const thumbnailImg = document.querySelectorAll(".thumbnail");

let desktopPopupCloseBtn;
let deleteBtn;

let totalProduct = 0;
let showTotalCount = 0;
let currentImage = 1;
let currentThumbnail = 1;
// functions
function init() {
  cartPopup.innerHTML = `
  <h2 class="cart-title">Cart</h2>
      <hr />
  <p class="empty">Your cart is empty.</p>`;
}

init();

// event listeners
incrementCounter.addEventListener("click", function () {
  totalProduct++;
  quantity.textContent = totalProduct;
});

decrementCounter.addEventListener("click", function () {
  if (totalProduct < 1) {
    totalProduct = 0;
  } else {
    totalProduct--;
  }
  quantity.textContent = totalProduct;
});

addToCartBtn.addEventListener("click", function () {
  showTotalCount += totalProduct;
  if (showTotalCount > 0) {
    cartPopup.innerHTML = `
  <h2 class="cart-title">Cart</h2>
  <hr />
  <div class="products flex items-center">
    <div class="product-cart-img">
      <img src="images/image-product-1.jpg" alt="" />
    </div>
    <div class="product-cart-name">
      <span>Autumn Limited Edition...</span>
      <p class="product-quantity">
        <span class="price-quantity">$${Number(
          dPrice.textContent.substring(1)
        )} * ${showTotalCount}</span>
        <span class="total-price">$${
          Number(dPrice.textContent.substring(1)) * showTotalCount
        }</span>
      </p>
    </div>
    <img src="images/icon-delete.svg" alt="" class="delete" />
  </div>
  <button class="checkout">Checkout</button>
  `;
  }
  deleteBtn = document.querySelector(".delete");
  deleteBtn.addEventListener("click", function () {
    totalProduct = +quantity.textContent;
    showTotalCount = 0;
    init();
  });
});

hamburgerMenu.addEventListener("click", function () {
  hamburgerPopUp.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  hamburgerPopUp.classList.remove("active");
});

cartBtn.addEventListener("click", function () {
  cartPopup.classList.toggle("active");
});

prevBtn.addEventListener("click", function () {
  if (currentImage < 2) {
    currentImage = 1;
  } else {
    currentImage--;
  }
  shoesImg.src = `images/image-product-${currentImage}.jpg`;
});

nextBtn.addEventListener("click", function () {
  if (currentImage > 3) {
    currentImage = 4;
  } else {
    currentImage++;
  }
  shoesImg.src = `images/image-product-${currentImage}.jpg`;
});

startProductImagesContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("img-short")) {
    const targetSrc = target.getAttribute("src");
    console.log(targetSrc);
    const dataAttribute = target.dataset.img;
    shoesImg.src = `${targetSrc.substring(0, 22)}${targetSrc.substring(
      32,
      36
    )}`;
    [...shortImages].forEach((item) => {
      if (item.dataset.img == dataAttribute) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
});

shoesImg.addEventListener("click", function () {
  desktopPopUp.classList.add("active");

  desktopPopupCloseBtn = document.querySelector(
    ".desktop-popup .product-img .close"
  );

  desktopPopupCloseBtn.addEventListener("click", function () {
    desktopPopUp.classList.remove("active");
  });
});

// desktop popup
const thumbnailParent = document.querySelector(".thumbnail-parent");
desktopNArrow.addEventListener("click", function () {
  if (currentThumbnail > 3) {
    currentThumbnail = 4;
  } else {
    currentThumbnail++;
  }
  [...thumbnailImg].forEach((img) => {
    if (img.dataset.curimg == currentThumbnail) {
      img.classList.add("active");
      thumbnailParent.src = `${img.getAttribute("src").substring(0, 22)}${img
        .getAttribute("src")
        .substring(32, 36)}`;
      console.log(thumbnailParent.src);
    } else {
      img.classList.remove("active");
    }
  });
});

desktopPArrow.addEventListener("click", function () {
  if (currentThumbnail < 2) {
    currentThumbnail = 1;
  } else {
    currentThumbnail--;
  }
  [...thumbnailImg].forEach((img) => {
    if (img.dataset.curimg == currentThumbnail) {
      img.classList.add("active");
      thumbnailParent.src = `${img.getAttribute("src").substring(0, 22)}${img
        .getAttribute("src")
        .substring(32, 36)}`;
      console.log(thumbnailParent.src);
    } else {
      img.classList.remove("active");
    }
  });
});

productImagesContainer.addEventListener("click", function (e) {
  const target = e.target;

  if (target.classList.contains("thumbnail")) {
    let targetDataSet = target.dataset.curimg;
    [...thumbnailImg].forEach((img) => {
      if (img.dataset.curimg == targetDataSet) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
    thumbnailParent.src = `${target
      .getAttribute("src")
      .substring(0, 22)}${target.getAttribute("src").substring(32, 36)}`;
  }
});

console.log(startProductImagesContainer);
