// event handlers for on click nav bars (got to clear display of all the other elements

let pos = 0;
let speed = 250;
let string = document.getElementById("welcome").innerText;

document.getElementById("welcome").innerText = "";

function type() {
  if (pos < string.length) {
    document.getElementById("welcome").innerText += string.charAt(pos);
    pos++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, speed);
  }
}

setTimeout(type, speed);

function erase() {
  if (pos >= string.length) {
    let temp = string.substring(0, pos);
    document.getElementById("welcome").innerText = temp;
    pos--;
    setTimeout(erase, speed);
  }
}
