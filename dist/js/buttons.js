// This is for the buttons to appear and dissapear based on the scroll area

// selects the about section where the background is white
const aboutSection = document.querySelector("#about-me");

const button = document.querySelector(".appear");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= aboutSection.offsetTop - 200) {
    button.style.opacity = "1";
    button.style.animation = "drag 1.25s ease-in-out 1";
  } else {
    button.style.opacity = "0";
  }
});

// ------------- This is the code for the toggling of the hamburger menu ------------

// this is the div that holds the state of toggled
const hamMenu = document.querySelector(".menu");

// this selects each line that makes up the hamburger menu
const menuLines = document.querySelectorAll(".menu__bar");

// this is the background that will cover the page
const menuNav = document.querySelector(".nav-wrapper");

// this will display the nav links within the menu
const menuContent = document.querySelector(".nav-content");

/* this function is to show the elements when the click event on the hamburger
   are activated */
const toggled = function () {
  hamMenu.classList.add("toggled");
  menuLines.forEach(function (line) {
    line.style["background-color"] = "#fff";
  });
  menuLines[0].style["transform"] = "rotate(-45deg) translate(-7.2px, 5px)";
  menuLines[1].style["opacity"] = "0";
  menuLines[2].style["transform"] = "rotate(45deg) translate(-7.2px, -5.5px)";
  menuNav.style["height"] = "100vh";
  menuContent.style["display"] = "block";
};

/* this function is to make the elements disappear when the click event on the hamburger
   are activated to exit */
const untoggled = function () {
  hamMenu.classList.remove("toggled");
  menuLines[0].style["transform"] = "rotate(0deg) translate(0px,0px)";
  menuLines[1].style["opacity"] = "1";
  menuLines[2].style["transform"] = "rotate(0deg) translate(0px, 0px)";
  menuNav.style["height"] = "0";
  menuContent.style["display"] = "none";

  if (window.pageYOffset >= aboutSection.offsetTop) {
    menuLines.forEach(function (line) {
      line.style["background-color"] = "#87ceeb";
    });
  }
};

// this event checks to see whether the menu has been clicked
hamMenu.addEventListener("click", function () {
  if (!this.classList.contains("toggled")) {
    toggled();
  } else {
    untoggled();
  }
});

/* This event checks the position of the scroll to change the burgers menus
   color if the background is white */
window.addEventListener("scroll", () => {
  if (
    window.pageYOffset >= aboutSection.offsetTop - 25 &&
    !hamMenu.classList.contains("toggled")
  ) {
    menuLines.forEach(function (line) {
      line.style["background-color"] = "#87ceeb";
    });
  } else {
    menuLines.forEach(function (line) {
      line.style["background-color"] = "#fff";
    });
  }
});

// This is the links within the menu, once clicked the menu should disappear
const hamMenuLink = document.querySelectorAll(".a-menu");

/* the following events check to see if there link has been toggled so that the 
   screen can disappear */
hamMenuLink[0].addEventListener("click", function () {
  this.classList.add("toggled");
  if (this.classList.contains("toggled")) {
    untoggled();
  }
});
hamMenuLink[1].addEventListener("click", function () {
  this.classList.add("toggled");
  if (this.classList.contains("toggled")) {
    untoggled();
  }
});
hamMenuLink[2].addEventListener("click", function () {
  this.classList.add("toggled");
  if (this.classList.contains("toggled")) {
    untoggled();
  }
});
