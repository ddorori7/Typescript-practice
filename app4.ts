// OOP 객체지향 프로그래밍, 클래스와 오브젝트 관계

// --strictPropertyInitialization

// The strictPropertyInitialization setting controls whether class fields need to be initialized in the constructor.

class BadGreeter {
  name!: string;
  // Property 'name' has no initializer and is not definitely assigned in the constructor.
}
class GoodGreeter {
  name: string;

  constructor() {
    this.name = "hello";
  }
}
// Note that the field needs to be initialized in the constructor itself.
// TypeScript does not analyze methods you invoke from the constructor to detect initializations,
// because a derived class might override those methods and fail to initialize the members.

// If you intend to definitely initialize a field through means other than the constructor
// (for example, maybe an external library is filling in part of your class for you),
// you can use the definite assignment assertion operator, !:

class OKGreeter {
  // Not initialized, but no error
  name!: string;
}

class Employee {
  // 클라스 내에 정의된 변수: 프로퍼티 (Property)
  fullName!: string;
  age4!: number;
  jobTitle!: string;
  hourlyRate!: number;
  workingHoursPerWeek!: number;
  // 클라스내에서 정의된 변수들은 클라스 내에서 this 키워드를 통해 접근 가능!

  //----------------------------------------------------------------------------
  // 클라스 내에 정의된 함수: 메소드 (Method)
  // 클라스 속에서 정의된 함수들은 클라스 내 정의된 변수들에 바로 접근
  // -> 상대적으로 적은 매개변수를 가짐
  printEmployeeDetails = (): void => {
    console.log(
      `${this.fullName}의 직업은 ${this.jobTitle} 이고 일주일의 수입은 ${
        this.hourlyRate * this.workingHoursPerWeek
      } 달러 이다.`
    );
  };
}

// 클라스를 객체를 만들기 위한 설계도, 생산틀
// 클라스의 인스턴스(객체) 생성
let employee1 = new Employee();
employee1.printEmployeeDetails();
// -> undefined의 직업은 undefined 이고 일주일의 수입은 NaN 달러 이다.
employee1.fullName = "민수";
employee1.age4 = 28;
employee1.jobTitle = "주니어 웹개발자";
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();
// -> 민수의 직업은 주니어 웹개발자 이고 일주일의 수입은 1400 달러 이다.
