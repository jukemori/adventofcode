const fs = require("fs");

const maxCount = {
  red: 12,
  green: 13,
  blue: 14,
};
function partTwo(file) {
  const lines = fs.readFileSync(file, "utf-8").trim().split("\n");
  return lines
    .map((line) => {
      return line
        .split(": ")[1]
        .split("; ")
        .map((set) => {
          const pulls = set.split(", ");
          return pulls.every((pull) => {
            const [count, color] = pull.split(" ");
            return maxCount[color] >= Number(count);
          });
        })
        .every((p) => p);
    })
    .reduce((s, result, i) => {
      return result ? s + (i + 1) : s;
    }, 0);

  return;
}

console.log(partTwo("input.txt"));
