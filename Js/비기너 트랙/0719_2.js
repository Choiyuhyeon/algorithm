// 머쓱이보다 키 큰 사람

// 원래 알고있던 방법1
function solution(array, height) {
  let count = 0;
  for (i of array) {
    // 이런식으로 조건문 가능 'of문'
    if (i > height) {
      count += 1;
    }
  }
  return count;
}

// 새로운 방법
function solution(array, height) {
  return array.filter((v) => v > height).length;
}
