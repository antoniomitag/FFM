"use strict";

const weaponsList = document.getElementById("weapons");
const userList = document.getElementById("users");
const usernames = document.getElementsByClassName("username");
const mainTitle = document.getElementById("main-title");
const usernamesWrapper = document.getElementById("users");

const descriptionsWeaponsShort = {
  "Anti-armor": "AA",
  "Aristocrat's": "Ari",
  "Assassin's": "Ass",
  "Berserker's": "Ber",
  Bloodied: "B",
  "Executioner's": "Exe",
  "Exterminator's": "Ext",
  Furious: "F",
  "Ghoul Slayer's": "Gh",
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
  "V.A.T.S. critical hits do +50% damage": "50c",
  "+50% V.A.T.S. hit chance": "50h",
  "+50% limb damage": "50l",
  "Bullets explode for area damage": "E",
  "The last round in a magazine has a 25% chance to deal 2x DMG": "last",
  "Replenish Action Points with each kill": "15",
  "V.A.T.S. critical meter fills 15% faster": "15crit",
  "15% faster reload": "15r",
  "25% less V.A.T.S. Action Point cost": "25",
  "+250 Damage Resistance while reloading": "250",
  "+50 Damage Resistance while aiming": "50dr",
  "90% reduced weight": "90",
  "+1 Agility": "+1A",
  "Breaks 50% slower": "break",
  "Hits have a chance to generate a Stealth Field": "gho",
  "Faster movement speed while aiming": "ms",
  "+1 Perception": "+1P",
  "40% more power attack damage": "40",
  "+1 Strength": "+1S",
};

