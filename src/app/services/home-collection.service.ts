import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeCollectionService {

  constructor(private http: HttpClient) { }

  getHomeCollection(): Observable<any> {
    return this.http.get("assets/homeCollection.json");
  }
}

