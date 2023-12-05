const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
let lines = input.trim().split("\n");

function part1() {
  let total = 0;
  for (let line of lines) {
    let [cardId, data] = line.split(": ");
    let [winningStr, pickdStr] = data.split("|");
    let winningNumbers = [];
    let pickedNumbers = [];

    let match;
    let pattern = /\d+/g;
    while ((match = pattern.exec(winningStr)) !== null) {
      winningNumbers.push(parseInt(match[0]));
    }

    while ((match = pattern.exec(pickdStr)) !== null) {
      pickedNumbers.push(parseInt(match[0]));
    }

    let count = 0;
    for (let winningNum of winningNumbers) {
      if (pickedNumbers.includes(winningNum)) {
        count++;
      }
    }

    total += count != 0 ? Math.pow(2, count - 1) : 0;
  }

  return total;
}

function part2() {
  let total = 0;
  let instances = {};
  for (let line of lines) {
    let [cardId, data] = line.split(": ");
    let [winningStr, pickdStr] = data.split("|");
    let winningNumbers = [];
    let pickedNumbers = [];

    let match;
    let pattern = /\d+/g;
    while ((match = pattern.exec(winningStr)) !== null) {
      winningNumbers.push(parseInt(match[0]));
    }

    while ((match = pattern.exec(pickdStr)) !== null) {
      pickedNumbers.push(parseInt(match[0]));
    }

    let count = 0;
    for (let winningNum of winningNumbers) {
      if (pickedNumbers.includes(winningNum)) {
        count++;
      }
    }

    instances[cardId.replace("Card", "").trim()] = count;
  }

  function cardCopy(input) {
    total++;
    const instancesCount = instances[input];

    if (instancesCount != 0) {
      for (
        let i = parseInt(input) + 1;
        i <= parseInt(input) + instancesCount;
        i++
      ) {
        cardCopy(i);
      }
    }
  }

  for (let key of Object.keys(instances)) {
    cardCopy(key);
  }

  return total;
}

console.log(part1());
console.log(part2());
