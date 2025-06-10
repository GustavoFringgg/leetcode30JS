var expect = function (num) {
  return {
    toBe: (val) => {
      if (val === num) return true ;
      throw new Error("Not Equal" );
    },
    notToBe: (val) => {
      if (val !== num) return true;
      throw new Error("Equal");
    },
  };
};

console.log(expect(5).toBe(5));