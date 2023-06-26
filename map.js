const products = [
  { name: '가방', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '핸드폰케이스', price: 15000 },
  { name: '후드티', price: 30000 },
  { name: '바지', price: 25000 },
];

// # map과 비교하는 for of 문 예시
// map
const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};
console.log(map((p) => p.name, products));

let names = [];
for (const product of products) {
  names.push(product.name);
}
console.log(names);

// 이터러블 프로토콜을 따른 map의 다형성
// document.querySelectorAll('*').map((el) => el.nodeName)

function* gen() {
  yield 2;
  if (false) yield 3;
  yield 4;
}
console.log(map((a) => a * a, gen()));

let m = new Map();
m.set('a', 10);
m.set('b', 20);
console.log(new Map(map(([k, a]) => [k, a * 2], m)));
