import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryCollectionService {

  constructor(private http: HttpClient) { }

  getGalleryCollection(): Observable<any> {
    return this.http.get("assets/galleryCollection.json");
  }
}
