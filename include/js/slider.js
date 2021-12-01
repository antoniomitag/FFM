const images = {
  Steph1: "Captain Cosmos and musical chairs - by CloudChaser87",
  Steph3: "The Winner takes it all - by CloudChaser87",
  Steph4: "Captain Cosmos and the pose of the warrior - by CloudChaser87",
  Zed1: "Welcome Zedd - by ZeddtheRed",
  Zed2: "Trading plans - by ZeddtheRed",
  Zed3: "Crafting time in the shelter! - by ZeddtheRed",
  Zed4: "Jammin' in the wastes - by ZeddtheRed",
  Zed5: "The masterfully made reward url board - by ZeddtheRed",
  Zed6: "Costume contest! - by ZeddtheRed",
  Zed7: "Open mic - Leviathan reading poetry and singing - by ZeddtheRed",
  Zed8: "A round of applause for our host! - by ZeddtheRed",
};

/* OPEN IMAGE IN VIEWER */
function viewBigger(image) {
  document.body.classList.toggle("overlay-on");
  document.getElementById("overlay").classList.remove("hide");
  document.getElementById("overlay-image").src = image.src;
  document.getElementById("overlay-text").innerHTML = image.dataset.title;
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

/*
const hideElement = document.getElementById("overlay");
document.onclick = function (e) {
  if (e.target.id !== "hideElement") {
    document.body.classList.remove("overlay-on");
    document.getElementById("overlay").classList.add("hide");
  }
};
*/
/*Generate gallery*/

let imgString = "";
for (const [name, title] of Object.entries(images)) {
  imgString += `<li><img class="click" data-title="${title}" onclick="viewBigger(this)" src="include/img/gallery/2021-11-28/${name}.jpg"/></li>`;
}

document.getElementById("gallery").innerHTML = imgString;
