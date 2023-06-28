const { reduce } = require('./go,pipe/fx');

const add = (a, b) => a + b;

// # 기본 레인지
// 모든 부분이 한 번에 평가가 진행됨
const range = (l) => {
  let i = -1;
  let res = [];
  while (++i < l) {
    res.push(i);
  }
  return res;
};

let list = range(4);
console.log(list); // [0, 1, 2, 3,]
console.log(reduce(add, list)); // 6

// 느긋한 레인지
// 하나씩 꺼내서 평가
const L = {};
L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};
let list2 = L.range(4);
console.log(list2);
console.log(reduce(add, list));

// 테스트
function test(name, time, f) {
  console.time(name);
  while (time--) f();
  console.timeEnd(name);
}

/**
 * range: 1.677s, L.range: 1.381s
 * 느긋한 레인지가 좀 더 빠름
 */
test('range', 10, () => reduce(add, range(10000000)));
test('L.range', 10, () => reduce(add, L.range(10000000)));
