"use strict";

const meleeWeapons = [
  {
    row: 1,
    available: 1,
    name: "Bowie Knife",
    firstStar: "+50% damage to Humans",
    secondStar: "40% faster swing speed",
    thirdStar: "25% less V.A.T.S. Action Point cost",
  },

  {
    row: 2,
    available: 1,
    name: "Cultist Blade",
    firstStar: "Double damage if target is full health",
    secondStar: "40% faster swing speed",
    thirdStar: "Your V.A.T.S. critical meter fills 15% faster",
  },

  {
    row: 3,
    available: 1,
    name: "Cultist Blade",
    firstStar: "Damage increases as health increases",
    secondStar: "40% more power attack damage",
    thirdStar: "Your V.A.T.S. critical meter fills 15% faster",
  },

  {
    row: 4,
    available: 1,
    name: "Cultist Dagger",
    firstStar: "Lower Damage Resistance increases damage dealt",
    secondStar: "Reflects 50% of melee damage back while blocking",
    thirdStar: "+1 Agility",
  },

  {
    row: 5,
    available: 1,
    name: "Cultist Dagger",
    firstStar: "Damage increases with the night",
    secondStar: "+25% damage while standing still",
    thirdStar: "90% reduced weight",
  },

  {
    row: 6,
    available: 1,
    name: "Death Tambo",
    firstStar: "Damage increases as health increases",
    secondStar: "40% more power attack damage",
    thirdStar: "+1 Agility",
  },

  {
    row: 7,
    available: 1,
    name: "Grognak's Axe",
    firstStar: "Damage increases as health decreases",
    secondStar: "40% faster swing speed",
    thirdStar: "+1 Agility",
  },

  {
    row: 8,
    available: 1,
    name: "Grognak's Axe",
    firstStar: "+50% damage to robots",
    secondStar: "40% faster swing speed",
    thirdStar: "+1 Agility",
  },

  {
    row: 9,
    available: 1,
    name: "Machete",
    firstStar: "+50% damage to Humans",
    secondStar: "Replenish AP with each kill",
    thirdStar: "Your V.A.T.S. critical meter fills 15% faster",
  },

  {
    row: 10,
    available: 1,
    name: "Mole Miner Gauntlet",
    firstStar: "+50% damage to ghouls",
    secondStar: "40% faster swing speed",
    thirdStar: "Your V.A.T.S. critical meter fills 15% faster",
  },

  {
    row: 11,
    available: 1,
    name: "Pickaxe (Cursed)",
    //firstStar: "",
    secondStar: "40% more power attack damage",
    thirdStar: "90% reduced weight",
  },

  {
    row: 12,
    available: 1,
    name: "Pitchfork",
    firstStar: "Double damage if target is full health",
    secondStar: "40% faster swing speed",
    thirdStar: "25% less V.A.T.S. Action Point cost",
  },

  {
    row: 13,
    available: 1,
    name: "Pitchfork",
    firstStar: "+50% damage to Humans",
    //secondStar: "",
    thirdStar: "Take 40% less damage while power attacking",
  },

  {
    row: 14,
    available: 1,
    name: "Shovel (Cursed)",
    firstStar: "+50% damage when your target is below 40% health",
    secondStar: "40% faster swing speed",
    thirdStar: "90% reduced weight",
  },

  {
    row: 15,
    available: 1,
    name: "Ski Sword",
    firstStar: "Double damage if target is full health",
    secondStar: "40% faster swing speed",
    thirdStar: "25% less V.A.T.S. Action Point cost",
  },

  {
    row: 16,
    available: 1,
    name: "Mole Miner Gauntlet",
    firstStar: "Reduce your target's damage output by 25% for 5s",
    secondStar: "40% faster swing speed",
  },

  {
    row: 17,
    available: 1,
    name: "Power Fist",
    firstStar: "Damage increases as health decreases",
    secondStar: "40% faster swing speed",
  },
];

