import { Component, OnInit } from '@angular/core';
import { Image } from '../models/Image';
import { ImageRequestData } from '../models/ImageResponse';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css'],
})
export class ImageSearchComponent implements OnInit {
  q = '';
  category = '';
  name: string = 'yesid';
  imageList: Image[] | undefined;
  loader: boolean = true;

  constructor(private imageService: ImageService) {}
  changeName(name: string) {
    this.name = name;
  }
  queryImages(obj?: ImageRequestData) {
    this.loader = true;
    this.category = obj ? obj.category : "";
    this.q = obj ? obj.q : "";
    const objToSend = { q: this.q, category: this.category };
    this.imageService.getImages(objToSend).subscribe(
      (imageResp) => {
        this.imageList = imageResp.hits;
        console.log(imageResp.total, imageResp.totalHits);
      },
      (err) => {
        console.log('ImageSearchComponent -> queryImages -> err', err);
        this.loader = false;
      },
      () => (this.loader = false)
    );
  }

  ngOnInit(): void {
    this.queryImages();
  }
}
