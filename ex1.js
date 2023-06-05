const square = function (number) {
  return number * number;
};
const x = square(4);
console.log(
  x
); /* number를 parameter로 받아서 number * number의 곱을 구하는 함수 */

function getCircleDiameter(radius) {
  return radius * 2 * Math.PI;
} /* 원의 반지름을 parameter로 받아서 원의 지름을 구하는 함수 */

const radius1 = 6;
const radius2 = 9;

console.log(getCircleDiameter(radius1));
console.log(getCircleDiameter(radius2));