const rangedWeapons = [
  {
    row: 18,
    available: 1,
    name: "10mm Submachine Gun",
    firstStar: "Damage increases as health decreases",
    secondStar: "Bullets explode for area damage",
    thirdStar: "90% reduced weight",
  },

  {
    row: 19,
    available: 1,
    name: "10mm Submachine Gun",
    firstStar: "Double damage if target is full health",
    secondStar: "+25% damage while aiming",
    thirdStar: "90% reduced weight",
  },

  {
    row: 20,
    available: 1,
    name: "Black Powder Rifle",
    firstStar: "V.A.T.S. crits will heal you and your group",
    secondStar: "+25% damage while aiming",
    thirdStar: "+250 Damage Resistance while reloading",
  },

  {
    row: 21,
    available: 1,
    name: "Combat Rifle",
    firstStar: "Damage increases as health decreases",
    secondStar: "Bullets explode for area damage",
    thirdStar: "Your V.A.T.S. critical meter fills 15% faster",
  },

  {
    row: 22,
    available: 1,
    name: "Combat Rifle",
    firstStar: "Damage increases as you fill your hunger and thirst meters",
    secondStar: "Replenish AP with each kill",
    thirdStar: "Hits have a chance to generate a Stealth Field",
  },

  {
    row: 23,
    available: 1,
    name: "Cryolator",
    firstStar: "Quadruple ammo capacity",
    secondStar: "25% faster fire rate",
    thirdStar: "90% reduced weight",
  },

  {
    row: 24,
    available: 1,
    name: "Cryolator",
    firstStar: "+50% damage to Scorched",
    secondStar: "+50% limb damage",
    thirdStar: "25% faster fire rate",
  },

  {
    row: 25,
    available: 1,
    name: "Experimental MIRV",
    firstStar: "Gain brief health regeneration when you hit an enemy",
    secondStar: "+25% damage while aiming",
    thirdStar: "90% reduced weight",
  },

  {
    row: 26,
    available: 1,
    name: "Fatman",
    firstStar: "+50% damage to Scorched",
    secondStar: "25% faster fire rate",
    thirdStar: "+50% damage while aiming",
  },

  {
    row: 27,
    available: 1,
    name: "Gauss Rifle",
    firstStar: "Reduce your target's damage output by 25% for 5s",
    secondStar: "Bashing damage increased by 50%",
    thirdStar: "+1 Perception",
  },

  {
    row: 28,
    available: 1,
    name: "Handmade Rifle",
    firstStar: "Damage increases when suffering from addictions",
    secondStar: "25% faster fire rate",
    thirdStar: "+1 Perception",
  },

  {
    row: 29,
    available: 1,
    name: "Harpoon Gun (Cursed)",
    firstStar: "+50% damage when your target is below 40% health",
    secondStar: "Bashing damage increased by 50%",
    thirdStar: "90% reduced weight",
  },

  {
    row: 30,
    available: 1,
    name: "Hunting Rifle",
    firstStar: "Damage increased after each consecutive hit on the same target",
    secondStar: "The last round in a magazine has a 25% chance to deal 2x DMG",
    thirdStar: "15% faster reload	",
  },

  {
    row: 31,
    available: 1,
    name: "Lever Action Rifle",
    firstStar: "Shoots an additional projectile",
    secondStar: "+50% VATS hit chance",
    thirdStar: "+1 Perception",
  },

  {
    row: 32,
    available: 1,
    name: "M79 Grenade Launcher",
    firstStar: "Damage increases as health increases",
    secondStar: "25% faster fire rate",
    thirdStar: "25% less V.A.T.S. Action Point cost",
  },

  {
    row: 33,
    available: 1,
    name: "M79 Grenade Launcher",
    firstStar: "Ignores 50% of your target's armor",
    secondStar: "Replenish AP with each kill",
    thirdStar: "Hits have a chance to generate a Stealth Field",
  },

  {
    row: 34,
    available: 1,
    name: "Minigun",
    firstStar: "Damage increased by 5% for each mutation",
    secondStar: "25% faster fire rate",
    thirdStar: "15% faster reload",
  },

  {
    row: 35,
    available: 1,
    name: "Minigun",
    firstStar: "Ignores 50% of your target's armor",
    secondStar: "V.A.T.S. critical shots do +50% damage",
    thirdStar: "15% faster reload",
  },

  {
    row: 36,
    available: 1,
    name: "Pepper Shaker",
    firstStar: "Damage increases as health increases",
    secondStar: "+50% limb damage",
    thirdStar: "+50 Damage Resistance while aiming",
  },

  {
    row: 37,
    available: 1,
    name: "Pepper Shaker",
    firstStar: "Damage increases as health increases",
    secondStar: "25% faster fire rate",
    thirdStar: "25% less V.A.T.S. Action Point cost",
  },

  {
    row: 38,
    available: 1,
    name: "Pump Action Shotgun",
    firstStar: "Damage increased after each consecutive hit on the same target",
    secondStar: "25% faster fire rate",
    thirdStar: "+1 Perception",
  },

  {
    row: 39,
    available: 1,
    name: "Pump Action Shotgun",
    firstStar: "Quadruple ammo capacity",
    secondStar: "Bashing damage increased by 50%",
    thirdStar: "Hits have a chance to generate a Stealth Field",
  },

  {
    row: 40,
    available: 1,
    name: "Railway Rifle",
    firstStar: "Gain brief health regeneration when you hit an enemy",
    secondStar: "Bullets explode for area damage",
    thirdStar: "+250 Damage Resistance while reloading",
  },

  {
    row: 41,
    available: 1,
    name: "Gatling Gun",
    firstStar: "Damage increases as you fill your hunger and thirst meters",
    secondStar: "Bullets explode for area damage",
    thirdStar: "25% less V.A.T.S. Action Point cost",
  },

  {
    row: 42,
    available: 1,
    name: "Slug Buster",
    firstStar: "Ignores 50% of your target's armor",
    secondStar: "V.A.T.S. critical shots do +50% damage",
    thirdStar: "90% reduced weight",
  },

  {
    row: 43,
    available: 1,
    name: "The Fixer",
    firstStar: "Ignores 50% of your target's armor",
    secondStar: "Bashing damage increased by 50%",
    thirdStar: "+1 Agility",
  },

  {
    row: 44,
    available: 1,
    name: "The Fixer",
    firstStar: "Ignores 50% of your target's armor",
    secondStar: "+50% VATS hit chance",
    thirdStar: "25% less V.A.T.S. Action Point cost",
  },

  {
    row: 45,
    available: 1,
    name: "The Fixer",
    firstStar: "Reduce your target's damage output by 25% for 5s",
    secondStar: "Bullets explode for area damage",
    thirdStar: "Faster movement speed while aiming",
  },

  {
    row: 46,
    available: 1,
    name: "The Fixer",
    //firstStar: "",
    secondStar: "25% faster fire rate",
    thirdStar: "15% faster reload",
  },

  {
    row: 47,
    available: 1,
    name: "The Fixer",
    firstStar: "Double damage if target is full health",
    secondStar: "Bullets explode for area damage",
    thirdStar: "+1 Agility",
  },

  {
    row: 48,
    available: 1,
    name: "The Fixer",
    firstStar: "+50% damage when your target is below 40% health",
    secondStar: "Bullets explode for area damage",
    thirdStar: "25% less V.A.T.S. Action Point cost",
  },

  {
    row: 49,
    available: 1,
    name: "The Fixer",
    firstStar: "Damage increases as health decreases",
    secondStar: "+25% damage while aiming",
    thirdStar: "25% less V.A.T.S. Action Point cost",
  },

  {
    row: 50,
    available: 1,
    name: "The Fixer",
    firstStar: "+50% damage to super mutants",
    secondStar: "25% faster fire rate",
    thirdStar: "15% faster reload",
  },

  {
    row: 51,
    available: 1,
    name: "The Fixer",
    firstStar: "+50% damage when your target is below 40% health",
    secondStar: "25% faster fire rate",
    thirdStar: "Faster movement speed while aiming",
  },

  {
    row: 52,
    available: 1,
    name: "The Fixer",
    firstStar: "Ignores 50% of your target's armor",
    secondStar: "The last round in a magazine has a 25% chance to deal 2x DMG",
    thirdStar: "+50 Damage Resistance while aiming",
  },

  {
    row: 53,
    available: 1,
    name: "Ultracite Gatling Laser",
    firstStar: "+50% damage when your target is below 40% health",
    secondStar: "Replenish AP with each kill",
    thirdStar: "Hits have a chance to generate a Stealth Field",
  },

  {
    row: 54,
    available: 1,
    name: "50cal Machine Gun",
    firstStar: "Damage increases as health decreases",
    secondStar: "The last round in a magazine has a 25% chance to deal 2x DMG	",
  },

  {
    row: 55,
    available: 1,
    name: "Combat Shotgun",
    firstStar: "Damage increases as health decreases",
    secondStar: "Bullets explode for area damage",
  },

  {
    row: 56,
    available: 1,
    //name: "Gatling Gun",
    firstStar: "Damage increases as health inreases",
    secondStar: "Bullets explode for area damage",
  },

  {
    row: 57,
    available: 1,
    name: "Gauss Rifle",
    firstStar: "Damage increases as health decreases",
    secondStar: "V.A.T.S. critical shots do +50% damage",
  },

  {
    row: 58,
    available: 1,
    name: "Handmade Rifle",
    firstStar: "Gain brief health regeneration when you hit an enemy",
    secondStar: "Bullets explode for area damage",
  },

  {
    row: 59,
    available: 1,
    name: "Minigun",
    firstStar: "Damage increases as health decreases",
    secondStar: "Bashing damage increased by 50%",
  },

  {
    row: 60,
    available: 1,
    name: "Minigun",
    firstStar: "Shoots an additional projectile",
    secondStar: "Replenish AP with each kill",
  },

  {
    row: 61,
    available: 1,
    name: "Radium Rifle",
    firstStar: "Quadruple ammo capacity",
    secondStar: "The last round in a magazine has a 25% chance to deal 2x DMG",
  },

  {
    row: 62,
    available: 1,
    name: "Tesla Rifle",
    firstStar: "Shoots an additional projectile",
    secondStar: "The last round in a magazine has a 25% chance to deal 2x DMG",
  },

  {
    row: 63,
    available: 1,
    name: "M79 Grenade Launcher",
    firstStar: "Shoots an additional projectile",
  },
];

