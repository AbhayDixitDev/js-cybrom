let data = [
    {
        "id": 1,
        "email": "gagan@gmail.com",
        "password": "12345",
    },
    {
        "id": 2,
        "email": "abhishek@gmail.com",
        "password": "12345",
    },
    {
        "id": 3,
        "email": "arpan@gmail.com",
        "password": "12345",
    },
    {
        "id": 4,
        "email": "rohit@gmail.com",
        "password": "12345",
    }
];

let arrofobj = JSON.parse(window.localStorage.getItem('Information')) || [];

function run() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    console.log(username);
    console.log(password);

    let obj = {
        "username": username,
        "password": password
    }

    arrofobj.push(obj);
    window.localStorage.setItem('Information', JSON.stringify(arrofobj));
    console.log(arrofobj);
    return false;
}

function login() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    console.log(username, password);
    let response = data.find(e => e.email === username && e.password === password);
    if (response) {
        window.alert("Successful Login");
        location.href = "apple.html";
    } else {
        let storedData = JSON.parse(window.localStorage.getItem('Information'));
        if (storedData) {
            let response = storedData.find(e => e.username === username && e.password === password);
            if (response) {
                window.alert("Successful Login");
                location.href = "apple.html";
            } else {
                window.alert("please register");
                location.href = "form add.html";
            }
        } else {
            window.alert("please register");
            location.href = "form add.html";
        }
    }
}