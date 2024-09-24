const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Erigo",
    price: 20,
    colors: [
      {
        code: "black",
        img: "./asset/Erigo.png",
      },
      {
        code: "darkblue",
        img: "./asset/Erigobiru.png",
      },
    ],
  },
  {
    id: 2,
    title: "Uniqlo",
    price: 30,
    colors: [
      {
        code: "black",
        img: "./asset/Uniqlo hitam.png",
      },
      {
        code: "red",
        img: "./asset/Uniqlo Merah.png",
      },
    ],
  },
  {
    id: 3,
    title: "Bloods",
    price: 109,
    colors: [
      {
        code: "Red",
        img: "./asset/Bloods Merah.png",
      },
      {
        code: "White",
        img: "./asset/Bloods Putih.png",
      },
    ],
  },
  {
    id: 4,
    title: "Rough Neck",
    price: 129, 
    colors: [
      {
        code: "black",
        img: "./asset/Rough Neck Hitam.png",
      },
       {
        code: "white",
         img: "./asset/Rough Neck Putih.png",
    
      },
    ],
  },
  {
    id: 5,
    title: "Yesterday",
    price: 99,
    colors: [
      {
        code: "white",
        img: "./asset/Yesterday Putih.png",
      },
      {
        code: "black",
        img: "./asset/Yesterday Hitam.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
