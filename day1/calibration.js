const fs = require("fs");

const fileContent = fs.readFileSync("input.txt", "utf-8");

const stringArray = fileContent.split("\n");

console.log(stringArray);

function calculateCalibrationValue(line) {
  const digits = line.match(/\d/g);

  if (!digits) {
    return 0;
  }

  const firstDigit = parseInt(digits[0]) || 0;
  const lastDigit = parseInt(digits[digits.length - 1]) || 0;

  const calibrationValue = firstDigit * 10 + lastDigit;

  return calibrationValue;
}

const totalCalibrationValue = stringArray.reduce((sum, line) => {
  const calibrationValue = calculateCalibrationValue(line);
  return sum + calibrationValue;
}, 0);

console.log(totalCalibrationValue);
