// 중복된 문자 제거

function solution(my_string) {
  return [...new Set(my_string)].join('');
}
// 자바스크립트는 set으로 만들어도 순서를 보장하기 때문에 쉽게 사용가능.
// 1. new Set으로 my_string의 중복 요소 제거
// 2. 스프레드 연산으로 배열로 확장
// 3. .join으로 문자열로 결합
