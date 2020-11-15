import { Component, OnInit } from '@angular/core';
import { Image } from '../models/Image';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css'],
})
export class ImageSearchComponent implements OnInit {
  q = 'macbook';
  category = '';
  name: string = 'yesid';
  imageList: Image[] | undefined;
  loader: boolean = false;

  constructor(private imageService: ImageService) {}
  changeName(name: string) {
    this.name = name;
  }
  queryImages(obj: { q: string; category: string }) {
    this.loader = true;
    this.category = obj.category;
    this.q = obj.q;
    const objToSend = { q: this.q, category: this.category };
    this.imageService.getImages(objToSend).subscribe(
      (imageResp) => {
        this.imageList = imageResp.hits;
      },
      (err) => console.log('ImageSearchComponent -> queryImages -> err', err)
    );
    this.loader = false;
  }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(
      (imageResp) => {
        this.imageList = imageResp.hits;
      },
      (err) => console.log('ImageSearchComponent -> queryImages -> err', err)
    );
  }
}
