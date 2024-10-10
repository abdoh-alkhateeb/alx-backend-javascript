interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: 'John',
    lastName: 'Baker',
    age: 21,
    location: 'Berlin',
  },
  {
    firstName: 'Sarah',
    lastName: 'Adam',
    age: 21,
    location: 'London',
  },
];

const table: HTMLTableElement = document.createElement('table');

const thead: HTMLTableSectionElement = document.createElement('thead');
const headerRow: HTMLTableRowElement = document.createElement('tr');

const headers: string[] = ['First Name', 'Location'];
headers.forEach((headerText: string) => {
  const th: HTMLTableCellElement = document.createElement('th');
  th.appendChild(document.createTextNode(headerText));
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody: HTMLTableSectionElement = document.createElement('tbody');

for (const student of studentsList) {
  const tr: HTMLTableRowElement = document.createElement('tr');

  let td: HTMLTableCellElement = document.createElement('td');
  td.appendChild(document.createTextNode(student.firstName));
  tr.appendChild(td);

  td = document.createElement('td');
  td.appendChild(document.createTextNode(student.location));
  tr.appendChild(td);

  tbody.appendChild(tr);
}

table.appendChild(tbody);

document.body.appendChild(table);
