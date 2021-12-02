"use strict";
const images = {
  "Cloudchaser87-01": "Captain Cosmos and musical chairs - by CloudChaser87",
  "Cloudchaser87-02": "The Winner takes it all - by CloudChaser87",
  "Cloudchaser87-04":
    "Captain Cosmos and the pose of the warrior - by CloudChaser87",
  "Dravgvr-01": "",
  "Dravgvr-02": "",
  "Dravgvr-03": "",
  "Dravgvr-04": "",
  "Dravgvr-05": "",
  "Dravgvr-06": "",
  "Dravgvr-07": "",
  "MorteTM-01": "",
  "MorteTM-02": "",
  "MorteTM-03": "",
  "MorteTM-04": "",
  "MorteTM-05": "",
  "MorteTM-06": "",
  "MorteTM-07": "",
  "MorteTM-08": "",
  "MorteTM-09": "",
  "MorteTM-10": "",
  "MorteTM-11": "",
  "MorteTM-12": "",
  "MorteTM-13": "",
  "MorteTM-14": "",
  "MorteTM-15": "",
  "MorteTM-16": "",
  "MorteTM-17": "",
  "ZeddtheRED-01": "Welcome Zedd - by ZeddtheRed",
  "ZeddtheRED-01": "Trading plans - by ZeddtheRed",
  "ZeddtheRED-02": "Crafting time in the shelter! - by ZeddtheRed",
  "ZeddtheRED-03": "Jammin' in the wastes - by ZeddtheRed",
  "ZeddtheRED-04": "The masterfully made reward url board - by ZeddtheRed",
  "ZeddtheRED-05": "Costume contest! - by ZeddtheRed",
  "ZeddtheRED-06":
    "Open mic - Leviathan reading poetry and singing - by ZeddtheRed",
  "ZeddtheRED-07": "A round of applause for our host! - by ZeddtheRed",
};

/* OPEN IMAGE IN VIEWER */
function viewBigger(image) {
  document.body.classList.toggle("overlay-on");
  document.getElementById("overlay").classList.remove("hide");
  document.getElementById("overlay-image").src = image.src;
  document.getElementById("overlay-text").innerHTML = image.dataset.title;
  window.currImg = image.dataset.name;
}

/*CLOSE VIEWER function*/

function closeViewer() {
  document.body.classList.remove("overlay-on");
  document.getElementById("overlay").classList.add("hide");
}
/*CLOSE VIEWER ON ESC*/
function closeBigger(keypressed) {
  if (keypressed.code === "Escape") {
    closeViewer();
  }
}
document.addEventListener("keydown", closeBigger);

/*CLOSE VIEWER ON X */
document.getElementById("close-button").addEventListener("click", function () {
  closeViewer();
});

/*CLOSE ON CLICK OUTSIDE*/
document.getElementById("overlay").addEventListener("click", closeOnClick);

function closeOnClick(event) {
  if (event.target.id === "overlay") {
    closeViewer();
  }
}
/*Generate gallery*/

let imgString = "";
for (const [name, title] of Object.entries(images)) {
  imgString += `<li><img class="click" data-title="${title}" data-name="${name}" onclick="viewBigger(this)" src="include/img/gallery/2021-11-28/${name}.jpg"/></li>`;
}

document.getElementById("gallery").innerHTML = imgString;

let currImg = "";

/*gallery scroll*/
const next = "next";
let imageKeys = Object.keys(images);
let imageDesc = Object.values(images);

function changeSlide(direction) {
  /*find this image index*/
  let dir = 1;
  direction === left ? (dir = 1) : (dir = -1);
  let currKey = imageKeys.indexOf(window.currImg);
  /*check if next image exists*/
  if (imageKeys[currKey - dir]) {
    /*switch to next image*/
    window.currImg = imageKeys[currKey - dir];
    currKey -= dir;
    document.getElementById(
      "overlay-image"
    ).src = `include/img/gallery/2021-11-28/${window.currImg}.jpg`;
    document.getElementById("overlay-text").innerHTML = imageDesc[currKey];
  }
}

document.getElementById("left").addEventListener("click", function () {
  changeSlide(left);
});
document.getElementById("right").addEventListener("click", function () {
  changeSlide(right);
});
