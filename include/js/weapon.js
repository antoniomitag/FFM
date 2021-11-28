const weapons = [
  {
    row: 1,
    available: 1,
    name: "Minigun",
    firstStar: "Bloodied",
    secondStar: "Faster Fire Rate",
    thirdStar: "",
  },
  {
    row: 2,
    available: 0,
    name: ".50 cal",
    firstStar: "Bloodied",
    secondStar: "Faster Fire Rate",
    thirdStar: "Agility +1",
  },
];

const armor = [
  {
    row: 1,
    available: 0,
    name: "Leather Armor Left Leg",
    firstStar: "Bloodied",
    secondStar: "Faster Fire Rate",
    thirdStar: "Agility +1",
  },
  {
    row: 2,
    available: 1,
    name: "Combat Armor Chest",
    firstStar: "Bloodied",
    secondStar: "Faster Fire Rate",
    thirdStar: "Agility +1",
  },
  {
    row: 3,
    available: 1,
    name: "Combat Armor Chest",
    firstStar: "Bloodied",
    secondStar: "Faster Fire Rate",
    thirdStar: "",
  },
];

// console.log(weapons);
function listWeapons() {
  let tbody = document.getElementById("weapons");
  tbody.innerHTML += `<h2>Weapons</h2><tr><th>ID</th><th>Stars</th><th>Name</th><th>⭐</th><th>⭐⭐</th><th>⭐⭐⭐</th></tr>`;
  for (const id of weapons) {
    const [row, available, name, first, second, third] = Object.values(id);
    let star = 0;
    first ? star++ : star;
    second ? star++ : star;
    third ? star++ : star;
    let avail = "";
    let taken = "";
    if (available === 0) {
      avail = 'class="na"';
    }
    tr = `<tr ${avail}><td>${row}</td><td>${"⭐".repeat(
      star
    )}</td><td>${name}</td><td>${first}</td><td>${second}</td><td>${third}</td></tr>`;
    tbody.innerHTML += tr;
  }
  tbody.innerHTML += `<div class="spacer"></div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  listWeapons();
});
