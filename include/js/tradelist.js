"use strict";

const weaponsList = document.getElementById("weapons");
const userList = document.getElementById("user");
const usernames = document.getElementsByClassName("username");
const mainTitle = document.getElementById("main-title");

const descriptionsWeaponsShort = {
  "Anti-Armor": "AA",
  "Aristocrat's": "Ari",
  "Assassin's": "Ass",
  "Berserker's": "Ber",
  Bloodied: "B",
  "Executioner's": "Exe",
  "Exterminator's": "Ext",
  Furious: "F",
  "Ghoul Slayer": "Gh",
  "Gourmand's": "G",
  "Hunter's": "H",
  Instigating: "I",
  "Juggernaut's": "Jugg",
  "Junkie's": "J",
  "Mutant's": "M",
  "Mutant Slayer's": "MS",
  Nocturnal: "Noc",
  "Suppressor's": "S",
  "Troubleshooter's": "T",
  "Vampire's": "V",
  "Zealot's": "Z",
  "Medic's": "Med",
  Quad: "Q",
  "Stalker's": "St",
  "Two Shot": "TS",
  Cursed: "CURSED",
  "+25% damage while aiming": "hit",
  "25% faster fire rate": "ffr",
  "Bashing damage increased by 50%": "bash",
  "+50% Critical Shot Damage": "50c",
  "+50% VATS hit chance": "50h",
  "+50% limb damage": "50l",
  "Bullets explode for area damage": "E",
  "Last Shot": "last",
  "Replenish AP with each kill": "15",
  "15% critical fill": "15crit",
  "15% faster reload": "15r",
  "25% less V.A.T.S. Action Point cost": "25",
  "250 DR while reloading": "250",
  "50 DR while aiming": "50dr",
  "90% reduced weight": "90",
  "+1 Agility": "+1A",
  "Breaks 50% slower": "break",
  "Hits have a chance to generate a Stealth Field": "gho",
  "Faster movement speed while aiming": "ms",
  "+1 Perception": "+1P",
};

const users = {
  mortetm: {
    user: "MorteTM",
    character: "Alexander",
    items: [
      {
        category: "Ranged Weapons",
        name: "Pump Action Shotgun",
        firstStar: "Quad",
        secondStar: "Bashing damage increased by 50%",
        thirdStar: "Hits have a chance to generate a Stealth Field",
        available: 0,
      },

      {
        category: "Ranged Weapons",
        name: "Railway Rifle",
        firstStar: "Gourmand's",
        secondStar: "Replenish AP with each kill",
        thirdStar: "90% reduced weight",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "Gatling Gun",
        firstStar: "Gourmand's",
        secondStar: "Bullets explode for area damage",
        thirdStar: "25% less V.A.T.S. Action Point cost",
        available: 1,
        featured: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Anti-Armor",
        secondStar: "Bashing damage increased by 50%",
        thirdStar: "+1 Agility",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Anti-Armor",
        secondStar: "+50% VATS hit chance",
        thirdStar: "25% less V.A.T.S. Action Point cost",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Suppressor's",
        secondStar: "Bullets explode for area damage",
        thirdStar: "Faster movement speed while aiming",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Mutant Slayer's",
        secondStar: "25% faster fire rate",
        thirdStar: "15% faster reload",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Executioner's",
        secondStar: "Bullets explode for area damage",
        thirdStar: "25% less V.A.T.S. Action Point cost",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Bloodied",
        secondStar: "+25% damage while aiming",
        thirdStar: "25% less V.A.T.S. Action Point cost",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Mutant Slayer's",
        secondStar: "25% faster fire rate",
        thirdStar: "15% faster reload",
        available: 1,
      },
    ],
  },

  narwindiltm: {
    user: "NarwindilTM",
    character: "Alex",
    items: [
      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Anti-Armor",
        secondStar: "+50% VATS hit chance",
        thirdStar: "25% less V.A.T.S. Action Point cost",
        available: 1,
        featured: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Suppressor's",
        secondStar: "Bullets explode for area damage",
        thirdStar: "Faster movement speed while aiming",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Mutant Slayer's",
        secondStar: "25% faster fire rate",
        thirdStar: "15% faster reload",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Executioner's",
        secondStar: "Bullets explode for area damage",
        thirdStar: "25% less V.A.T.S. Action Point cost",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Bloodied",
        secondStar: "+25% damage while aiming",
        thirdStar: "25% less V.A.T.S. Action Point cost",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Mutant Slayer's",
        secondStar: "25% faster fire rate",
        thirdStar: "15% faster reload",
        available: 1,
      },
    ],
  },

  zeddthered: {
    user: "ZeddTheRED",
    character: " ",
    items: [
      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Anti-Armor",
        secondStar: "+50% VATS hit chance",
        thirdStar: "25% less V.A.T.S. Action Point cost",
        available: 1,
        featured: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Suppressor's",
        secondStar: "Bullets explode for area damage",
        thirdStar: "Faster movement speed while aiming",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Mutant Slayer's",
        secondStar: "25% faster fire rate",
        thirdStar: "15% faster reload",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Executioner's",
        secondStar: "Bullets explode for area damage",
        thirdStar: "25% less V.A.T.S. Action Point cost",
        available: 1,
        featured: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Bloodied",
        secondStar: "+25% damage while aiming",
        thirdStar: "25% less V.A.T.S. Action Point cost",
        available: 1,
      },

      {
        category: "Ranged Weapons",
        name: "The Fixer",
        firstStar: "Mutant Slayer's",
        secondStar: "25% faster fire rate",
        thirdStar: "15% faster reload",
        available: 1,
      },
    ],
  },
};
//runs update inventory, sets the list of users in the top menu, adds event listeners to all of those
function initializePage() {
  inventoryUpdate(users);
  Object.values(users).forEach(function (user) {
    userList.insertAdjacentHTML(
      "beforeend",
      `<li class="username">${user.user}</li>`
    );
  });
  Array.from(usernames).forEach(function (li) {
    li.addEventListener("click", loadData);
  });
}
//adds number of stars (depending on number of filled stars properties) and adds the link to the image depending on the name of the weapon
function inventoryUpdate(inventory) {
  Object.values(inventory).forEach(function (user) {
    Object.values(user.items).forEach(function (item) {
      if (item.thirdStar) item.stars = 3;
      else if (item.secondStar) item.stars = 2;
      else item.stars = 1;
      item.image = item.name.toLowerCase().split(" ").join("").concat(".png");
    });
  });
}

