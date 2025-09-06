/*2635. Apply Transform Over Each Element in Array
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method.*/

// Example 1:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

// Example 2:
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3:
// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

// var map = function (arr, fn) {
//   let result = [];
//   arr.forEach((element, idx) => {
//     result.push(fn(element, idx));
//   });
//   return result;
// };

// function map(arr, fn) {
//   // 1. 建立一個空陣列
//   // 2. 迭代 arr
//   // 3. 每個元素呼叫 fn(值, 索引)
//   // 4. 把結果放到新陣列
//   // 5. 回傳新陣列
// }

let map = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
     result.push(fn(arr[i], i));
  }
  return result;
};


const arr1 = [1, 2, 3];
const plusOne = (n) => n + 1;
console.log(map(arr1, plusOne)); // 預期輸出 [2, 3, 4]