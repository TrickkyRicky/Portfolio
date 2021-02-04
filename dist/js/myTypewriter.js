// This is for the header content to type out from the array

const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

TypeWriter.prototype.type = function () {
  const currentWord = this.wordIndex % this.words.length;
  const fullTxt = this.words[currentWord];

  // check if deleting remove character else add characters
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // insert text to screen
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // typing speed
  let typeSpeed = 180;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // checks to see
  if (!this.isDeleting && this.txt === fullTxt) {
    // setting the speed to the wait value
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    // chanfe to new word
    this.wordIndex++;
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};

// runs when dom loads
document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  new TypeWriter(txtElement, words, wait);
}
