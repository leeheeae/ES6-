// args로 받아서 처리 연습
const go = (...args) => args.reduce((arg, fun) => fun(arg));

go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  console.log
);
