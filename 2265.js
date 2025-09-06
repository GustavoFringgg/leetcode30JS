const createCounter = function (init) {
  let currency = init;
  return {
    increment: () => {
      return ++currency;
    },
    decrement: () => {
      return --currency;
    },
    reset: () => {
      return (currency = init);
    },
  };
};

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
