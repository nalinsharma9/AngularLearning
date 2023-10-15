import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  template: `
            <h2>Employee List</h2>
            <h3>{{errorMessage}}</h3>
            <ul *ngFor = "let employee of employees">
              <li>{{employee.name}}</li>
            </ul>
              `,
  styles: [`
            .text-success{
              color: green;
            }
            .text-danger{
              color: red;
             }
  `]
})
export class TestComponent {
  public employees:any = [];
  public errorMessage:any;
 
 constructor(private _employeeService: EmployeeService) {
  
 }
 
 ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data=> this.employees = data,
              error=> this.errorMessage = error);
 }
  
}
