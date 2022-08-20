"use strict";

// Steps of Local Storage:

// 1. Setting Items
//    1a. JSON.stringify(variable)
//    1a. localStorage.setItem("key", "value")

// 2. Getting Items
//    2a. localStorage.getItem("key")
//    2b. JSON.parse(variable)



// settings to use with local storage
let settings = {
  darkMode: false,
  open: null,
  comment: "",
};

let mode = document.getElementsByClassName("mode");
let details = document.getElementsByTagName("details");
let commentBox = document.getElementById("commentBox");
let openDetail = null;

function enterDarkMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("darkButton");
  body.classList.remove("light");
  welcome.classList.remove("light");
  body.classList.add("dark");
  welcome.classList.add("dark");
  button.setAttribute("checked", "checked");
  settings.darkMode = true;

  console.log(settings);
  setSettings();
}

function enterLightMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("lightButton");
  body.classList.remove("dark");
  welcome.classList.remove("dark");
  body.classList.add("light");
  welcome.classList.add("light");
  button.setAttribute("checked", "checked");
  settings.darkMode = false;

  console.log(settings);
  setSettings();
}

// add event listener to dark mode form
for (let i = 0; i < mode.length; i++) {
  mode[i].addEventListener("click", function () {
    // change styling of background and text color
    if (this.value === "dark") {
      enterDarkMode();
    }
    if (this.value === "light") {
      enterLightMode();
    }
  });
}

// add event listener to all details
for (let i = 0; i < details.length; i++) {
  details[i].addEventListener("click", function () {

    if (settings.open === i) {
      settings.open = null
      setSettings();
      return
    }
    openDetail = i;
    settings.open = i;
    setSettings();


    for (let j = 0; j < details.length; j++) {
      if (j !== openDetail) {
        details[j].removeAttribute("open");
      }
    }
  });
}



// This saves the settings to local storage
function setSettings() {
  let stringify = JSON.stringify(settings);
  localStorage.setItem("settings", stringify);
}



// Loading from local storage
function getSettings() {
  let getSettings = localStorage.getItem("settings");
  if (getSettings) {
    settings = JSON.parse(getSettings);
  }
}



function pageLoad() {
  let savedSettings = localStorage.getItem("settings");
  if (!savedSettings) {
    return;
  }

  // saved settings exists, then reassign global settings
  settings = JSON.parse(savedSettings);
  if (settings.darkMode) {
    enterDarkMode();
  } else {
    enterLightMode();
  }

  if (settings.open !== null) {
    details[settings.open].setAttribute("open", "open")
  }
}

pageLoad();

