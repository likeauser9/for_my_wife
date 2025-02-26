const textElement = document.getElementById("text");
const text = "Женя, я тебя люблю❤";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  } else {
    textElement.style.borderRight = "none";
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
