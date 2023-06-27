// 함수들과 인자들을 전달해서 즉시 값을 평가하는데에 사용
const go = (...args) => args.reduce((arg, fun) => fun(arg));

// 함수를 리턴하는 함수
const pipe =
  (f, ...functions) =>
  (...args) =>
    go(f(...args), ...functions);

const f = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
);

console.log(f(0, 1))