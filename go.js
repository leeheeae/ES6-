// 함수들과 인자들을 전달해서 즉시 값을 평가하는데에 사용
const go = (...args) => args.reduce((arg, fun) => fun(arg));

go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  console.log
);
