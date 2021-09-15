// TypeScript 함수의 타이핑, 선택적 매개 변수와 기본 매개변수
// 함수의 타입 명시
//      1. 함수의 반환 (Return) 타입
//      2. 함수의 매개변수 (Parameter)
/* 1. 함수의 반환 (Return) 타입 명시하기
function 함수이름(매개변수1, 매개변수2): 함수의 반환타입 {

}
*/
/* 2. 함수의 매개변수 (Parameter)의 타입 명시하기
function 함수이름(매개변수1: 반환타입, 매개변수2: 반환타입): 함수의 반환타입 {

}
*/
function sendGreeting(message, userName) {
    console.log(message + ", " + userName);
}
sendGreeting("Hello", "Mark");
// -> Hello, Mark
// sendGreeting("Hello"); // -> 함수에 정의된 모든 매개변수가 함수에 필요하다고 가정하기 때문에 에러발생
// 선택적 매개변수 (Optional Parameter) -> ex) userName?: string
// 전달되는 매개변수가 여러개이고 몇가지만 선택적 매개변수인 경우
// -> 선택적 매개변수들은 반드시 필수 매개변수 뒤에 위치!
/* 타입스크립트의 규칙상
하나의 매개변수가 선택적 매개변수가 되면
그 매개변수의 오른쪽에 있는 나머지 매개변수들도
선택적 매개변수가 되어야하기 때문이다.*/
function sendGreeting2(message, userName) {
    console.log(message + ", " + userName);
}
sendGreeting2("Hello");
// -> Hello, undefined
// 선택적 매개변수일때 undefined가 나오는것을 대체하려면 기본 매개변수 설정!
// 기본 매개변수 (Default Parameter) -> (message = "Good morning", userName = "there")
function sendGreeting3(message, userName) {
    if (message === void 0) { message = "Good morning"; }
    if (userName === void 0) { userName = "there"; }
    console.log(message + ", " + userName);
}
sendGreeting3();
// -> Good morning, there
sendGreeting3("Hello");
// -> Hello, there
sendGreeting3("안농", "형지야");
// -> 안농, 형지야
/* 화살표 함수 (Arrow Function)
--------------------------------
1. 기존 함수
function add(num1, num2) {
  return num1 + num2;
}
--------------------------------
2. 화살표 함수
const add = (num1, num2) => num1 + num2;
*/
var sendGreeting4 = function (message, userName) {
    if (message === void 0) { message = "Good morning"; }
    if (userName === void 0) { userName = "there"; }
    return console.log(message + ", " + userName);
};
sendGreeting4();
// -> Good morning, there
sendGreeting4("Hello");
// -> Hello, there
sendGreeting4("안농", "화살표야");
// -> 안농, 화살표야
