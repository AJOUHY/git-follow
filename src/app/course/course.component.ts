import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses;
  titre = "c'est un titre"
  isActive = true;

  course = {
    titre: "formation angular",
    avis: '4.9762',
    participants: 136,
    prix: 950.38,
    publication: new Date('2021-01-08')
  }

  email: string = "email@email.email";

  constructor(coursesService: CoursesService) {
      this.courses = coursesService.getCourses();
   }

  ngOnInit(): void {
  }

  onClick($event: any) {
    $event.stopPropagation();
    console.log('button click', $event);
  }

  divClick() {
    console.log('div clicked');
  }

  onKeyUp() {
      console.log(this.email);
  }

}
