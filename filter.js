const products = [
  { name: '가방', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '핸드폰케이스', price: 15000 },
  { name: '후드티', price: 30000 },
  { name: '바지', price: 25000 },
];

// filter
const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

let under20000 = [];
for (const p of products) {
  if (p.price < 20000) under20000.push(p);
}
console.log(...under20000);

let over20000 = [];
for (const p of products) {
  if (p.price >= 20000) over20000.push(p);
}
console.log(...over20000);
console.log(...filter((p) => p.price >= 20000, products));

console.log(filter((n) => n % 2, [1, 2, 3, 4]));

console.log(
  filter(
    (n) => n % 2,
    (function* () {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
    })()
  )
);