// Function that loads data when called from the event listener on top of the page
function loadData() {
  const user = this.innerText;
  displayItems(users[user.toLowerCase()]);
}

// function updateInventory(inventory) {
//   //count the stars, get images
//   inventory.items.forEach(function (item) {
//     if (item.thirdStar) item.stars = 3;
//     else if (item.secondStar) item.stars = 2;
//     else item.stars = 1;
//     item.image = item.name.toLowerCase().split(" ").join("").concat(".png");
//   });
// }

// Create template literal and populate the weapons list with weapons
function displayItems(user) {
  document.title = `${user.user} Trade List`;
  //weaponsList.innerHTML = "";
  user.items.forEach(function (item) {
    const short = `${descriptionsWeaponsShort[item.firstStar]}/${
      item.secondStar ? descriptionsWeaponsShort[item.secondStar] : ""
    }/${item.thirdStar ? descriptionsWeaponsShort[item.thirdStar] : ""}`;
    let stars = 1;
    if (item.secondStar) stars = 2;
    if (item.thirdStar) stars = 3;
    const html = `
    <div class="card__side card--front${item.featured ? " featured" : ""}${
      item.available ? "" : " hidden"
    }">
    <div class="item">
    <div class="featured-star">♥</div>
  <div class="stars">${"☆".repeat(stars)} </div>
  <div class="name">${short} ${item.name}</div>
  <div class="stars"></div>
    <div class="image">
  <img src="/include/img/weapons/${item.image}"></div>
</div></div>
<div class="card__side card--back${item.featured ? " featured" : ""}${
      item.available ? "" : " hidden"
    }">
<div class="item${item.featured ? " featured" : ""}${
      item.available ? "" : " hidden"
    }">
<div class="1st star">${item.firstStar}</div>
  <div class="2nd star">${item.secondStar}</div>
  <div class="3rd star">${item.thirdStar}</div>
  </div></div>
`;
    mainTitle.innerHTML = `${user.user}'s Trading List`;
    //weaponsList.insertAdjacentHTML("beforeend", html);
  });
}

initializePage();

displayItems(users["mortetm"]);
