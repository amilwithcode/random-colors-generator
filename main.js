const containerEl = document.querySelector(".container");


for (let index = 0; index < 30; index++) {
   const colorConEl = document.createElement("div");

   colorConEl.classList.add("color-container");
   containerEl.appendChild(colorConEl);
}


const colorContainerEls = document.querySelectorAll(".color-container")


generateColor()

const button = document.createElement("button");
button.innerText = "Yenilə";
button.classList.add('button')
button.addEventListener("click", generateColor);
document.body.appendChild(button);

function generateColor() {
   colorContainerEls.forEach((colorContainerEl) => {
      const newColorCode = randomColor();
      colorContainerEl.style.backgroundColor = "#" + newColorCode;
      colorContainerEl.innerText = "#" + newColorCode;
   });
}

function randomColor() {
   const chars = "0123456789abcdef";
   const colorCodeLenght = 6;
   let colorCode = "";
   for (let index = 0; index < colorCodeLenght; index++) {
      const randoNum = Math.floor(Math.random() * chars.length);
      colorCode += chars.substring(randoNum, randoNum + 1);
      console.log(colorCode)
   }
   return colorCode
}