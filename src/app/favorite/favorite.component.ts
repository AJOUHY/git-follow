import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  
})
export class FavoriteComponent implements OnInit {

  @Input('is-suc')selected: boolean = true;
  @Output('change') changement = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  checkStatus(){
    this.selected = !this.selected;
    this.changement.emit({newState: this.selected});
  }

}
