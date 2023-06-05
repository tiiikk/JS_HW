
// Implement merge sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
    }

    return mergedArray;
}

const arr = [8, 3, 1, 5, 2, 7, 4, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr);


// Create Employee object(constructor). It should have lastName (string), salary (number) birthday (Date), employmentDate (Date).
//     It should have the following methods -
// getExperience (which returns experience of employee (стаж) ) , getExperienceInDays, getAge, getDaysUntilRetirement
// (which returns how many days are until retirement - <<toshak>> , retirement age is 65 years),
// Implement toPrimitive method


function Employee(lastName, salary, birthday, employmentDate) {
    this.lastName = lastName;
    this.birthday = new Date(birthday);
    this.employmentDate = new Date(employmentDate);
    this.salary = salary;
    this.getExperience = function () {
        const currentDate = new Date();
        const yearsDiff = currentDate.getFullYear() - this.employmentDate.getFullYear();

        if (currentDate.getMonth() < this.employmentDate.getMonth() ||
            (currentDate.getMonth() === this.employmentDate.getMonth() &&
                currentDate.getDate() < this.employmentDate.getDate())) {
            return yearsDiff - 1;
        }

        return yearsDiff;
    };
    this.getExperienceInDays = function () {
        const currentDate = new Date();
        const startTimestamp = this.employmentDate.getTime();
        const currentTimestamp = currentDate.getTime();
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const daysDiff = Math.floor((currentTimestamp - startTimestamp) / millisecondsPerDay);
        return daysDiff;

        };

    this.getDaysUntilRetirement = function (){
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const current_date = new Date();
        const birthInDays = this.birthday.getTime() / millisecondsPerDay;
        const retirementDayInDays = birthInDays + (365 * 65)
        const currentDateInDays = current_date/millisecondsPerDay
        const daysUntilRetirement = retirementDayInDays - currentDateInDays
        return Math.trunc(daysUntilRetirement)
    }

}

let Employee1 = new Employee('Manukyan', 100000, '2002-02-22', '2022-02-02')


// Implement “Production” object which should have these properties:
//     name
//      salarySum(all employees’ salaries)
//      monthlyProfit)
//      monthlySpendings(spendings are only on employees’ salaries)
//      employees(array)
// And it should have these methods:
//     addEmployee(employee) - after adding employee monthlySpendings, salarySum must change and monthlyProfit must decrease depending
// on new employee salary amount
//      deleteEmployee(employee) - reverse of addEmployee
//      getAvgSalary() - returns average salary of all employees
//      toPrimitive()

function Production(name, monthlyProfit) {
    this.name = name;
    this.salarySum = 0;
    this.monthlyProfit = monthlyProfit;
    this.monthlySpendings = 0;
    this.employees = [];

    this.addEmployee = function(employee) {
        this.employees.push(employee);
        this.salarySum += employee.salary;
        this.monthlySpendings += employee.salary;
        this.monthlyProfit -= employee.salary;
    };

    this.deleteEmployee = function(employee) {
        const index = this.employees.indexOf(employee);
        if (index !== -1) {
            this.employees.splice(index, 1);
            this.salarySum -= employee.salary;
            this.monthlySpendings -= employee.salary;
            this.monthlyProfit += employee.salary;
        }
    };

    this.getAvgSalary = function() {
        if (this.employees.length === 0) {
            return 0;
        }
        return this.salarySum / this.employees.length;
    };

}
let production = new Production('My Production', 5000000);

function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

let employee1 = new Employee('Vaxo', 150000);
let employee2 = new Employee('Artash', 200000);

