import { Component, OnInit } from '@angular/core';
import { GalleryCollectionService } from '../services/gallery-collection.service';
import { GalleryCollection } from '../models/galleryCollection';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryCollection: GalleryCollection[];
  rows: number;

  constructor(private galleryCollectionService: GalleryCollectionService) { 
    this.galleryCollectionService.getGalleryCollection().subscribe(data => {
      this.galleryCollection = data;
      console.log(JSON.stringify(data))
    });
  }

  ngOnInit(): void {
    if(this.galleryCollection !== null && this.galleryCollection !== undefined) {
    this.rows = this.galleryCollection.length/4;
    if(this.galleryCollection.length%4 !==0) {
      this.rows = this.rows + 1;
    }
  }

}
}