const armors = [
  {
    row: 64,
    available: 1,
    name: "",
    firstStar: "",
    secondStar: "",
  },

  {
    row: 65,
    available: 1,
    name: "",
    firstStar: "",
    secondStar: "",
    thirdStar: "",
  },

  {
    row: 66,
    available: 1,
    name: "",
    firstStar: "",
    secondStar: "",
    thirdStar: "",
  },

  {
    row: 67,
    available: 1,
    name: "",
    firstStar: "",
    secondStar: "",
    thirdStar: "",
  },

  {
    row: 68,
    available: 1,
    name: "",
    firstStar: "",
    secondStar: "",
    thirdStar: "",
  },

  {
    row: 69,
    available: 1,
    name: "",
    firstStar: "",
    secondStar: "",
    thirdStar: "",
  },

  {
    row: 70,
    available: 1,
    name: "",
    firstStar: "",
    secondStar: "",
    thirdStar: "",
  },

  {
    row: 71,
    available: 1,
    name: "",
    firstStar: "",
    secondStar: "",
    thirdStar: "",
  },

  {
    row: 72,
    available: 1,
    name: "",
    firstStar: "",
    secondStar: "",
    thirdStar: "",
  },

  {
    row: 73,
    available: 1,
    name: "",
    firstStar: "",
    secondStar: "",
    thirdStar: "",
  },

  {
    row: 74,
    available: 1,
    name: "",
    firstStar: "",
    secondStar: "",
    thirdStar: "",
  },
];

