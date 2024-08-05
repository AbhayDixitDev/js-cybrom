const studentData = [
    { id: 1, name: 'John Doe', course: 'BSc Computer Science', mobileNumber: '9876543210', address: '123 Main St, Anytown, USA' },
    { id: 2, name: 'Jane Smith', course: 'BA English', mobileNumber: '9123456789', address: '456 Elm St, Othertown, USA' },
    { id: 3, name: 'Bob Johnson', course: 'MSc Data Science', mobileNumber: '7654321098', address: '789 Oak St, Thistown, USA' },
    { id: 4, name: 'Alice Brown', course: 'BCom Accounting', mobileNumber: '5432109876', address: '321 Pine St, Thatstown, USA' },
    { id: 5, name: 'Mike Davis', course: 'PhD Computer Engineering', mobileNumber: '6543210987', address: '901 Maple St, Thiscity, USA' },
    { id: 6, name: 'Emily Taylor', course: 'MA Psychology', mobileNumber: '8765432109', address: '234 Cedar St, Othertown, USA' },
    { id: 7, name: 'Sarah Lee', course: 'BSc Biology', mobileNumber: '9876543210', address: '567 Elm St, Anytown, USA' },
    { id: 8, name: 'David Kim', course: 'MBA Business Administration', mobileNumber: '9123456789', address: '890 Oak St, Thistown, USA' },
    { id: 9, name: 'Lisa Nguyen', course: 'BA History', mobileNumber: '7654321098', address: '345 Pine St, Thatstown, USA' },
    { id: 10, name: 'Kevin White', course: 'PhD Physics', mobileNumber: '5432109876', address: '678 Maple St, Thiscity, USA' },
    { id: 11, name: 'Rachel Hall', course: 'BSc Chemistry', mobileNumber: '6543210987', address: '901 Cedar St, Othertown, USA' },
    { id: 12, name: 'Michael Brown', course: 'MA Economics', mobileNumber: '8765432109', address: '234 Elm St, Anytown, USA' },
    { id: 13, name: 'Jessica Martin', course: 'BCom Finance', mobileNumber: '9876543210', address: '567 Oak St, Thistown, USA' },
    { id: 14, name: 'Christopher Lee', course: 'PhD Computer Science', mobileNumber: '9123456789', address: '890 Pine St, Thatstown, USA' },
    { id: 15, name: 'Amanda Davis', course: 'BA Sociology', mobileNumber: '7654321098', address: '345 Maple St, Thiscity, USA' },
    { id: 16, name: 'Brian Taylor', course: 'MSc Data Analytics', mobileNumber: '5432109876', address: '678 Cedar St, Othertown, USA' },
    { id: 17, name: 'Nicole Johnson', course: 'BSc Environmental Science', mobileNumber: '6543210987', address: '901 Elm St, Anytown, USA' },
    { id: 18, name: 'Matthew Hall', course: 'MA Philosophy', mobileNumber: '8765432109', address: '234 Oak St, Thistown, USA' },
    { id: 19, name: 'Olivia Brown', course: 'BCom Marketing', mobileNumber: '9876543210', address: '567 Pine St, Thatstown, USA' },
    { id: 20, name: 'Daniel Lee', course: 'PhD Electrical Engineering', mobileNumber: '9123456789', address: '890 Maple St, Thiscity, USA' }
];

const studentTableBody = document.getElementById('student-data');

studentData.forEach((student) => {
    const tableRow = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = student.id;
    tableRow.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = student.name;
    tableRow.appendChild(nameCell);

    const courseCell = document.createElement('td');
    courseCell.textContent = student.course;
    tableRow.appendChild(courseCell);

    const mobileNumberCell = document.createElement('td');
    mobileNumberCell.textContent = student.mobileNumber;
    tableRow.appendChild(mobileNumberCell);

    const addressCell = document.createElement('td');
    addressCell.textContent = student.address;
    tableRow.appendChild(addressCell);

    studentTableBody.appendChild(tableRow);
});