// each list is separate per username for easier management
const mortetm = [
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "ari/33/90",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Damage increases as caps increases",
    "2 star": "+50% V.A.T.S. hit chance",
    "3 star": "90% reduced weight",
    Prefix: "Aristocrat's Legendary Mod",
    Major: "V.A.T.S. Enhanced",
    Minor: "Lightweight",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "aa/33/25",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Ignores 50% of your target's armor",
    "2 star": "+50% V.A.T.S. hit chance",
    "3 star": "25% less V.A.T.S. Action Point cost",
    Prefix: "Anti-armor Legendary Mod",
    Major: "V.A.T.S. Enhanced",
    Minor: "V.A.T.S. Enhanced",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "Vampire's Minigun",
    "Name converted": "Minigun",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "v/10/ms",
    Type: "WEAPON_RANGED",
    Level: "45",
    Count: "1",
    "1 star": "Gain brief health regeneration when you hit an enemy",
    "2 star": "+25% damage while aiming",
    "3 star": "Faster movement speed while aiming",
    Prefix: "Vampire's Legendary Mod",
    Major: "Hitman's",
    Minor: "Nimble",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "q/e/50",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Quadruple ammo capacity",
    "2 star": "Bullets explode for area damage",
    "3 star": "+50 Damage Resistance while aiming",
    Prefix: "Quad",
    Major: "Explosive",
    Minor: "Steadfast",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "Anti-armor Gatling Plasma",
    "Name converted": "Gatling Plasma",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "aa/ine/15r",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Ignores 50% of your target's armor",
    "2 star": "Replenish Action Points with each kill",
    "3 star": "15% faster reload",
    Prefix: "Anti-armor Legendary Mod",
    Major: "Inertial",
    Minor: "Rapid",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "Anti-armor Minigun",
    "Name converted": "Minigun",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "aa/25/ms",
    Type: "WEAPON_RANGED",
    Level: "45",
    Count: "1",
    "1 star": "Ignores 50% of your target's armor",
    "2 star": "25% faster fire rate",
    "3 star": "Faster movement speed while aiming",
    Prefix: "Anti-armor Legendary Mod",
    Major: "Rapid",
    Minor: "Nimble",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "s/10/25",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "If not in combat, +100% V.A.T.S. accuracy at +50% AP cost",
    "2 star": "+25% damage while aiming",
    "3 star": "25% less V.A.T.S. Action Point cost",
    Prefix: "Stalker's Legendary Mod",
    Major: "Hitman's",
    Minor: "V.A.T.S. Enhanced",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "ts/10/25",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Shoots an additional projectile",
    "2 star": "+25% damage while aiming",
    "3 star": "25% less V.A.T.S. Action Point cost",
    Prefix: "Two Shot Legendary Mod",
    Major: "Hitman's",
    Minor: "V.A.T.S. Enhanced",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "go/33/15",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Damage increases as you fill your hunger and thirst meters",
    "2 star": "+50% V.A.T.S. hit chance",
    "3 star": "Your V.A.T.S. critical meter fills 15% faster",
    Prefix: "Gourmand's Legendary Mod",
    Major: "V.A.T.S. Enhanced",
    Minor: "Lucky",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "j/25/25",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Damage increases when suffering from addictions",
    "2 star": "25% faster fire rate",
    "3 star": "25% less V.A.T.S. Action Point cost",
    Prefix: "Junkie's Legendary Mod",
    Major: "Rapid",
    Minor: "V.A.T.S. Enhanced",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "Junkie's Minigun",
    "Name converted": "Minigun",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "j/25/90",
    Type: "WEAPON_RANGED",
    Level: "45",
    Count: "1",
    "1 star": "Damage increases when suffering from addictions",
    "2 star": "25% faster fire rate",
    "3 star": "90% reduced weight",
    Prefix: "Junkie's Legendary Mod",
    Major: "Rapid",
    Minor: "Lightweight",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "aa/10/dur",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Ignores 50% of your target's armor",
    "2 star": "+25% damage while aiming",
    "3 star": "Breaks 50% slower",
    Prefix: "Anti-armor Legendary Mod",
    Major: "Hitman's",
    Minor: "Durability",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "Bloodied Minigun",
    "Name converted": "Minigun",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "b/40bash/250",
    Type: "WEAPON_RANGED",
    Level: "45",
    Count: "1",
    "1 star": "Damage increases as health decreases",
    "2 star": "Bashing damage increased by 50%",
    "3 star": "+250 Damage Resistance while reloading",
    Prefix: "Bloodied Legendary Mod",
    Major: "Basher's",
    Minor: "Resilient",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "j/50/90",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Damage increases when suffering from addictions",
    "2 star": "V.A.T.S. critical hits do +50% damage",
    "3 star": "90% reduced weight",
    Prefix: "Junkie's Legendary Mod",
    Major: "Lucky",
    Minor: "Lightweight",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "Anti-armor Minigun",
    "Name converted": "Minigun",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "aa/25/dur",
    Type: "WEAPON_RANGED",
    Level: "45",
    Count: "1",
    "1 star": "Ignores 50% of your target's armor",
    "2 star": "25% faster fire rate",
    "3 star": "Breaks 50% slower",
    Prefix: "Anti-armor Legendary Mod",
    Major: "Rapid",
    Minor: "Durability",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "Anti-armor Pipe Bolt-Action Pistol",
    "Name converted": "Pipe Bolt Action",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "aa/e/90",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Ignores 50% of your target's armor",
    "2 star": "Bullets explode for area damage",
    "3 star": "90% reduced weight",
    Prefix: "Anti-armor Legendary Mod",
    Major: "Explosive",
    Minor: "Lightweight",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "jug/50/15r",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Damage increases as health increases",
    "2 star": "V.A.T.S. critical hits do +50% damage",
    "3 star": "15% faster reload",
    Prefix: "Juggernaut's Legendary Mod",
    Major: "Lucky",
    Minor: "Rapid",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "q/33/15",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Quadruple ammo capacity",
    "2 star": "+50% V.A.T.S. hit chance",
    "3 star": "Your V.A.T.S. critical meter fills 15% faster",
    Prefix: "Quad",
    Major: "V.A.T.S. Enhanced",
    Minor: "Lucky",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "Juggernaut's Minigun",
    "Name converted": "Minigun",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "jug/40bash/gho",
    Type: "WEAPON_RANGED",
    Level: "45",
    Count: "1",
    "1 star": "Damage increases as health increases",
    "2 star": "Bashing damage increased by 50%",
    "3 star": "Hits have a chance to generate a Stealth Field",
    Prefix: "Juggernaut's Legendary Mod",
    Major: "Basher's",
    Minor: "Ghost's",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "Vampire's Baseball Bat",
    "Name converted": "Baseball Bat-o",
    Account: "MorteTM",
    Character: "Trader Jess",
    Stars: "3",
    Abbr: "v/40p/s",
    Type: "WEAPON_MELEE",
    Level: "45",
    Count: "1",
    "1 star": "Gain brief health regeneration when you hit an enemy",
    "2 star": "40% more power attack damage",
    "3 star": "+1 Strength",
    Prefix: "Vampire's Legendary Mod",
    Major: "Power Attack Damage",
    Minor: "Strength",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
];

