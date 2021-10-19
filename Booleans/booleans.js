const colors = require("colors");
// declaring some variables
const boolObject = {};

boolObject.notEmptyString = "I am string";
boolObject.emptyString = "";
boolObject.nullValue = null;
boolObject.NanValue = NaN;
boolObject.undefinedVal;
boolObject.val = 24;
boolObject.TrueVal = true;
boolObject.FalseVal = false;
boolObject.objectInstance = {};
boolObject.arrInstance = [];
boolObject.objectInstanceWithsth = { 1: "bro", 2: "name" };
boolObject.arrInstanceWithsth = [1, 2, 3];

// bools operators
function printBools() {
  for (const prop in boolObject) {
    console.log(
      `${prop}`.yellow +
        `: true && ${boolObject[prop]}` +
        `\nresult:`.green +
        `${true && boolObject[prop]}`.blue
    );
    console.log(
      `${prop}`.yellow +
        `: false && ${boolObject[prop]}` +
        `\nresult:`.green +
        `${false && boolObject[prop]}`.blue
    );
    console.log(
      `${prop}`.yellow +
        `: true || ${boolObject[prop]}` +
        `\nresult:`.green +
        `${true || boolObject[prop]}`.blue
    );
    console.log(
      `${prop}`.yellow +
        `: false || ${boolObject[prop]}` +
        `\nresult:`.green +
        `${false || boolObject[prop]}`.blue
    );
  }
}
// printBools();

if ("" || "") {
  console.log(true);
}
