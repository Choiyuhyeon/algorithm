// A로 B만들기

// A,B둘다 정렬해서 두개가 동일하면 1출력, 그렇지 않다면 0출력
// 방법1
function solution(before, after) {
  a = [...before].sort().join('');
  b = [...after].sort().join('');

  if (a == b) {
    return 1;
  } else {
    return 0;
  }
}

// 방법2
function solution2(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('');
}

// 주의사항. 자바스크립트에서는 array와 array비교를 할때 바로 할 수 없어서, 문자열 비교를 진행했다.
