function sum(a, b, c) {
    console.log("abc",a,b,c);
  return a + b + c;
}

function callSum(...params) {  // ✅ Rest：收集傳進來的參數
    console.log("params",params);
  return sum(...params);       // ✅ Spread：展開陣列傳給 sum
}

console.log(callSum(2, 4, 6));  // ➔ 12