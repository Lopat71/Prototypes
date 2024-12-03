// function sum(...args) {
//   return args.reduce((sum, a) => sum + a);
// }

// sum(1, 2, 3, 4, 5); // 11

// const currySum = curry(sum);

// currySum(1)(2)(3)(5); // 11

function currySum(a) {
  let sum = a;

  function inner(b) {
    if (b === undefined) return sum;
    sum += b;
    return inner;
  }

  inner[Symbol.toPrimitive] = () => sum;
  return inner;
}

console.log(+currySum(1)(2)(3)(5)(10)(8));

// function curry(fn) {}