const outfits = [];

// console.log(weapons);
function listMeleeWeapons() {
  let tbody = document.getElementById("meleeWeapons");
  tbody.innerHTML += `<tr><th>ID</th><th>Stars</th><th>Name</th><th>⭐</th><th>⭐⭐</th><th>⭐⭐⭐</th></tr>`;
  for (const id of meleeWeapons) {
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
    let tr = `<tr ${avail}><td>${row}</td><td>${"⭐".repeat(
      star
    )}</td><td>${name}</td><td>${first}</td><td>${second || "-"}</td><td>${
      third || "-"
    }</td></tr>`;
    tbody.innerHTML += tr;
  }
  tbody.innerHTML += `<div class="spacer"></div>`;
}

function listRangedWeapons() {
  let tbody = document.getElementById("rangedWeapons");
  tbody.innerHTML += `<tr><th>ID</th><th>Stars</th><th>Name</th><th>⭐</th><th>⭐⭐</th><th>⭐⭐⭐</th></tr>`;
  for (const id of rangedWeapons) {
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
    let tr = `<tr ${avail}><td>${row}</td><td>${"⭐".repeat(
      star
    )}</td><td>${name}</td><td>${first}</td><td>${second || "-"}</td><td>${
      third || "-"
    }</td></tr>`;
    tbody.innerHTML += tr;
  }
  tbody.innerHTML += `<div class="spacer"></div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  listMeleeWeapons();
  listRangedWeapons();
});
