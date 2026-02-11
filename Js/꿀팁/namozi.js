let arr = [1, 2, 3, 4, 5];
let arr2 = [];
for (let i = 0; i < 10; i++) {
  arr2.push(arr[i % arr.length]);
}
console.log(arr2);

// 나머지 연산 (배열을 순회할때 유용하게 사용)
