// 배열의 평균값

function solution(numbers) {
  return numbers.reduce((a, c) => a + c, 0) / numbers.length;
}

// reduce함수 숙지 필요!
// 내장함수를 잘 공부하고 가야할듯합니다
