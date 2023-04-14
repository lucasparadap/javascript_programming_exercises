//random ternary operator -- variable === value ? pos 1 : pos 2

// Variable intiation
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRaceReg = true;
let racerAge = 18;

// Did they register early & are they over 18?
if (earlyRaceReg === true && racerAge > 18) {
  raceNumber += 1000;
}

// Determine Race Time
if (racerAge > 18 && earlyRaceReg === true) {
  console.log("Early adults run at 9:30am");
  console.log(`Your race number is ${raceNumber}`);
} else if (racerAge > 18 && earlyRaceReg !== true) {
  console.log("Late adults rut at 11:00am");
  console.log(`Your race number is ${raceNumber}`);
} else if (racerAge < 18) {
  console.log("Youth registrants run at 12:30pm (regardless or registration)");
  console.log(`Your race number is ${raceNumber}`);
} else {
  console.log("All 18y/os go see the registration desk");
}