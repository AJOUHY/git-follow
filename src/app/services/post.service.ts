import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{


  constructor(http: HttpClient) {
    super("https://my-json-server.typicode.com/typicode/demo/posts",http);
   }

  
  
}
