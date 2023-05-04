class Department {
  name: string;
  id: string;
  protected employees: string[] = [];

  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(newEmployees: string) {
    this.employees.push(newEmployees);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admin: string[];
  constructor(id: string, admin: string[]) {
    super(id, 'IT');
    this.admin = admin;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }

    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(newEmployees: string) {
    if (newEmployees === 'elvis') {
      return;
    }

    this.employees.push(newEmployees);
  }

  addReport(text: string) {
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
