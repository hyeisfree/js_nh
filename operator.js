//1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 =${1 + 2}`);

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substrat
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder (나눈 나머지 값)
console.log(2 ** 3); // exponentiation (2의 3제곱)

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
//counter = counter + 1; counter에 1을 더해서 counter에 값을 할당하면, counter는 3이 됨.
//preIncrement = counter; 그리고, 하나를 증가한 다음에 preIncrement라는 변수에 counter의 값을 할당.
//preIncrement -> 3이 들어옴.
let counter1 = 2;
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
//postIncrement = counter;
//counter = counter + 1;
//먼저, 변수의 값을 postIncrement에 할당한 다음에 counter의 값을 1 증가.
// 3을 postIncrement에 할당하고 나서 counter의 값이 1 증가하므로 counter는 4가 할당됨.
// --도 같음.
//=> 앞에 연산자가 오면, 바로 업데이트 되어서 할당. 뒤에 연산자가 오면, 할당한 후 업데이트는 그 뒤에 일어남.

//4. Assigment operators(대입 연산자)
let x = 3;
let y = 6;
x += y; // x = x +y; 반복되는 x 생략.
x -= y;
x *= y;
x /= y;

//5. Comparison operators(비교 연산자)
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

//6. logical operators: || (or), &&(and), !(not)

//|| (or) 첫 번째가 true가 나오면, 뒤에가 true든 false든 상관 없이 true. expression이나 함수를 호출하는 것들은 맨 뒤에 작성.
const value1 = false;
const value2 = 4 < 2;
console.log(`or: ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}

//&& (and), 첫 번째가 false 나오면 무조건 다 fasle.
const value3 = false;
const value4 = 4 < 2;
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}
//null 체크할 때도 and 연산자가 많이 사용됨. -> nullableObject && nullableObject.something object가 null이면 false이기 때문에, 뒤는 실행 안됨.
//nullableObject가 null이 아닐 때만, )bject의 something을 가져옴.
// if (nullableObject != null) {
//nullableObject.something;
//}

//! (not)
const value5 = false;
const value6 = 4 < 2;
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}
console.log(!value1);

//7. Eauality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with tyoe conversion 타입을 변경해서 검사.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive); //!= 똑같지 않다 -> 둘은 똑같아~

//=== strict equality, no type conversion type이 다르면 다르다. 추천
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const nahye1 = { name: "nahye" };
const nahye2 = { name: "nahye" };
const nahye3 = nahye1;
console.log(nahye1 == nahye2); //nahye1과 nahye2는 각각 다른 reference를 저장되어 있기 때문에, 다름. -> false
console.log(nahye1 === nahye2); //nahye1과 nahye2 똑같은 타입이든 아니든 다른 reference를 가리키기 때문에 다름. -> false
console.log(nahye1 === nahye3); //nahye1이 가지고 있는 reference value를 nahye3으로 할당했기 때문에, 똑같은 reference를 가짐. -> true

//8. Conditional operators: if
//if, else if, else
const nm = "coder";
if (nm === "nahye") {
  //if 문장이 true면, if 문장 실행. false면 다른 문장
  console.log("Welcome, Nahye!");
} else if (nm === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

//9. Ternary operator: ? if를 간단하게 쓸 수 있음.
// condition ? value1 : value2;
console.log(nm === "nahye" ? "yes" : "no");
//nm === 'nahye' 문장에 ?를 붙이면, true면 yes 출력. false면 no 출력. 값을 할당하거나 간단하게 출력할 때 사용.

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in Ts
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
    console.log("love you!");
    break;
  case "Firefox":
    console.log("same all!");
    break;
}

//11. loops
//while loop, while the condition is truthy,
//body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//do while loop, body code is executed first,
//then check the condition. 블럭을 먼저 실행함. 조건이 맞는지 안맞는지를 검사함.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

//for loop, for(begin; condition; step)
//시작문장은 딱 한 번만 호출됨.condition이 맞는지 아닌지 검사한 후 step 실행. condition이 안맞을 때까지 실행됨.(기존 변수가 안맞을 때까지)
for (i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}
//블럭 안에 지역변수 선언

//nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}
//i가 0일 때 j를 0-9까지 돌리기.

//break(loop를 완전히 끝냄.), continue(지금 것을 스킵하고 다음 스텝으로 넘어감.)
