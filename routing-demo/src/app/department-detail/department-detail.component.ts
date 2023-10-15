import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-department-detail',
  template: `
        <h3>You selected department with id = {{departmentId}} </h3>    
  `,
  styles: []
})
export class DepartmentDetailComponent {

  public departmentId:any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id:any = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.departmentId = id;

  }
}
