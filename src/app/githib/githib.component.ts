import { Component, OnInit } from '@angular/core';
import { GithibService } from '../services/github.service';

@Component({
  selector: 'app-githib',
  templateUrl: './githib.component.html',
  styleUrls: ['./githib.component.css']
})
export class GithibComponent implements OnInit {

  followers: any = [];

  constructor(private githubService: GithibService) { }

  ngOnInit(): void {
    this.getFollowers();
  }

  getFollowers(){
    this.githubService.getAll()
      .subscribe(response => {
        this.followers = response
      })
  }

}
