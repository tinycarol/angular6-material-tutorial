import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Photo } from '../models/photo.model';
import { debug } from 'util';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[];
  constructor(private api: PhotosService) { }

  ngOnInit() {
    this.api.getPhotos().subscribe(
      data => {
        this.photos = data.slice(0, 10);
      },
      error => {
        console.log("Error receiving photos: " + error);
        debug;
      }
    )
  }

}
