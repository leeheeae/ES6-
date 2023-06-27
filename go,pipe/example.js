const { go, pipe, curry, curryMap, curryFilter, curryReduce } = require('./fx');
const { map, filter, reduce } = require('../map,filter,reduce/fx');

const products = [
  { name: '가방', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '핸드폰케이스', price: 15000 },
  { name: '후드티', price: 30000 },
  { name: '바지', price: 25000 },
];

const add = (a, b) => a + b;

// 수정전
go(
  products,
  (products) => filter((p) => p.price < 20000, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce(add, prices),
  console.log
);

// 수정 후
go(
  products,
  curryFilter((p) => p.price < 20000),
  curryMap((p) => p.price),
  curryReduce(add),
  console.log
);

const mult = curry((a, b) => a * b);

console.log(mult(3)(2));

// pipe로 분리하여 사용
const total_price = pipe(
  curryMap((p) => p.price),
  curryReduce(add)
);

const base_total_price = (predicate) =>
  pipe(curryFilter(predicate), total_price);

go(
  products,
  base_total_price((p) => p.price < 20000),
  console.log
);
