interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;

printTeacher = function (firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
};

interface studentConstructorInterface {
  new(firstName: string, lastName: string): StudentClass;
}

interface studentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements studentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstname: string, lastname: string) {
    this.firstName = firstname;
    this.lastName = lastname;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return `${this.firstName}`;
  }
}
