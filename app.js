function logName(name) {
    console.log(name);
}
logName("jack");
/* 터미널 창에 tsc = typescript compiler
    tsc app.ts(컴파일할 파일이름) 엔터 -> 프로젝트에 app.js 가 생김
    node app.js -> 아래에 콘솔로그 출력
    윈도우 콘솔창 열기 -> control + shift + j
    tsc --init 를 터미널에 입력하면 tsconfig.json 파일이 생성되고 에러메시지가 삭제됨
*/
console.log("hello");
/* 새로운 코드를 넣고 app.js파일로 가면 변경된 typescript의 코드가 업데이트되지 않음 */
/* 매번 tsc app.ts를 하기 번거로운 문제점
    -> [tsc -w app.ts(컴파일할 파일이름)] 를 활용 (w = watch 감시하다)  ex) tsc -w app.ts
    -> 변경내용을 자동을 컴파일 */
// var age = 10;
// 타입 추론
var a = 5;
// a='hello' -> 에러메시지 뜬다.
a = 10;
var student = {
    name: "Jake",
    course: "Getting Staried with TypeScript",
    codingIQ: 80,
    code: function () {
        console.log("brain is working hard");
    }
};
// student.name = 10;
// 이미 String 값으로 할당된 name을 number로 재할당 하려고 하면 빨간줄로 오류를 표시
function calculateCodingIQ(lostPoints) {
    // function 위로 마우스를 가져다 대면 함수의 반환값으로 숫자타입을 할당하고 있는것이 보임.(뺄셈 연산자)
    return 100 - lostPoints;
}
//  타입 명시
var x = "나는 영원한 문자열";
var studentID = 12345;
var studentName = "Jenny kim";
var age = 21;
var gender = "female";
var subject = "Javascript";
var courseCompleted = false;
// 인터페이스를 타입으로 가지는 값은
// 인터페이스의 구조를 그 값으로 가지도록 강제된다
// 자바스크립트 코드로 변환되지 않음.
// 인터페이스는 코드가 렌더링 될때
// 아무런 영향력이 없기 때문에
// 타입스크립트 컴파일러가 자바스크립트로 컴파일할때
// 인터페이스 코드를 지워버림.
function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: "Jenny kim",
        // age: 21,
        gender: "female",
        subject: "Javascript",
        courseCompleted: false
    };
    // 기본적으로 인터페이스 프로퍼티 중에 하나라도 빠지면 에러뜸
}
var student1 = {
    studentID: 121212,
    studentName: "Janet",
    age: 30,
    gender: "Female",
    subject: "Mongo DB",
    courseCompleted: false
};
function saveStudentDetails(student) {
    // student.studentID = 11222;
    // studentID는 readonly라 값이 할당 불가!
}
// saveStudentDetails({
//   studentID: 121212,
//   studentName: "Janet",
//   age: 30,
//   gender: "Female",
//   subject: "Mongo DB",
//   courseCompleted: false,
// });
saveStudentDetails(student1);
