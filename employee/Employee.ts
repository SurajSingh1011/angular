interface StudentInfo {
  id: number;
  name: string;
}

class Student {
  public id: number;
  public name: string;
  private marks: number;

  constructor(info: StudentInfo, marks: number) {
    this.id = info.id;
    this.name = info.name;
    this.marks = marks;
  }

  getMarks(): number {
    return this.marks;
  }

  getResult = (): string => {
    return this.marks >= 40 ? "PASS" : "FAIL";
  };
}

const student1 = new Student(
  { id: 1, name: "Suraj" },
  75
);

console.log(`Name: ${student1.name}`);
console.log(`Marks: ${student1.getMarks()}`);
console.log(`Result: ${student1.getResult()}`);
