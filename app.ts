//  땅콩코딩
//  타입스크립트 설치 환경설정 타입추론 타입명시 인터페이스
//  열거형(Enum)과 리터럴 타입

function logName(name: string) {
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
let a = 5;
// a='hello' -> 에러메시지 뜬다.
a = 10;

let student = {
  name: "Jake", //  String
  course: "Getting Staried with TypeScript",
  codingIQ: 80,
  code: function () {
    console.log("brain is working hard");
  },
};

// student.name = 10;
// 이미 String 값으로 할당된 name을 number로 재할당 하려고 하면 빨간줄로 오류를 표시

function calculateCodingIQ(lostPoints: number) {
  // function 위로 마우스를 가져다 대면 함수의 반환값으로 숫자타입을 할당하고 있는것이 보임.(뺄셈 연산자)
  return "값은(100 - lostPoints)";
}

//  타입 명시
let x: string = "나는 영원한 문자열";

let studentID: number = 12345;
let studentName: string = "Jenny kim";
let age: number = 21;
let gender: string = "female";
let subject: string = "Javascript";
let courseCompleted: boolean = false;

// function getStudentDetails(studentID: number): object {
//   //  함수가 반환하는 타입도 명시 가능
//   // 아무것도 반환하지 않으면 void
//   // 반환되는 값이 학생의 정보이니 타입이 object 객체
//   // return null; -> 오류
//   // : object|null 이렇게 하면 여기 포함된 리턴값 된다.
// } -> 이런식으로  object로 주기보다는 아래처럼!

// function getStudentDetails(studentID: number): {
//   studentID: number;
//   studentName: string;
//   age: number;
//   gender: string;
//   subject: string;
//   courseCompleted: boolean;
// } | null {
//   return null;
// } -> 객체타입을 좀더 편하게 만들기 위해 interface 활용

// 숫자 열거형 (Numeric Enum)
// enum GenderType {
//   Male,
//   Female,
//   genderNeutral,
// }
// 자바스크립트 코드로 변환된 모습!
// var GenderType;
// (function (GenderType) {
//   GenderType[(GenderType["Male"] = 0)] = "Male";
//   GenderType[(GenderType["Female"] = 1)] = "Female";
//   GenderType[(GenderType["genderNeutral"] = 2)] = "genderNeutral";
// })(GenderType || (GenderType = {}));

// 문자열 열거형 (String Enum)
enum GenderType {
  Male = "male",
  Female = "female",
  genderNeutral = "genderNeutral",
}
// 자바스크립트 코드로 변환된 모습!
// var GenderType;
// (function (GenderType) {
//     GenderType["Male"] = "male";
//     GenderType["Female"] = "female";
//     GenderType["genderNeutral"] = "genderNeutral";
// })(GenderType || (GenderType = {}));

let student1: Student = {
  studentID: 121212,
  studentName: "Janet",
  age: 30,
  gender: "female",
  // gender: GenderType.Female,
  // Enum 타입을
  // 객체 프로퍼티에 적용할 때
  // -> gender: GenderType.Female
  subject: "Mongo DB",
  courseCompleted: false,
};

// 인터페이스 이름은 대문자로 시작
interface Student {
  // Readonly 프로퍼티는 읽기 전용 프로퍼티로
  // 객체 생성시 할당된 프로퍼티의 값을 바꿀 수 없다!
  readonly studentID: number;
  studentName: string;
  age?: number;
  // 한 프로퍼티가 있어도 되고 없어도 되게 만드는 방법
  //  optional 기호인 ? 를 붙여준다!
  //  ?가 없을때는 아래에서 age값을 제거했을때 에러가 뜨지만
  //  추가후에는 에러가 안뜬다.
  gender: "male" | "female" | "genderNeutral"; // 리터럴 타입
  // gender: GenderType; // enum
  subject: string;
  courseCompleted: boolean;
  //  메소드는 객체내에서 선언된 함수
  // addComment(comment: string): string;
  addComment?: (comment: string) => string;
} // -> 완성된 인터페이스는 타입으로써 사용 가능!
// 인터페이스를 타입으로 가지는 값은
// 인터페이스의 구조를 그 값으로 가지도록 강제된다
// 자바스크립트 코드로 변환되지 않음.
// 인터페이스는 코드가 렌더링 될때
// 아무런 영향력이 없기 때문에
// 타입스크립트 컴파일러가 자바스크립트로 컴파일할때
// 인터페이스 코드를 지워버림.

function getStudentDetails(studentID: number): Student {
  return {
    studentID: 12345,
    studentName: "Jenny kim",
    // age: 21,
    // gender: GenderType.Female,
    gender: "female",
    subject: "Javascript",
    courseCompleted: false,
  };
  // 기본적으로 인터페이스 프로퍼티 중에 하나라도 빠지면 에러뜸
}

function saveStudentDetails(student: Student): void {
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
