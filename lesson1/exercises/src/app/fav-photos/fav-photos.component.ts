import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.orlandomagazine.com/content/uploads/2021/09/l/s/wdw-50-character-fashions-1-scaled-1.jpg';
  image2 = 'https://livingbydisney.com/wp-content/uploads/2021/09/WDW-50th-Anniversary.jpg';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}