import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
            <h2>Employee Details</h2>
            <h3>{{errorMessage}}</h3>
            <ul *ngFor = "let employee of employees">
              <li>{{employee.id}}.{{employee.name}} - {{employee.age}}</li>
            </ul>
            `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
 public employees:any = [];
 public errorMessage:any;

 constructor(private _employeeService: EmployeeService){ 
 }

 ngOnInit() {
  this._employeeService.getEmployees()
    .subscribe(data=> this.employees = data,
               error=> this.errorMessage = error);
 }
}
