var once = function(fn) {
let  hasRun = false
    return function(...args){
       if(!hasRun){
        hasRun = true
        return fn(...args)
       }
       return undefined
    }
};


const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);

console.log(
    onceFn(1, 2, 3) // ➜ 6（第一次執行 fn）

);

console.log(

    onceFn(2, 3, 6) // ➜ undefined（不會執行 fn）
);
