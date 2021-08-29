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

var age = 10;
