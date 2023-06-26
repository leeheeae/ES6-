// 무한으로 반복하는 함수
function* infinity(i = 0) {
  while (true) yield i++;
}

// 마지막 값과 이터러블을 받아 실행시키는 이터레이터
function* limit(limit:number, iterable:Iterable<number>) {
  for (const a of iterable) {
    yield a;
    if (a === limit) return;
  }
}

function* odds(l: number) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

for (const a of odds(10)) console.log(a);
