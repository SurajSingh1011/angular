var Student = /** @class */ (function () {
    function Student(info, marks) {
        var _this = this;
        this.getResult = function () {
            return _this.marks >= 40 ? "PASS" : "FAIL";
        };
        this.id = info.id;
        this.name = info.name;
        this.marks = marks;
    }
    Student.prototype.getMarks = function () {
        return this.marks;
    };
    return Student;
}());
var student1 = new Student({ id: 1, name: "Suraj" }, 75);
console.log("Name: ".concat(student1.name));
console.log("Marks: ".concat(student1.getMarks()));
console.log("Result: ".concat(student1.getResult()));
