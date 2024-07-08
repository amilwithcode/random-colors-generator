const colorConEl = document.querySelector(".color-container");

const conEl = document.querySelector(".container");


for (let index = 0; index < 30; index++) {
   const colorConEl = document.createElement("div");

   colorConEl.classList.add("color-container");
   conEl.appendChild(colorConEl);
}

randomColor();

function randomColor() {
   const chars = "0123456789abcdef";
   const colorCodeLenght = 6;
   let colorCode = "";
   for (let index = 0; index < colorCodeLenght.length; index++) {
      const randoNum = Math.floor(Math.random() * chars.length);
      color += chars.substring(randoNum, randoNum + 1);
      console.log(colorCode, randoNum);
   };

}

