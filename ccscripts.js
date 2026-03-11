var chocolateCount = 0;

var elvescost = 30;
var chocolateElves = 0;

var dwarvescost = 200;
var dwarvesCount = 0;

var chocolatepersecond = 0;

const chocolateButton = document.getElementById("chocolatebarimage");
const counterDisplay = document.getElementById("chocolate-count-display");

const elves = document.getElementById("chocolate-elves");
const chocolateElvesCountDisplay = document.getElementById("chocolate-elves-count-value");
const chocolateElfCostDisplay = document.getElementById("chocolate-elf-cost");

const dwarves = document.getElementById("chocolate-dwarves");
const dwarvesCountDisplay = document.getElementById("dwarves-count-value");
const dwarvesCostDisplay = document.getElementById("dwarves-cost");

const cpsDisplay = document.getElementById("chocolate-per-second-display");

function addChocolate() {
     chocolateCount++;
     counterDisplay.textContent = chocolateCount;
}

function buyChocolateElf() {
     if (chocolateCount >= elvescost) {
          chocolateCount -= elvescost;
          chocolateElves++;
          chocolatepersecond++;
          chocolateElvesCountDisplay.textContent = chocolateElves;
          counterDisplay.textContent = chocolateCount;
          cpsDisplay.textContent = chocolatepersecond;
          elvescost = Math.floor(elvescost * 1.15);
          elvescost = Math.round(elvescost);
          chocolateElfCostDisplay.textContent = elvescost;
     }
}

function buyDwarf() {
     if (chocolateCount >= dwarvescost) {
          chocolateCount -= dwarvescost;
          dwarvesCount++;
          chocolatepersecond += 7;
          dwarvesCountDisplay.textContent = dwarvesCount;
          counterDisplay.textContent = chocolateCount;
          cpsDisplay.textContent = chocolatepersecond;
          dwarvescost = Math.floor(dwarvescost * 1.15);
          dwarvescost = Math.round(dwarvescost);
          dwarvesCostDisplay.textContent = dwarvescost;
     }
}

function generateChocolate() {
     const now = new Date();
     chocolateCount += chocolatepersecond;
     counterDisplay.textContent = chocolateCount;
}

chocolateButton.addEventListener("click", addChocolate);

elves.addEventListener("click", buyChocolateElf);
dwarves.addEventListener("click", buyDwarf);

const timerID = setInterval(generateChocolate, 1000);