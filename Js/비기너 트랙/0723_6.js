// 배열 회전시키기
// 내장함수를 몰라서 꽤나 어려웠어요ㅛㅛㅛ

// 틀린 답안
// function solution(numbers, direction) {
//   answer = [];
//   for (let i in numbers) {
//     // of문은 배열의 값을 반복하는데 사용되고, 인덱스를 얻는데에는 적합하지 않음
//     if (direction === 'left') {
//       answer[i - 1] = numbers[i];
//     } else if (direction === 'right') {
//       answer[i + 1] = numbers[i];
//       if (i === numbers.length) {
//         answer[1] === numbers[i];
//       }
//     }
//   }
//   return answer;
// }

// 방법 1
function solution(numbers, direction) {
  if (direction === 'right') {
    numbers = [numbers.pop(), ...numbers];
  } else {
    numbers = [...numbers.slice(1), numbers.shift()];
  }
  return numbers;
}

// 방법 2

function solution(numbers, direction) {
  if (direction == 'right') {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}

// shift, unshift, pop, push, ...(스프레드 연산자)