const narwindiltm = [
  {
    Name: "Bloodied Suppressed Automatic Combat Rifle",
    "Name converted": "Combat Rifle",
    Account: "NarwindilTM",
    Character: "Dorian",
    Stars: "3",
    Abbr: "b/e/15",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Damage increases as health decreases",
    "2 star": "Bullets explode for area damage",
    "3 star": "Your V.A.T.S. critical meter fills 15% faster",
    Prefix: "Bloodied Legendary Mod",
    Major: "Explosive",
    Minor: "Lucky",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "Quad Cryolator",
    "Name converted": "Cryolator",
    Account: "NarwindilTM",
    Character: "Dorian",
    Stars: "3",
    Abbr: "q/25/90",
    Type: "WEAPON_RANGED",
    Level: "45",
    Count: "1",
    "1 star": "Quadruple ammo capacity",
    "2 star": "25% faster fire rate",
    "3 star": "90% reduced weight",
    Prefix: "Quad",
    Major: "Rapid",
    Minor: "Lightweight",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "Mutant's Minigun",
    "Name converted": "Minigun",
    Account: "NarwindilTM",
    Character: "Dorian",
    Stars: "3",
    Abbr: "mu/25/15r",
    Type: "WEAPON_RANGED",
    Level: "45",
    Count: "1",
    "1 star": "Damage increased by 5% for each mutation",
    "2 star": "25% faster fire rate",
    "3 star": "15% faster reload",
    Prefix: "Mutant's Legendary Mod",
    Major: "Rapid",
    Minor: "Rapid",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "Vampire's Minigun",
    "Name converted": "Minigun",
    Account: "NarwindilTM",
    Character: "Dorian",
    Stars: "3",
    Abbr: "v/e/ms",
    Type: "WEAPON_RANGED",
    Level: "45",
    Count: "1",
    "1 star": "Gain brief health regeneration when you hit an enemy",
    "2 star": "Bullets explode for area damage",
    "3 star": "Faster movement speed while aiming",
    Prefix: "Vampire's Legendary Mod",
    Major: "Explosive",
    Minor: "Nimble",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "PIP_BOY",
  },
  {
    Name: "Gourmand's Recoil Compensated Railway Rifle",
    "Name converted": "Railway Rifle",
    Account: "NarwindilTM",
    Character: "Dorian",
    Stars: "3",
    Abbr: "go/ine/90",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Damage increases as you fill your hunger and thirst meters",
    "2 star": "Replenish Action Points with each kill",
    "3 star": "90% reduced weight",
    Prefix: "Gourmand's Legendary Mod",
    Major: "Inertial",
    Minor: "Lightweight",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "NarwindilTM",
    Character: "Dorian",
    Stars: "3",
    Abbr: "j/25/15r",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Damage increases when suffering from addictions",
    "2 star": "25% faster fire rate",
    "3 star": "15% faster reload",
    Prefix: "Junkie's Legendary Mod",
    Major: "Rapid",
    Minor: "Rapid",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "PIP_BOY",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "NarwindilTM",
    Character: "Dorian",
    Stars: "3",
    Abbr: "aa/33/25",
    Type: "WEAPON_RANGED",
    Level: "40",
    Count: "1",
    "1 star": "Ignores 50% of your target's armor",
    "2 star": "+50% V.A.T.S. hit chance",
    "3 star": "25% less V.A.T.S. Action Point cost",
    Prefix: "Anti-armor Legendary Mod",
    Major: "V.A.T.S. Enhanced",
    Minor: "V.A.T.S. Enhanced",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "PIP_BOY",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "NarwindilTM",
    Character: "Dorian",
    Stars: "3",
    Abbr: "q/ine/a",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Quadruple ammo capacity",
    "2 star": "Replenish Action Points with each kill",
    "3 star": "+1 Agility",
    Prefix: "Quad",
    Major: "Inertial",
    Minor: "Agility",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "PIP_BOY",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "NarwindilTM",
    Character: "Dorian",
    Stars: "3",
    Abbr: "b/10/25",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Damage increases as health decreases",
    "2 star": "+25% damage while aiming",
    "3 star": "25% less V.A.T.S. Action Point cost",
    Prefix: "Bloodied Legendary Mod",
    Major: "Hitman's",
    Minor: "V.A.T.S. Enhanced",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "CONTAINER",
  },
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "NarwindilTM",
    Character: "Dorian",
    Stars: "3",
    Abbr: "e/e/25",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "+50% more damage when your target is below 40% health",
    "2 star": "Bullets explode for area damage",
    "3 star": "25% less V.A.T.S. Action Point cost",
    Prefix: "Executioner's Legendary Mod",
    Major: "Explosive",
    Minor: "V.A.T.S. Enhanced",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "PIP_BOY",
  },
];

