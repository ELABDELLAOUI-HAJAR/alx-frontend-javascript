interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Martin",
  age: 26,
  location: 'New York'
};

const student2: Student = {
  firstName: "Soulayman",
  lastName: "Nadir",
  age: 32,
  location: 'London'
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLElement = document.createElement("table");

studentsList.forEach((student) => {
  const tr: HTMLElement = document.createElement("tr");
  const tdFirstName: HTMLElement = document.createElement("td");
  const tdLocation: HTMLElement = document.createElement("td");

  tdFirstName.textContent = student.firstName;
  tdLocation.textContent = student.location;

  tr.append(tdFirstName);
  tr.append(tdLocation);
  table.append(tr);
});
document.body.append(table);
