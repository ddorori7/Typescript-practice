// OOP 객체지향 프로그래밍, 클래스와 오브젝트 관계
// --strictPropertyInitialization
// The strictPropertyInitialization setting controls whether class fields need to be initialized in the constructor.
var BadGreeter = /** @class */ (function () {
    function BadGreeter() {
    }
    return BadGreeter;
}());
var GoodGreeter = /** @class */ (function () {
    function GoodGreeter() {
        this.name = "hello";
    }
    return GoodGreeter;
}());
// Note that the field needs to be initialized in the constructor itself.
// TypeScript does not analyze methods you invoke from the constructor to detect initializations,
// because a derived class might override those methods and fail to initialize the members.
// If you intend to definitely initialize a field through means other than the constructor
// (for example, maybe an external library is filling in part of your class for you),
// you can use the definite assignment assertion operator, !:
var OKGreeter = /** @class */ (function () {
    function OKGreeter() {
    }
    return OKGreeter;
}());
var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        // 클라스내에서 정의된 변수들은 클라스 내에서 this 키워드를 통해 접근 가능!
        //----------------------------------------------------------------------------
        // 클라스 내에 정의된 함수: 메소드 (Method)
        // 클라스 속에서 정의된 함수들은 클라스 내 정의된 변수들에 바로 접근
        // -> 상대적으로 적은 매개변수를 가짐
        this.printEmployeeDetails = function () {
            console.log(_this.fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + " \uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this.hourlyRate * _this.workingHoursPerWeek + " \uB2EC\uB7EC \uC774\uB2E4.");
        };
    }
    return Employee;
}());
// 클라스를 객체를 만들기 위한 설계도, 생산틀
// 클라스의 인스턴스(객체) 생성
var employee1 = new Employee();
employee1.printEmployeeDetails();
// -> undefined의 직업은 undefined 이고 일주일의 수입은 NaN 달러 이다.
employee1.fullName = "민수";
employee1.age4 = 28;
employee1.jobTitle = "주니어 웹개발자";
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();
// -> 민수의 직업은 주니어 웹개발자 이고 일주일의 수입은 1400 달러 이다.
