
const taxRate = 0.10;

let employees = [
    {
        id: 101,
        name: "Ahmed",
        baseSalary: 10000,
        bonuses: 1500,
        department: "IT",
        active: true
    },

    {
        id: 102,
        name: "Sara",
        baseSalary: 7000,
        bonuses: 800,
        department: "HR",
        active: true
    },

    {
        id: 103,
        name: "Ali",
        baseSalary: 4000,
        bonuses: 500,
        department: "SA",
        active: false
    }
];

console.log(employees[0].name);

console.log(employees[0]["baseSalary"]);

employees[0].bonuses += 500;

employees[1].email = "sara@gmail.com";

employees.push({
    id: 104,
    name: "Mona",
    baseSalary: 9000,
    bonuses: 1000,
    department: "IT",
    active: true
});

employees.unshift({
    id: 100,
    name: "Omar",
    baseSalary: 6000,
    bonuses: 600,
    department: "HR",
    active: true
});

employees.pop();

employees.shift();

console.log("Number Of Employees =", employees.length);


function calculateNetSalary(baseSalary, bonus) {

    let grossSalary = baseSalary + bonus;

    let tax = grossSalary * taxRate;

    let netSalary = grossSalary - tax;

    return netSalary;
}

function getEmployeeStatus(salary) {

    if (salary >= 10000) {
        return "High Salary";
    }

    else if (salary >= 6000) {
        return "Medium Salary";
    }

    else {
        return "Low Salary";
    }
}

function getDepartmentName(deptCode) {

    switch (deptCode) {

        case "IT":
            return "Information Technology";

        case "HR":
            return "Human Resources";

        case "SA":
            return "Sales";

        default:
            return "Unknown Department";
    }

}

function addNewEmployee(id, name, salary) {

    employees.push({
        id: id,
        name: name,
        baseSalary: salary,
        bonuses: 500,
        department: "IT",
        active: true
    });

    alert("Employee Added Successfully.");
}

function processPayroll() {

    console.log("========== Payroll Report ==========");

    for (let i = 0; i < employees.length; i++) {

        if (!employees[i].active) {
            continue;
        }

        let netSalary = calculateNetSalary(
            employees[i].baseSalary,
            employees[i].bonuses
        );

        console.log("ID :", employees[i].id);
        console.log("Name :", employees[i].name);
        console.log("Department :", getDepartmentName(employees[i].department));
        console.log("Base Salary :", employees[i].baseSalary);
        console.log("Bonus :", employees[i].bonuses);
        console.log("Net Salary :", netSalary);
        console.log("Status :", getEmployeeStatus(netSalary));
        console.log("--------------------------------");
    }

}


for (let i = 0; i < employees.length; i++) {

    if (employees[i].id === 102) {

        console.log("Employee Found:", employees[i].name);

        break;
    }

}


let choice;

while (true) {

    choice = Number(prompt(
`===== Employee Payroll =====

1 - View Employees
2 - Add Employee
0 - Exit`
    ));

    if (choice === 1) {

        processPayroll();

    }

    else if (choice === 2) {

        let id = Number(prompt("Enter ID"));
        let name = prompt("Enter Name");
        let salary = Number(prompt("Enter Salary"));

        addNewEmployee(id, name, salary);

    }

    else if (choice === 0) {

        alert("Good Bye");
        break;

    }

    else {

        alert("Invalid Choice");

    }

}
