const products = [
  { name: '가방', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '핸드폰케이스', price: 15000 },
  { name: '후드티', price: 30000 },
  { name: '바지', price: 25000 },
];

const num = [1, 2, 3, 4, 5];
let total = 0;
for (const n of num) {
  total = total + n;
}
console.log(total);

/*
 * reduce의 외부 인터페이스
 * - 시작하는 값을 생략했을 경우 첫번째 값을 꺼내서 실행함
 */
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const add = (a, b) => a + b;

// 재귀적으로 하나의 함수를 누적하며 실행
console.log(reduce(add, 0, [1, 2, 3, 4, 5]));
// 15
console.log(add(add(add(add(add(0, 1), 2), 3), 4), 5));
// 15
