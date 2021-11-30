"use strict";

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

const items = [
  {
    category: "Melee Weapons",
    name: "Bowie Knife",
    firstStar: "Assassin's",
    secondStar: "40% faster swing speed",
    thirdStar: "25% less V.A.T.S. Action Point cost",
    available: 0,
  },

  {
    category: "Melee Weapons",
    name: "Cultist Blade",
    firstStar: "Instigating",
    secondStar: "40% faster swing speed",
    thirdStar: "Your V.A.T.S. critical meter fills 15% faster",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Cultist Blade",
    firstStar: "Juggernaut's",
    secondStar: "40% more power attack damage",
    thirdStar: "Your V.A.T.S. critical meter fills 15% faster",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Cultist Dagger",
    firstStar: "Berserker's",
    secondStar: "Reflects 50% of melee damage back while blocking",
    thirdStar: "+1 Agility",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Cultist Dagger",
    firstStar: "Nocturnal",
    secondStar: "+25% damage while standing still",
    thirdStar: "90% reduced weight",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Death Tambo",
    firstStar: "Juggernaut's",
    secondStar: "40% more power attack damage",
    thirdStar: "+1 Agility",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Grognak's Axe",
    firstStar: "Bloodied",
    secondStar: "40% faster swing speed",
    thirdStar: "+1 Agility",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Grognak's Axe",
    firstStar: "Troubleshooter's",
    secondStar: "40% faster swing speed",
    thirdStar: "+1 Agility",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Machete",
    firstStar: "Assassin's",
    secondStar: "Replenish AP with each kill",
    thirdStar: "Your V.A.T.S. critical meter fills 15% faster",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Mole Miner Gauntlet",
    firstStar: "Ghoul Slayer",
    secondStar: "40% faster swing speed",
    thirdStar: "Your V.A.T.S. critical meter fills 15% faster",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Pickaxe (Cursed)",
    firstStar: "Bloodied",
    secondStar: "40% more power attack damage",
    thirdStar: "90% reduced weight",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Pitchfork",
    firstStar: "Instigating",
    secondStar: "40% faster swing speed",
    thirdStar: "25% less V.A.T.S. Action Point cost",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Pitchfork",
    firstStar: "Hunter's",
    secondStar: "40% faster swing speed",
    thirdStar: "Take 40% less damage while power attacking",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Shovel (Cursed)",
    firstStar: "Executioner's",
    secondStar: "40% faster swing speed",
    thirdStar: "90% reduced weight",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Ski Sword",
    firstStar: "Instigating",
    secondStar: "40% faster swing speed",
    thirdStar: "25% less V.A.T.S. Action Point cost",
    available: 1,
  },

  {
    category: "Melee Weapons",
    name: "Mole Miner Gauntlet",
    firstStar: "Suppressor's",
    secondStar: "40% faster swing speed",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "10mm Submachine Gun",
    firstStar: "Bloodied",
    secondStar: "Bullets explode for area damage",
    thirdStar: "90% reduced weight",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "10mm Submachine Gun",
    firstStar: "Instigating",
    secondStar: "+25% damage while aiming",
    thirdStar: "90% reduced weight",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Black Powder Rifle",
    firstStar: "Medic's",
    secondStar: "+25% damage while aiming",
    thirdStar: "+250 Damage Resistance while reloading",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Combat Rifle",
    firstStar: "Bloodied",
    secondStar: "Bullets explode for area damage",
    thirdStar: "Your V.A.T.S. critical meter fills 15% faster",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Combat Rifle",
    firstStar: "Gourmand's",
    secondStar: "Replenish AP with each kill",
    thirdStar: "Hits have a chance to generate a Stealth Field",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Cryolator",
    firstStar: "Quad",
    secondStar: "25% faster fire rate",
    thirdStar: "90% reduced weight",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Cryolator",
    firstStar: "Zealot's",
    secondStar: "+50% limb damage",
    thirdStar: "25% faster fire rate",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Experimental MIRV",
    firstStar: "Vampire's",
    secondStar: "+25% damage while aiming",
    thirdStar: "90% reduced weight",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Fatman",
    firstStar: "Zealot's",
    secondStar: "25% faster fire rate",
    thirdStar: "+50% damage while aiming",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Gauss Rifle",
    firstStar: "Suppressor's",
    secondStar: "Bashing damage increased by 50%",
    thirdStar: "+1 Perception",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Handmade Rifle",
    firstStar: "Junkie's",
    secondStar: "25% faster fire rate",
    thirdStar: "+1 Perception",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Handmade Rifle",
    firstStar: "Anti-Armor",
    secondStar: "Replenish AP with each kill",
    thirdStar: "Your V.A.T.S. critical meter fills 15% faster",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Harpoon Gun (Cursed)",
    firstStar: "Executioner's",
    secondStar: "Bashing damage increased by 50%",
    thirdStar: "90% reduced weight",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Hunting Rifle",
    firstStar: "Furious",
    secondStar: "The last round in a magazine has a 25% chance to deal 2x DMG",
    thirdStar: "15% faster reload ",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Lever Action Rifle",
    firstStar: "Two Shot",
    secondStar: "+50% VATS hit chance",
    thirdStar: "+1 Perception",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "M79 Grenade Launcher",
    firstStar: "Juggernaut's",
    secondStar: "25% faster fire rate",
    thirdStar: "25% less V.A.T.S. Action Point cost",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "M79 Grenade Launcher",
    firstStar: "Anti-Armor",
    secondStar: "Replenish AP with each kill",
    thirdStar: "Hits have a chance to generate a Stealth Field",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "M79 Grenade Launcher",
    firstStar: "Anti-Armor",
    secondStar: "Replenish AP with each kill",
    thirdStar: "Hits have a chance to generate a Stealth Field",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Minigun",
    firstStar: "Mutant's",
    secondStar: "25% faster fire rate",
    thirdStar: "15% faster reload",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Minigun",
    firstStar: "Anti-Armor",
    secondStar: "V.A.T.S. critical shots do +50% damage",
    thirdStar: "15% faster reload",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Pepper Shaker",
    firstStar: "Juggernaut's",
    secondStar: "+50% limb damage",
    thirdStar: "+50 Damage Resistance while aiming",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Pepper Shaker",
    firstStar: "Juggernaut's",
    secondStar: "25% faster fire rate",
    thirdStar: "25% less V.A.T.S. Action Point cost",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Pump Action Shotgun",
    firstStar: "Quad",
    secondStar: "Bashing damage increased by 50%",
    thirdStar: "Hits have a chance to generate a Stealth Field",
    available: 1,
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

  {
    category: "Ranged Weapons",
    name: "The Fixer",
    firstStar: "Executioner's",
    secondStar: "25% faster fire rate",
    thirdStar: "Faster movement speed while aiming",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "The Fixer",
    firstStar: "Anti-Armor",
    secondStar: "The last round in a magazine has a 25% chance to deal 2x DMG",
    thirdStar: "+50 Damage Resistance while aiming",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "The Fixer",
    firstStar: "Junkie's",
    secondStar: "25% faster fire rate",
    thirdStar: "15% faster reload",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "The Fixer",
    firstStar: "Furious",
    secondStar: "Bullets explode for area damage",
    thirdStar: "15% faster reload",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "The Fixer",
    firstStar: "Quad",
    secondStar: "Replenish AP with each kill",
    thirdStar: "+1 Agility",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "The Fixer",
    firstStar: "Mutant's",
    secondStar: "The last round in a magazine has a 25% chance to deal 2x DMG",
    thirdStar: "90% reduced weight",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "The Fixer",
    firstStar: "Executioner's",
    secondStar: "V.A.T.S. critical shots do +50% damage",
    thirdStar: "15% faster reload",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "The Fixer",
    firstStar: "Quad ",
    secondStar: "+50% limb damage",
    thirdStar: "Hits have a chance to generate a Stealth Field",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Ultracite Gatling Laser",
    firstStar: "Executioner's",
    secondStar: "Replenish AP with each kill",
    thirdStar: "Hits have a chance to generate a Stealth Field",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "50cal Machine Gun",
    firstStar: "Bloodied",
    secondStar: "The last round in a magazine has a 25% chance to deal 2x DMG",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Combat Shotgun",
    firstStar: "Bloodied",
    secondStar: "Bullets explode for area damage",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Gauss Rifle",
    firstStar: "Bloodied",
    secondStar: "V.A.T.S. critical shots do +50% damage",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Handmade Rifle",
    firstStar: "Quad ",
    secondStar: "25% faster fire rate",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Minigun",
    firstStar: "Bloodied",
    secondStar: "Bashing damage increased by 50%",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Minigun",
    firstStar: "Two Shot",
    secondStar: "Replenish AP with each kill",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Radium Rifle",
    firstStar: "Quad",
    secondStar: "The last round in a magazine has a 25% chance to deal 2x DMG",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "Tesla Rifle",
    firstStar: "Two Shot",
    secondStar: "The last round in a magazine has a 25% chance to deal 2x DMG",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "The Fixer",
    firstStar: "Instigating",
    secondStar: "Bullets explode for area damage",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "The Fixer",
    firstStar: "Instigating",
    secondStar: "Bullets explode for area damage",
    available: 1,
  },

  {
    category: "Ranged Weapons",
    name: "M79 Grenade Launcher",
    firstStar: "Two Shot",
    available: 1,
  },

  {
    category: "Armors",
    name: "Combat Armor Right Arm",
    firstStar: "Overeater's",
    secondStar: "+1 Charisma",
    thirdStar: "Reduces damage while blocking by 15%",
    available: 1,
  },

  {
    category: "Armors",
    name: "Combat Armor Right Arm",
    firstStar: "Bolstering",
    secondStar: "+1 Strength",
    thirdStar: "Receive 15% less limb damage",
    available: 1,
  },

  {
    category: "Armors",
    name: "Forest Scout Right Arm",
    firstStar: "Zealot's",
    secondStar: "Receive 7% less explosion damage",
    thirdStar: "5% chance to deal 100 Frost DMG to melee attackers",
    available: 1,
  },

  {
    category: "Armors",
    name: "Marine Armor Chest",
    firstStar: "Troubleshooter's",
    secondStar: "+25% Environmental Disease Resistance",
    thirdStar: "Food, drink, and chem weights reduced by 20%",
    available: 1,
  },

  {
    category: "Armors",
    name: "Marine Armor Left Arm",
    firstStar: "Cloaking",
    secondStar: "+1 Intelligence",
    thirdStar: "Grants the ability to breathe underwater",
    available: 1,
  },

  {
    category: "Armors",
    name: "Marine Armor Left Leg",
    firstStar: "Overeater's",
    secondStar: "+1 Charisma",
    thirdStar: "Reduces damage while blocking by 15%",
    available: 1,
  },

  {
    category: "Armors",
    name: "Marine Armor Right Arm",
    firstStar: "Regenerating",
    secondStar: "+25 Fire Resistance",
    thirdStar: "Slowly regen radiation damage while not in combat",
    available: 1,
  },

  {
    category: "Armors",
    name: "Marine Armor Right Leg",
    firstStar: "Zealot's",
    secondStar: "+1 Charisma",
    thirdStar: "Weapon weights reduced by 20%",
    available: 1,
  },

  {
    category: "Armors",
    name: "Metal Armor Right Arm",
    firstStar: "Weightless",
    secondStar: "+1 Agility",
    thirdStar: "Receive 15% less limb damage",
    available: 1,
  },

  {
    category: "Armors",
    name: "Metal Armor Right Arm",
    firstStar: "Zealot's",
    secondStar: "+25 Poison Resistance",
    thirdStar: "Weapon weights reduced by 20%",
    available: 1,
  },

  {
    category: "Armors",
    name: "Metal Armor Right Leg",
    firstStar: "Exterminator's	",
    secondStar: "Receive 7% less explosion damage",
    thirdStar: "Slowly regen radiation damage while not in combat",
    available: 1,
  },

  {
    category: "Armors",
    name: "Urban Scout Chest",
    firstStar: "Bolstering",
    secondStar: "+1 Intelligence",
    thirdStar: "Ammo weight reduced by 20%",
    available: 1,
  },

  {
    category: "Armors",
    name: "Urban Scout Chest",
    firstStar: "Ghoul Slayer's",
    secondStar: "+1 Luck",
    thirdStar: "Grants the ability to breathe underwater",
    available: 1,
  },

  {
    category: "Armors",
    name: "Urban Scout Chest",
    firstStar: "Unyielding",
    secondStar: "+1 Endurance",
    thirdStar: "Grants the ability to breathe underwater",
    available: 1,
  },

  {
    category: "Armors",
    name: "Urban Scout Chest",
    firstStar: "Vanguard's",
    secondStar: "+1 Perception",
    thirdStar: "75% chance to reduce damage by 15% while sprinting",
    available: 1,
  },

  {
    category: "Armors",
    name: "Urban Scout Chest",
    firstStar: "Nocturnal",
    secondStar: "+1 Endurance",
    available: 1,
  },

  {
    category: "Power Armors",
    name: "Raider Left Arm",
    firstStar: "Mutant's",
    secondStar: "+25 Poison Resistance",
    thirdStar: "Stimpaks, RadAway, and Rad-X are 5% more effective",
    available: 1,
  },
];

function groupBy(data, key) {
  //group array "data" by "key"
  return data.reduce(function (storage, item) {
    // get the first instance of the key by which we're grouping
    let group = item[key];

    // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
    storage[group] = storage[group] || [];

    // add this item to its group within `storage`
    storage[group].push(item);

    // return the updated storage to the reduce function, which will then loop through the next
    return storage;
  }, {}); // {} is the initial value of the storage
}

let tbody = document.getElementById("rewards");

let tableHeader =
  "<thead><tr><th>ID</th><th>Name</th><th>Effect</th><th>⭐</th><th>⭐⭐</th><th>⭐⭐⭐</th></tr>";

const itemsSorted = groupBy(items, "category");
let inner = "";
let row = 0;
for (const [key, value] of Object.entries(itemsSorted)) {
  inner += `<h2>${key}</h2><table>${tableHeader}`;
  for (const index of value.sort((a, b) =>
    a.firstStar > b.firstStar ? 1 : -1
  )) {
    //this also sorts the value in alphabetical order of the name of the object
    let description = "";
    if (
      index.category === "Melee Weapons" ||
      index.category === "Ranged Weapons"
    ) {
      description = descriptionsWeapons[index.firstStar];
    } else {
      description = descriptionsArmor[index.firstStar];
    }
    row++;
    inner += `<tr class="available-${
      index.available ?? 1
    }"><td>${row}</td><td>${index.name}</td><td><strong>${
      index.firstStar
    }</strong></td><td>${description}</td><td>${
      index.secondStar || " "
    }</td><td>${index.thirdStar || " "}</td></tr>`;
  }
  inner += `</table><br><br><br><br>`;
}
// console.log(Object.keys(itemsSorted)[i]);

tbody.innerHTML += inner;
