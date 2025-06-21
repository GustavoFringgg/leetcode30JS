const f = x => x + 1;
const g = x => x * x;
const h = x => x - 3;

// const functions = [f, g, h];  // 我們用 reverse 或倒著跑
// function compose(functions){
//     return function(x){
//         let result = x
//         for(let i = functions.length -1;i>=0;i--){
//             result = functions[i](result)
//         }
//         return result
//     }
// }

// console.log(composedFn(8));  // ➜ f(g(h(5))) = f(g(2)) = f(4) = 5

function compose(functions){
    return function(x){
        let result = x
        for(let i=functions.length -1;i>=0;i--){
            result = function[i](result)
        }
        return result
    }
}
const composedFn = compose([]);