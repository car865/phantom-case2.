const skinTitleDisplay = document.getElementById("skinTitleDisplay");
const itemImgDisplay = document.getElementById("itemImgDisplay");
const openCaseBtn = document.getElementById("openCaseBtn");
const percentDisplay = document.getElementById("percentDisplay");
const tierDisplay = document.getElementById("tierDisplay");
const caseCountDisplay = document.getElementById("caseCountDisplay");
const specialCountDisplay = document.getElementById("specialCountDisplay");
const historyContainer = document.getElementById("historyContainer");
const giveSpecial = document.getElementById("giveSpecial")

let lowTier = [
  "Aero Pink",
  "Galleria",
  "Hue shift",
  "Lightwave",
  "Piedra del sol",
  "Prism",
  "Reverie",
  "Rush",
  "Silvanus",
  "Smite",
  "Task force 809",
  "Velocity Yellow",
];
let lowTierImg = [
  "lowT/aero-pink.png",
  "lowT/galleria.png",
  "lowT/hue-shift.png",
  "lowT/lightwave.png",
  "lowT/piedradelsol.png",
  "lowT/prism.png",
  "lowT/reverie.png",
  "lowT/rush.png",
  "lowT/silvanus.png",
  "lowT/smite.png",
  "lowT/task-force.png",
  "lowT/velocity-yellow.png",
];
let midTier = [
  "Doodle buds (League)",
  "Doodle buds",
  "Ion",
  "Nebula",
  "Radiant Crisis",
  "Recon green",
  "Recon Red",
  "Soulstrife",
];
let midTierImg = [
  "midT/doodle-buds-3.png",
  "midT/doodle-buds.png",
  "midT/ion.png",
  "midT/nebula.png",
  "midT/radiant-crisis.png",
  "midT/recon-green.png",
  "midT/recon-red.png",
  "midT/soulstrife.png",
];
let highTier = [
  "Oni black",
  "Oni Green",
  "Reaver Black",
  "Reaver Red",
  "RGX 11z Pro Yellow",
  "Ruination Yellow",
  "Singularity Red",
  "Spectrum",
];
let highTierImg = [
  "highT/oni-black.png",
  "highT/oni-green.png",
  "highT/reaver-black.png",
  "highT/reaver-red.png",
  "highT/rgx-yellow.png",
  "highT/ruination-yellow.png",
  "highT/singularity-red.png",
  "highT/spectrum.png",
];
let specialItem = ["Arcane Nastja"];
let specialItemImg = ["special-item/secret.png"];

let caseCount = 0;
let specialCount = 0;

let historyList = [];


function giveSpecialItem() {
    specialCount += 1
    specialCountDisplay.textContent = `Special opened: ${specialCount}`;
}

percentDisplay.addEventListener("dblclick", function () {
    giveSpecialItem()
})

function randomNumGenerator() {
  const randomNum = Math.random() * 100;
  const percentTextDisplay = Math.floor(randomNum * 100) / 100;
  const lowVariant = Math.floor(Math.random() * lowTier.length);
  const midVariant = Math.floor(Math.random() * midTier.length);
  const highVariant = Math.floor(Math.random() * highTier.length);
  const specialVariant = Math.floor(Math.random() * specialItem.length);
  const imgBox = document.getElementById("img-box");

  if (randomNum < 0.01) {
    skinTitleDisplay.textContent = specialItem[specialVariant];
    skinTitleDisplay.style = "color: #420080";
    itemImgDisplay.src = specialItemImg[specialVariant];
    percentDisplay.textContent = `(${percentTextDisplay}%) ULTRA RARE`;
    specialCount += 1;
      specialCountDisplay.textContent = `Special opened: ${specialCount}`;
      imgBox.style = `
      box-shadow: 0 0 200px #420080;
      outline: 1px solid #420080;
      `; 
  } else if (randomNum < 4) {
    skinTitleDisplay.textContent = highTier[highVariant];
    skinTitleDisplay.style = "color: #f6945b";

    itemImgDisplay.src = highTierImg[highVariant];
    percentDisplay.textContent = `(${percentTextDisplay}%)`;

    caseCount += 1;
    caseCountDisplay.textContent = `Case opened: ${caseCount}`;

      imgBox.style = `
      box-shadow: 0 0 70px #f6945b;
      outline: 3px solid #f6945b;
      `;
      
  } else if (randomNum < 10) {
    skinTitleDisplay.textContent = midTier[midVariant];
    skinTitleDisplay.style = "color: #ca568d";
    itemImgDisplay.src = midTierImg[midVariant];
    percentDisplay.textContent = `(${percentTextDisplay}%)`;

    caseCount += 1;
    caseCountDisplay.textContent = `Case opened: ${caseCount}`;
      imgBox.style = `
      box-shadow: 0 0 30px #ca568d;
      outline: 2px solid #ca568d;
      `;
  } else {
    skinTitleDisplay.textContent = lowTier[lowVariant];
    skinTitleDisplay.style = "color: #5aa3e7";
    itemImgDisplay.src = lowTierImg[lowVariant];
      percentDisplay.textContent = `(${percentTextDisplay}%)`;
      tierDisplay.src = "select-icon.png"

    caseCount += 1;
    caseCountDisplay.textContent = `Case opened: ${caseCount}`;
      
    imgBox.style = `
      outline: 2px solid #121212;
      `;
  }
}

openCaseBtn.addEventListener("click", function () {
  randomNumGenerator();
});
