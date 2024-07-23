// 가위 바위 보

// 가위:2 바위:0 보:5

function solution(rsp) {
  rsp = rsp.split('');
  let answer = [];
  for (let i of rsp) {
    if (rsp[i] === '0') {
      answer.push(5);
    } else if (rsp[i] === '2') {
      answer.push(0);
    } else if (rsp[i] === '5') {
      answer.push(2);
    }
  }
  return answer.join('');
}

//split을 사용하면 요소가 다 char형이다!. (숫자자료형으로 비교하지 말것)
// 숫자 자료형으로 비교하고 싶으면 Math.floor(x);사용