const cloudchaser87 = [
  {
    Name: "The Fixer",
    "Name converted": "The Fixer",
    Account: "CloudChaser87",
    Character: "Unknown",
    Stars: "3",
    Abbr: "ts/25c/15",
    Type: "WEAPON_RANGED",
    Level: "50",
    Count: "1",
    "1 star": "Shoots an additional projectile",
    "2 star": "V.A.T.S. critical hits do +50% damage",
    "3 star": "V.A.T.S. critical meter fills 15% faster",
    Prefix: "Two Shot Legendary Mod",
    Major: "Rapid",
    Minor: "Rapid",
    "Fed76 Price": "",
    "Fed76 Description": "",
    "Fed76 Value": "",
    Legendary: "true",
    Source: "PIP_BOY",
  },
];
// all lists get merged here to have them all in one object
const list = [mortetm, narwindiltm, cloudchaser87].flat();

let users = [];
const fixArray = function (list) {
  // fixArray fixes issues with the input - deals with capitalization of parameters, creates the user array, deals with short names and images, and creates prefixes that are in line with the item descriptions array
  list.forEach((item) => {
    Object.keys(item).forEach((key) => {
      let newKey = key[0].toLowerCase() + key.split(" ").join("").slice(1);
      if (newKey === "1star") newKey = "firstStar";
      else if (newKey === "2star") newKey = "secondStar";
      else if (newKey === "3star") newKey = "thirdStar";
      item[newKey] = item[key];
      if (item[newKey] !== item[key]) {
        delete item[key];
      }
    });
    let newPrefix = item.prefix.split(" ");
    if (newPrefix.includes("Legendary")) {
      newPrefix.splice(-2);
    }
    //item.prefix = newPrefix;
    item.prefix = newPrefix.join(" ");

    //push users to users array
    users.push(item.account);

    //set short name for each item
    item.shortName = `${descriptionsWeaponsShort[item.prefix]}${
      item.secondStar ? "/" + descriptionsWeaponsShort[item.secondStar] : ""
    }${item.thirdStar ? "/" + descriptionsWeaponsShort[item.thirdStar] : ""}`;

    // Set the number of stars as an integer
    // let stars = 1;
    // if (item.secondStar) stars = 2;
    // if (item.thirdStar) stars = 3;
    // item.stars = stars;

    //set image
    let first = "";
    let others = [];
    [first, ...others] = item.nameconverted.toLowerCase().split(" ");
    let words = first;
    others.forEach(function (word) {
      words += word.replace(word[0], word[0].toUpperCase());
    });
    item.image = words.concat(".png");
  });
  users = [...new Set(users)];
};

