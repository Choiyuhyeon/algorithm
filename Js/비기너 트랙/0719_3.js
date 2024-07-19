// https://jungol.co.kr/problem/1291?cursor=eyJwcm9ibGVtc2V0Ijo2LCJmaWVsZCI6MCwiaWR4IjowfQ==
// 구구단

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printMultiplicationTable(start, end) {
  if (start < 2 || start > 9 || end < 2 || end > 9 || start < end) {
    console.log('INPUT ERROR');
    askForInput();
    return;
  }

  for (let i = start; i >= end; i--) {
    for (let j = 1; j <= 9; j++) {
      process.stdout.write(`${i} * ${j} = ${i * j}`);
      if (j !== 9) {
        process.stdout.write('   ');
      }
    }
    console.log('');
  }

  rl.close();
}

function askForInput() {
  rl.question('시작 범위와 끝 범위를 입력하세요 (예: 4 3): ', (input) => {
    const [s, e] = input.split(' ').map(Number);
    printMultiplicationTable(s, e);
  });
}

askForInput();

// 오답...?
