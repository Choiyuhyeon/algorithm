// k의 개수

// 방법 1
function solution(i, j, k) {
  let s = '';
  for (i; i <= j; i++) {
    s += i;
  }
  return s.split(k).length - 1;
}

// 방법 2 -- 다시봐야함. 헷갈려요
function solution(i, j, k) {
  return (
    Array(j - i + 1)
      .fill(i)
      .map((v, index) => v + index)
      .join('')
      .split(k).length - 1
  );
}
