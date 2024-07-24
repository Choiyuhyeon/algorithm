// 외계행성의 나이

// 내가 생각한 답안.
function solution(age) {
  var alp = 'abcdefghij';
  var sp = age.toString().split(''); // age를 문자열로 변환하고 분리
  var result = '';

  for (var i = 0; i < sp.length; i++) {
    result += alp[parseInt(sp[i])]; // 각 문자를 숫자로 변환한 뒤 알파벳 변환
  }

  return result;
}