const initializePage = () => {
  //runs update inventory, sets the list of users in the top menu, adds event listeners to all of those
  // First check if there are parameters and make sure you load the correct user
  const urlParams = new URLSearchParams(window.location.search);
  let usrParam = "MorteTM";
  if (urlParams.has("user")) {
    usrParam = urlParams.get("user");
  }
  // Update the inventory (global), load the usernames, call the function that has "mortetm" as default, otherwise call the username from the url
  inventoryUpdate(list);
  displayItems(usrParam);

  // Add event listeners to switch users to the username
  users.forEach((user) => {
    userList.insertAdjacentHTML(
      "beforeend",
      `<span class="username" id="${user}" title="${user}">${user}</span>`
    );
  });

  if (users.length > 1) {
    Array.from(usernamesWrapper.children).forEach((item) =>
      item.classList.remove("active-user")
    );
    document.getElementById(usrParam).classList.add("active-user");
  } else {
    document.getElementById("other-trades").classList.add("hidden");
  }
  // Array.from(usernames).forEach(function (li) {
  //   li.addEventListener("click", loadData());
  // });
  usernamesWrapper.addEventListener("click", function (e) {
    e.preventDefault();
    const url = new URL(window.location.href);
    const user = e.target.innerText;
    url.searchParams.set("user", user);
    window.location.href = url.href;
  });
};

const inventoryUpdate = (inventory) => {
  //adds number of stars (depending on number of filled stars properties) and adds the link to the image depending on the name of the weapon
  inventory.forEach((item) => {
    if (item.thirdStar) item.stars = 3;
    else if (item.secondStar) item.stars = 2;
    else item.stars = 1;

    //make camelCase out of weapon name to create image name
    if (item.type !== "WEAPON_RANGED") {
      item.image = "other.png";
      return;
    }
  });
};

/*
const loadData = () => {
  // Function that loads data when called from the event listener on top of the page, it reads and sets the url parameters that deal with checking which user's items are displayed
  const url = new URL(window.location.href);
  let params = url.searchParams;
  const user = e.this.innerText;
  console.log(e.this);
  displayItems(user);
  params.set("user", user);
  window.location.href = url.href;
};
*/

const displayItems = (user) => {
  console.log(user);
  list.forEach((item) => {
    //check if user correct
    if (item.account !== user) return;
    console.log(item);
    // create template literal
    const html = `
    <div class="card${item.featured ? " featured" : ""}${
      item.count ? "" : " hidden"
    }">
    <div class="card__side card__side--front">
      <div class="featured-star">♥</div>
      <div class="stars">${"☆".repeat(item.stars)}</div>
      <div class="name">${item.shortName} ${item.nameconverted}</div>
      <div class="image">
      <img src="/include/img/weapons/${item.image}">
      </div>
    </div>
    <div class="card__side card__side--back">
    <div class="name">${item.nameconverted}</div>
      <div class="1st star">${item.firstStar}</div>
      <div class="2nd star">${item.secondStar ? item.secondStar : ""}</div>
      <div class="3rd star">${item.thirdStar ? item.thirdStar : ""}</div>
    </div>
  </div>
`;
    mainTitle.innerHTML = `${user}'s Trading List`;
    weaponsList.insertAdjacentHTML("beforeend", html);
  });
};

//fix array, initialize page
fixArray(list);
initializePage();
