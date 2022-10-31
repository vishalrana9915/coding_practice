const fib = (number, memo) => {
  memo = memo || {};

  if (memo[number]) return memo[number];

  if (number <= 1) return 1;

  return (memo[number] = fib(number - 1, memo) + fib(number - 2, memo));
};

console.log(fib(5));
