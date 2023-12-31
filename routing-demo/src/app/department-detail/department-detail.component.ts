import { Component } from '@angular/core';
import { ActivatedRoute, Router , ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
        <h3>You selected department with id = {{departmentId}} </h3>
        <a (click)="goPrevious()">Previous</a>
        <a (click)="goNext()">Next</a> 

        <div>
          <button (click)=gotoDepartments()>Back</button>
        </div>
        
  `,
  styles: []
})
export class DepartmentDetailComponent {

  public departmentId:any;
  constructor(private route: ActivatedRoute, private router:Router) {}

  ngOnInit() {
    //let id:any = parseInt(this.route.snapshot.paramMap.get('id') as string);
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id:any = parseInt(params.get('id') as string);
      this.departmentId = id;
    })
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/department-list',previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department-list',nextId]);
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    console.log(this.departmentId);
    //this.router.navigate(['/departments', {id: selectedId, test: "testValue"}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo:this.route});
  }


}
