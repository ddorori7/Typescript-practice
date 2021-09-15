let someValue: any = 5;
// any 타입은 어떤 타입이든 모두 ok
someValue = "hello";
someValue = true;
// but 유지보수를 위해 최대한 피하는게 좋음 -> 제한적으로만 사용

// 변수에 제한된 타입들을 동시에 지정하고 싶을때는
// -> 유니언 타입
let someValue1: number | string; // 두 타입중에서 가능

let price: number | string = 5;
price = "free";
// price = true; // -> 에러메시지

// 같은 코드를 반복하는 것 보다는 코드를 타입으로 지정하고 재활용!
// -> Type Aliases
type StrOrNum = number | string;

// 타입가드 예시(type guard)
// -> 다른 예시는 구글검색: typescript type guards
type StringOrNum = string | number;
let itemPrice: number;

const setItemPrice = (price: StringOrNum): void => {
  // itemPrice = price;
  // -> price의 타입이 문자인경우 숫자에 할당될 수 없기 때문에 에러메시지

  // -> type of Operator(typeof 연산자) + 조건문 사용 => "타입가드"
  if (typeof price === "string") {
    itemPrice = 0;
  } else {
    itemPrice = price;
  }
};

setItemPrice(50);
