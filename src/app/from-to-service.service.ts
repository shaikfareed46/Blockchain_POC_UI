import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Model } from './model';

@Injectable()
export class FromToServiceService {
  _postUrl='';
  constructor(private http:HttpClient) { }
  submit(model:Model):Observable<Model>
  {
    console.log(model);
    
    return this.http.post<Model>(this._postUrl,model,{headers:{'Content-Type':'application/json'}});
  }

}
