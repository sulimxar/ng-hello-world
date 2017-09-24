import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.css']
})
export class CourseAdminComponent implements OnInit {

  constructor() { }

  categories = [
    {id: 1, name: "Development"},
    {id: 2, name: "Art"},
    {id: 3, name: "Languages"}
  ];

  ngOnInit() {
  }

  onSubmit(f){
    console.log(f);
  }
}
