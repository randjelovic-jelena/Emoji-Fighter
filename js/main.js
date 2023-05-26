"use strict";

const resultBox = document.querySelector(".result-box");
const emoji1 = document.getElementById("emoji1");
const emoji2 = document.getElementById("emoji2");
const pickBtn = document.getElementById("pick-btn");

let picked;
let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🦄",
  "🐯",
  "🐩",
  "🦀",
  "🐝",
  "🐷",
  "🤖",
  "🐘",
  "🐸",
  "🤓",
  "🤡",
  "🐆",
  "🦕",
  "👻",
  "🦁",
];

/*GET RANDOM NUMBER*/
const randomFighter = (type) => {
  resultBox.style = "display:flex";
  let rnd = Math.floor(Math.random() * fighters.length);
  return fighters[rnd];
};

/*SHOW FIGHTERS*/
const showFighters = (fighter1, fighter2) => {
  emoji1.innerText = fighter1;
  emoji2.innerText = fighter2;
};

/*GET NEW FIGHTERS*/
const getFighters = () => {
  let fighter1 = randomFighter("fighter1");
  let fighter2 = randomFighter("fighter2");
  if (fighter2 === fighter1) {
    fighter2 = randomFighter(fighter2);
  }
  if (fighter1 !== fighter2) {
    showFighters(fighter1, fighter2);
  }
};

/*EVENT*/
pickBtn.addEventListener("click", getFighters);
