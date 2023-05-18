let a = 3; /* 후위 연산자 */
const b = a++; /* a가 b에 먼저 할당된 뒤에 연산을 수행함. */
console.log(`a:${a}, b:${b}`);

let c = 3;
let d; /* 이 때 d는 undefined */

d = c; /* 1. 변수를 먼저 대입함. (이 때의 c = 3, d = 3) */
c = c + 1; /* 2.그 다음 연산을 수행함. (이 떄의 c = 4, d = 3) */
console.log(`c:${c}, d:${d}`); /* 3. c = 4, d = 3 */

let x = 3; /* 전위 연산자 */
const y = ++x;

console.log(`x:${x}, y:${y}`);

let e = 3;
let f; /* 이 시점에서 i는 undefined */

e = e + 1; /* ① 연산을 먼저 수행한 뒤 (이 시점에서 e=4) */
f = e; /* ② 그 다음 변수에 할당 (이 시점에서 e=4, f=4) */
console.log(`e:${e}, f:${f}`); /* e:4, f:4 */

let num;

for (num = 1; num <= 10; num++) {
  console.log(num);
} //1부터 10까지 반복.

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

do {
  console.log(`do while: ${i}`);
  i--;
} while (
  i > 0
); /* 블럭을 먼저 실행한 다음에 조건이 맞는 지 안맞는 지 검사함. */

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    /* i가 5일 때 */
    break; /* for 문을 종료함. */
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    /* i가 5일 때
    continue; */
    /*5를 건너뛰고 다음부터 다시 시작. */
  }
  console.log(i);
}
