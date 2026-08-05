const taxRate = 0.1;

let employees = [
  { id: 101, name: "Haidy", baseSalary: 5000, bonus: 500, department: "IT", active: true },
  { id: 102, name: "Hoda", baseSalary: 7000, bonus: 800, department: "HR", active: true },
  { id: 103, name: "Mariam", baseSalary: 4000, bonus: 300, department: "FIN", active: true }
];


console.log("Name of first employee:", employees[0].name);

employees[0].baseSalary = 6000;
employees[0].department = "cs";
employees[0].experienceYears = 3;

employees.push({ id: 104, name: "Mona", baseSalary: 6000, bonus: 400 });
employees.unshift({ id: 100, name: "Ali", baseSalary: 8000, bonus: 1000 });

console.log("Number of employees:", employees.length);

let removed = employees.pop();
console.log("Removed employee:", removed.name);

//                          TO calc netsalary
            
function calculateNetSalary(baseSalary, bouns) {
  let totalIncome = baseSalary + bouns;
  let taxAmount = totalIncome * taxRate;   
  let netSalary = totalIncome - taxAmount;  
  return netSalary;
}

// Function 2: تحديد فئة الراتب
function getSalaryGrade(salary) {
  if (salary >= 7000) {
    return "High Level";                    
  } else if (salary >= 5000) {
    return "Medium Level";
  } else {
    return "Entry Level";
  }
}

// Function 3: إرجاع اسم القسم
function getDepartmentName(deptCode) {
  switch (deptCode) {
    case "IT":
      return "Information Technology";     
    case "HR":
      return "Human Resources";
    case "FIN":
      return "Finance";
    case "cs":
      return "Computer Science";
    default:
      return "General Department";
  }
}

// Function 4: إضافة موظف جديد
function addNewEmployee(id, name, baseSalary, bouns, dept) {
  let personId = Number(id);
  let personSalary = parseFloat(baseSalary);
  let personBonus = parseFloat(bouns);

  let newEmployer = {
    id: personId,
    name: name,
    baseSalary: personSalary,
    bonus: personBonus,
    department: dept,
    active: true
  };

  employees.push(newEmployer); // حفظ الموظف الجديد في المصفوفة
  console.log(`New employer has been added successfully: ${name}`);
}

// Function 5: طباعة تقرير الرواتب
function printPayrollReport() {
  console.log("\n==================== PAYROLL REPORT ====================");

  for (let i = 0; i < employees.length; i++) {
    let emp = employees[i];

    if (!emp.active) {
      console.log(`Employer not active (${emp.name})`);
      continue;
    }

    let net = calculateNetSalary(emp.baseSalary, emp.bonus || 0);
    let grade = getSalaryGrade(net);
    let deptName = getDepartmentName(emp.department);

    console.log(
      `ID: ${emp.id} | Name: ${emp.name} | Dept: ${deptName} | Net: ${net} EGP | Grade: ${grade}`
    );
  }
  console.log("=======================================================\n");
}

function startSystem() {
  alert("Employee Payroll System");

  let isRunning = true;

  while (isRunning) {
    let choice = prompt(
      "choose operation:\n" +
      "1. show net\n" +
      "2. add new employer\n" +
      "3. show number of employees\n" +
      "0. exit"
    );

    if (choice === "1") {
      printPayrollReport();
      alert("Printed successfully in Console.");
    } 
    else if (choice === "2") {
      let id = prompt("Enter Employee ID:");
      let name = prompt("Enter Employee Name:");
      let salary = prompt("Enter Base Salary:");
      let bonus = prompt("Enter Bonus Amount:");
      let dept = prompt("Enter Department Code (IT / HR / FIN / cs):");

      if (id && name && salary) {
        addNewEmployee(id, name, salary, bonus, dept);
        alert(`Employee ${name} added successfully!`);
      } else {
        alert("Incomplete input. Addition cancelled.");
      }
    } 
    else if (choice === "3") {
      alert(`Total current employees count: ${employees.length}`);
    } 
    else if (choice === "0" || choice === null) {
      let confirmExit = confirm("Are you sure you want to exit?");
      if (confirmExit) {
        alert("Thank you for using the system. Goodbye!");
        break; 
      }
    } 
    else {
      alert("Invalid choice! Please select a valid number from the menu.");
    }
  }
}


startSystem();