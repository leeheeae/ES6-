// 함수들과 인자들을 전달해서 즉시 값을 평가하는데에 사용
export const go = (...args) => args.reduce((arg, fun) => fun(arg));

// 함수를 리턴하는 함수
export const pipe =
  (f, ...functions) =>
  (...args) =>
    go(f(...args), ...functions);

// curry: 함수를 받아서 함수를 리턴하고 인자를 받아서 원하는 개수만큼의 인자를 받아왔을 때 받아뒀던 함수를 실행시키는 함수
export const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

export const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

export const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});
