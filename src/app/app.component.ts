import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

viewCourse = "Laravel01";
good: boolean = true; 

Courses: any;

person = {
  prenom: 'Abdessamad',
  tel: '050505050',
  adresse: {
    ville: 'casa',
    code: 15151515
  }
}

  addCourse() {
    this.Courses.push({id: 6, title: "ReactJs"})
   }

   deleteCourse(course: any) {
    let index = this.Courses.indexOf(course);
    this.Courses.splice(index, 1);
   }

   editCourse (course: any) {
    course.title = "UPDATED";
   }

   loadCourses() {
     this.Courses = [
      {id: 1, title: "Angular"},
      {id: 2, title: "Laravel"},
      {id: 3, title: "Symfony"},
      {id: 4, title: "Spring"},
      {id: 5, title: "VueJS"},
     ]
   }

   trackCourse(index: any, course: any) {
      return course ? course.id : undefined;
   }

   checkStatus() {
     this.good = !this.good;
   }


}
