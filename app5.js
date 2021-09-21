// 생성자(Constructor), 접근 제한자(Access Modifiers), Getter와 Setter
var EmployeeClass = /** @class */ (function () {
    // fullName 앞에 언더바 _ 를 붙여서 private멤버라는 것을 암묵적으로 나타냄
    // private _fullName!: string;
    // age!: number;
    // jobTitle!: string;
    // hourlyRate!: number;
    // workingHoursPerWeek!: number;
    // 모든 클래스는 생성자를 가짐.
    // Constructor(생성자)는 클라스로부터 객체를 생성할 때 호출되며 "객체의 초기화를 담당"
    function EmployeeClass(
    // 매개변수(파라미터) -> 전달되는 매개변수를 강제하고 있음
    // 선택적 매개변수로 선언하면 강제 ㄴㄴ -> 반드시 필수 매개변수 뒤에 위치!(	jobTitle?: string)
    _fullName, _age, _jobTitle, _hourlyRate, workingHoursPerWeek // 객체가 생성될 때, 컨스트럭터의 매개변수로 전달된 값은, 객체의 프로퍼티 값으로 자동으로 그 값이 초기화 되고 할당됨.
    ) {
        var _this = this;
        this._fullName = _fullName;
        this._age = _age;
        this._jobTitle = _jobTitle;
        this._hourlyRate = _hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
        // 코드에서 아무런 Access Modifiers (접근제한자)가 없으면 public임
        // (public) printEmployeeDetails = (): void =>{}
        this.printEmployeeDetails = function () {
            console.log(_this._fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this._jobTitle + "\uC774\uACE0, \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this._hourlyRate * _this.workingHoursPerWeek + " \uB2EC\uB7EC\uC774\uB2E4.");
        };
        // constructor 앞에 Access Modifier를 붙여주면 암묵적으로 클라스의 필드, 멤버변수로 선언이 됌 // 아래 /* */ 사이가 필요 없어짐
        /*
        전달된 매개변수(파라미터)를 프로퍼티의 값으로 초기화
        this._fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
    */
    }
    Object.defineProperty(EmployeeClass.prototype, "fullName", {
        // private 멤버에 접근하기 위해 getter/ setter 선언
        // getter
        get: function () {
            return this._fullName;
        },
        // setter
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return EmployeeClass;
}());
// 클라스를 통해서 객체를 생성할 때, Constructor(생성자)에 정의된 Parameter(매개변수들)의 값이, Arguments 로 전달 되어야 함!
var employee2 = new EmployeeClass("민수", 28, "주니어 개발자", 40, 35);
console.log(employee2.fullName); // getter를 활용!
employee2.fullName = "헨리"; // setter를 활용!
employee2.printEmployeeDetails();
// 민수의 직업은 주니어 개발자이고, 일주일의 수입은 1400 달러이다.
// 객체의 이름을 바꿈 -> 외부로부터 데이터를 보호하기 위해 이런식으로 객체의 프로퍼티에 접근하여 값을 바꾸는 경우를 피하고 싶을때
// -> Access Modifiers (접근제한자) 를 사용!
// employee2._fullName = "헨리"; // -> fullName 프로퍼티는 private이기 때문에 에러메시지!
employee2.printEmployeeDetails();
// 헨리의 직업은 주니어 개발자이고, 일주일의 수입은 1400 달러이다.
// Access Modifiers (접근제한자)는 클라스 속 멤버 변수(프로퍼티)와 메소드에 적용될 수 있는 키워드
// 클라스 외부로 부터의 접근을 통제 -> 버그를 줄이고 코드 안정성 향상
// public -> 클라스의 외부에서 접근 가능함
// private -> 클라스 내에서만 접근가능, 클라스의 외부에서 접근 불가능(비공개 멤버)
// protected -> 클라스 내부, 그리고 상속받은 자식 클라스에서 접근가능
