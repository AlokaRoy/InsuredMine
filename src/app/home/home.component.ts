import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeCollectionService } from '../services/home-collection.service';
import { HomeCollection } from '../models/homeCollection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeCollection: HomeCollection[] = [];
  imgIndex: number = 0;
  image: any = {};

  constructor(private homeCollectionService: HomeCollectionService) {
  }

  ngOnInit(): void {
    this.homeCollectionService.getHomeCollection().subscribe(data => {
      this.homeCollection = data;
    });
    this.showSlides();
  }

  showSlides() {
    this.image = this.homeCollection[this.imgIndex];
    this.imgIndex++;
    if (this.imgIndex >= this.homeCollection.length)
      this.imgIndex = 0;
    setTimeout(() => {
      this.showSlides();
    }, 3000);
  }

}
