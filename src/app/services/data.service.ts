import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  create(resource: any) {
    return this.http.post(this.url, resource);
  }

  update(resource: any) {
    return this.http.put(this.url+'/'+resource.id, resource);
  }

  delete(resource: any) {
    return this.http.delete(this.url+'/'+resource.id);        
  }
  
}
