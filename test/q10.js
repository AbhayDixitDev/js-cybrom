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
    { id: 20, name: 'Daniel Lee', course: 'PhD Electrical Engineering', mobileNumber: '9123456789', address: '890 Maple St, Thiscity, USA' },
    { id: 21, name: 'Sophia Patel', course: 'BSc Computer Science', mobileNumber: '7654321098', address: '345 Elm St, Anytown, USA' },
    { id: 22, name: 'Jackson Smith', course: 'MA Economics', mobileNumber: '5432109876', address: '678 Oak St, Thistown, USA' },
    { id: 23, name: 'Mia Kim', course: 'BCom Finance', mobileNumber: '6543210987', address: '901 Pine St, Thatstown, USA' },
    { id: 24, name: 'Alexander Brown', course: 'PhD Physics', mobileNumber: '8765432109', address: '234 Maple St, Thiscity, USA' },
    { id: 25, name: 'Isabella Davis', course: 'BSc Biology', mobileNumber: '9876543210', address: '567 Cedar St, Othertown, USA' },
    { id: 26, name: 'Ethan Lee', course: 'MSc Data Science', mobileNumber: '9123456789', address: '890 Elm St, Anytown, USA' },
    { id: 27, name: 'Lily Taylor', course: 'BA English', mobileNumber: '7654321098', address: '345 Oak St, Thistown, USA' },
    { id: 28, name: 'Logan Hall', course: 'PhD Computer Engineering', mobileNumber: '5432109876', address: '678 Pine St, Thatstown, USA' },
    { id: 29, name: 'Ava Martin', course: 'BCom Accounting', mobileNumber: '6543210987', address: '901 Maple St, Thiscity, USA' },
    { id: 30, name: 'Julian Brown', course: 'MA Psychology', mobileNumber: '8765432109', address: '234 Cedar St, Othertown, USA' },
    { id: 31, name: 'Gabriella Lee', course: 'BSc Chemistry', mobileNumber: '9876543210', address: '567 Elm St, Anytown, USA' },
    { id: 32, name: 'Caleb Kim', course: 'MBA Business Administration', mobileNumber: '9123456789', address: '890 Oak St, Thistown, USA' },
    { id: 33, name: 'Hannah Patel', course: 'BA History', mobileNumber: '7654321098', address: '345 Pine St, Thatstown, USA' },
    { id: 34, name: 'Oliver White', course: 'PhD Physics', mobileNumber: '5432109876', address: '678 Maple St, Thiscity, USA' },
    { id: 35, name: 'Emily Hall', course: 'BSc Environmental Science', mobileNumber: '6543210987', address: '901 Cedar St, Othertown, USA' },
    { id: 36, name: 'Benjamin Brown', course: 'MA Economics', mobileNumber: '8765432109', address: '234 Elm St, Anytown, USA' },
    { id: 37, name: 'Sofia Martin', course: 'BCom Finance', mobileNumber: '9876543210', address: '567 Oak St, Thistown, USA' },
    { id: 38, name: 'Alexander Lee', course: 'PhD Computer Science', mobileNumber: '9123456789', address: '890 Pine St, Thatstown, USA' },
    { id: 39, name: 'Isabella Davis', course: 'BA Sociology', mobileNumber: '7654321098', address: '345 Maple St, Thiscity, USA' },
    { id: 40, name: 'Ethan Kim', course: 'MSc Data Analytics', mobileNumber: '5432109876', address: '678 Cedar St, Othertown, USA' }
];

const studentTableBody = document.getElementById('student-data');

studentData.forEach((student) => {
    if (student.id % 2 === 0) { // show only even IDs
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
    }
});