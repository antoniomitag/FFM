"use strict";
const images = {
  "Cloudchaser87-01": "Captain Cosmos and musical chairs - by CloudChaser87",
  "Cloudchaser87-02": "The Winner takes it all - by CloudChaser87",
  "Cloudchaser87-04":
    "Captain Cosmos and the pose of the warrior - by CloudChaser87",
  "Dravgvr-01": "A game of Overseer says! - by Dravgvr",
  "Dravgvr-02": "Overseer says: JUMP!  - by Dravgvr",
  "Dravgvr-03": "Musical chares was a blast!  - by Dravgvr",
  "Dravgvr-04": "Two chairs left - it's getting tense!  - by Dravgvr",
  "Dravgvr-05": "Shameless advertisement.  - by Dravgvr",
  "Dravgvr-06": "Bun's treasure hunt begins.  - by Dravgvr",
  "Dravgvr-07": "AFKing on the stage.  - by Dravgvr",
  "MorteTM-01": "Fireworks while waiting on rewards. - by MorteTM",
  "MorteTM-02": "More musical chairs.  - by MorteTM",
  "MorteTM-03": "Musical chairs arena.  - by MorteTM",
  "MorteTM-04": "Only a few left.  - by MorteTM",
  "MorteTM-05":
    "NarwindilTM in the back making sure nobody misbehaves.  - by MorteTM",
  "MorteTM-06": "Costumed website promotion. - by MorteTM",
  "MorteTM-07": "I think I dropped my clip.  - by MorteTM",
  "MorteTM-08": "Zedd being dapper as all hell.  - by MorteTM",
  "MorteTM-09": "The Easter Egg hunt begins! -  - by MorteTM",
  "MorteTM-10": "People reading the first clue.  - by MorteTM",
  "MorteTM-11": "More people reading clues.  - by MorteTM",
  "MorteTM-12": "You lose. Or do you?  - by MorteTM",
  "MorteTM-13": "Poetry slam.  - by MorteTM",
  "MorteTM-14": "Leviathan's singing voice is amazing.  - by MorteTM",
  "MorteTM-15": "Hanging out.  - by MorteTM",
  "MorteTM-16": "Moments before a baseball bat came out.  - by MorteTM",
  "MorteTM-17": "Hi!  - by MorteTM",
  "ZeddtheRED-01": "Welcome Zedd - by ZeddtheRed",
  "ZeddtheRED-02": "Trading plans - by ZeddtheRed",
  "ZeddtheRED-03": "Crafting time in the shelter! - by ZeddtheRed",
  "ZeddtheRED-04": "Jammin' in the wastes - by ZeddtheRed",
  "ZeddtheRED-05": "The masterfully made reward url board - by ZeddtheRed",
  "ZeddtheRED-06": "Costume contest! - by ZeddtheRed",
  "ZeddtheRED-07":
    "Open mic - Leviathan reading poetry and singing - by ZeddtheRed",
  "ZeddtheRED-08": "A round of applause for our host! - by ZeddtheRed",
};

let currImg = ""; // sets current image so the slider knows where to go on next/prev
let imgString = ""; // sets current image string so we can get the data from the object
const next = "next";
let imageKeys = Object.keys(images); // array of filenames
let imageDesc = Object.values(images); // array of descriptions

/* OPEN IMAGE IN VIEWER */
function viewBigger(image) {
  document.body.classList.toggle("overlay-on");
  document.getElementById("overlay").classList.remove("hide");
  document.getElementById("overlay-image").src = image.src;
  document.getElementById("overlay-text").innerHTML = image.dataset.title;
  window.currImg = image.dataset.name; // sets currImg to the one clicked
  hideArrows();
}

/*CLOSE VIEWER function*/
function closeViewer() {
  document.body.classList.remove("overlay-on");
  document.getElementById("overlay").classList.add("hide");
}

/*Listen to keydown and close viewer on esc, or switch images on arrow keys*/

function onKeyDown(keypressed) {
  if (keypressed.code === "Escape") {
    closeViewer();
  } else if (document.body.classList.contains("overlay-on")) {
    if (keypressed.code == "ArrowLeft") {
      changeSlide(left);
      hideArrows();
    } else if (keypressed.code == "ArrowRight") {
      changeSlide(right);
      hideArrows();
    }
  }
}

/* On keydown on document trigger function onKeyDown */
document.addEventListener("keydown", onKeyDown);

/*CLOSE ON CLICK OUTSIDE*/
document.getElementById("overlay").addEventListener("click", closeOnClick);

function closeOnClick(event) {
  if (event.target.id === "overlay") {
    closeViewer();
  }
}

/*Generate gallery*/
for (const [name, title] of Object.entries(images)) {
  imgString += `<li><img class="click" data-title="${title}" data-name="${name}" onclick="viewBigger(this)" src="include/img/gallery/2021-11-28/${name}.jpg"/></li>`;
}

document.getElementById("gallery").innerHTML = imgString;

/*gallery scroll*/
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
  hideArrows();
}

function hideArrows() {
  if (imageKeys.indexOf(window.currImg) === 0) {
    document.getElementById("left").style.display = "none";
    document.getElementById("right").style.display = "flex";
  } else if (imageKeys.indexOf(window.currImg) === imageKeys.length - 1) {
    document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "flex";
  } else {
    document.getElementById("left").style.display = "flex";
    document.getElementById("right").style.display = "flex";
  }
}
