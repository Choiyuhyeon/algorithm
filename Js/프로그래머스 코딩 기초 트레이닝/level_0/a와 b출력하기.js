const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  // 아래가 핵심! 줄바꿈 문자를 사용하여 문장 분리
  console.log("a = " + Number(input[0]) + "\nb = " + Number(input[1]));
});
