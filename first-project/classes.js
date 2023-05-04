"use strict";
class Department {
    constructor(id, name) {
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(newEmployees) {
        this.employees.push(newEmployees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admin) {
        super(id, 'IT');
        this.admin = admin;
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(newEmployees) {
        if (newEmployees === 'elvis') {
            return;
        }
        this.employees.push(newEmployees);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
}
const accounting = new AccountingDepartment('d1', []);
accounting.mostRecentReport = 'Year End Report';
accounting.addEmployee('johnson');
accounting.addEmployee('elvis');
accounting.printEmployeeInformation();
console.log(accounting.mostRecentReport);
