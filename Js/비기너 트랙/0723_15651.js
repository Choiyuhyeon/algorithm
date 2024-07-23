// acmicpc 15651

// 입력 n,m. until n, 자릿수 m
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [n, m] = input.split(' ').map(Number);

function generateSequences(cur, depth) {
  if (depth === m) {
    console.log(cur.join(' '));
    return;
  }

  for (let i = 1; i <= n; i++) {
    generateSequences([...cur, i], depth + 1);
  }
}

generateSequences([], 0);
