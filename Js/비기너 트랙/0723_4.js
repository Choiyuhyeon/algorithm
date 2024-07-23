// 배열의 유사도

// 방법 1
function solution(s1, s2) {
  var n = 0;
  for (let i in (s1, s2)) {
    for (let j in (s1, s2)) {
      if (s1[i] === s2[j]) {
        n += 1;
      }
    }
  }
  return n;
}

// 방법 2

function solution2(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}
// 두 배열의 길이 - 집합(집합은 중복 요소가 제거됨)
// 여기서 ...은 스프레드 연산자로, 배열을 합치거나, 복사본을 생성할때 사용

// 스프레드 연산자 예시

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6] // 이런식으로 배열 합치기
let copiedArray = [...array1]; // [1, 2, 3] // 배열 복사
