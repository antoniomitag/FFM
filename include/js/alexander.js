"use strict";

const weaponsList = document.getElementById("weapons");

const descriptionsWeapons = {
  "Anti-Armor": "Ignores 50% of your target's armor",
  "Aristocrat's": "Damage increases as caps increases",
  "Assassin's": "+50% damage to Humans",
  "Berserker's": "Lower Damage Resistance increases damage dealt",
  Bloodied: "Damage increases as health decreases",
  "Executioner's": "+50% damage when your target is below 40% health",
  "Exterminator's": "+50% damage to Mirelurks and bugs",
  Furious: "Damage increased after each consecutive hit on the same target",
  "Ghoul Slayer": "+50% damage to ghouls",
  "Gourmand's": "Damage increases as you fill your hunger and thirst",
  "Hunter's": "+50% damage to animals",
  Instigating: "Double damage if target is full health",
  "Juggernaut's": "Damage increases as health increases",
  "Junkie's": "Damage increases when suffering from addictions",
  "Mutant's": "Damage increased by 5% for each mutation",
  "Mutant Slayer": "+50% damage to super mutants",
  Nocturnal: "Damage increases with the night",
  "Suppressor's": "Reduce your target's damage output by 25% for 5s",
  "Troubleshooter's": "+50% damage to robots",
  "Vampire's": "Gain brief health regeneration when you hit an enemy",
  "Zealot's": "+50% damage to Scorched",
  "Medic's": "V.A.T.S. crits will heal you and your group",
  Quad: "Quadruple ammo capacity",
  "Stalker's": "If not in combat, +100% VATS accuracy at +50% AP cost",
  "Two Shot": "Shoots an additional projectile",
  Cursed: "Improved damage, attack rate. Low durability.",
};

const descriptionsArmor = {
  "Aristocrat's":
    "Grants up to +20 Energy Resistance and Damage Resistance, the higher your caps",
  "Assassin's": "-15% damage from Humans",
  "Auto Stim":
    "Automatically use a Stimpak when hit while health is 25% or less, once every 60 seconds",
  Bolstering:
    "Grants up to +35 Energy Resistance and Damage Resistance, the lower your health",
  Chameleon: "Blend with the environment while sneaking and not moving",
  Cloaking: "Being hit in melee generates a Stealth Field once per 30 seconds",
  "Exterminator's": "-15% damage from Mirelurks and bugs",
  "Ghoul Slayer's": "-15% damage from ghouls",
  "Hunter's": "-15% damage from animals",
  "Life Saving":
    "When incapacitated, gain a 50% chance to revive yourself with a Stimpak, once every minute",
  "Mutant's": "+10 Damage Resistance and Energy Resistance if you are mutated",
  "Mutant Slayer's": "-15% damage from Super Mutants",
  Nocturnal: "Damage and Energy Resistance increase at night",
  "Overeater's":
    "Increases Damage Reduction up to 6% as you fill your hunger and thirst meters",
  Regenerating: "Slowly regenerate health while not in combat",
  "Troubleshooter's": "-15% damage from robots",
  Unyielding: "Gain up to +3 to all stats (except END) when low health",
  "Vanguard's":
    "Grants up to +35 Energy Resistance and Damage Resistance, the higher your health",
  Weightless:
    "Weighs 90% less and does not count as armor for the Chameleon mutation",
  "Zealot's": "-15% damage from Scorched",
};

const weaponNames = {
  ".44 Pistol": ".44Pistol",
  "10mm Pistol": "10mmPistol.png",
  "Plasma Rifle": "plasmaGun.png",
  "Plasma Gun": "plasmaGun.png",
};

const inventory = {
  user: "MorteTM",
  character: "Alexander",
  items: [
    {
      category: "Melee Weapons",
      name: "Minigun",
      firstStar: "Assassin's",
      secondStar: "40% faster swing speed",
      thirdStar: "25% less V.A.T.S. Action Point cost",
      available: 1,
    },

    {
      category: "Melee Weapons",
      name: "Combat Shotgun",
      firstStar: "Instigating",
      secondStar: "40% faster swing speed",
      available: 1,
    },

    {
      category: "Melee Weapons",
      name: "Plasma Rifle",
      firstStar: "Juggernaut's",
      secondStar: "40% more power attack damage",
      thirdStar: "Your V.A.T.S. critical meter fills 15% faster",
      available: 0,
    },
  ],
};

console.log(inventory);

function updateInventory(inventory) {
  inventory.items.forEach(function (item) {
    if (item.thirdStar) item.stars = 3;
    else if (item.secondStar) item.stars = 2;
    else item.stars = 1;
    item.image = item.name.toLowerCase().split(" ").join("").concat(".png");
  });
}

updateInventory(inventory);

function displayItems(items) {
  console.log(`User: ${items.user}`);
  console.log(`Character: ${items.character}`);

  items.items.forEach(function (item) {
    const html = `<div class="item">
  <div class="title"></div>
  <div class="name">${item.name}</div>
  <div class="stars">${item.stars}</div>
  <div class="1st star">${item.firstStar}</div>
  <div class="2nd star">${item.secondStar}</div>
  <div class="3rd star">${item.thirdStar}</div>
  <div class="image">
  <img src="/include/img/weapons/${item.image}"></div>
  <div class="short">XXYYZZ</div>
</div>`;
    console.log(html);
    item.available === 1
      ? weaponsList.insertAdjacentHTML("beforeend", html)
      : 0;
  });
}

displayItems(inventory);
