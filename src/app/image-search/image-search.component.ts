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
  total: number = 0;
  totalHits: number = 0;
  imageList: Image[] | undefined;
  loader: boolean = true;
  currentPage: number = 1;
  innerWidth: number = 0;

  constructor(private imageService: ImageService) {}

  queryImages(obj?: ImageRequestData) {
    this.loader = true;
    this.category = obj ? obj.category : '';
    this.q = obj ? obj.q : '';
    this.currentPage = obj && obj.currentPage ? obj.currentPage : 1;
    const objToSend = {
      q: this.q,
      category: this.category,
      page: this.currentPage,
      size: this.innerWidth,
    };
    this.imageService.getImages(objToSend).subscribe(
      (imageResp) => {
        this.imageList = imageResp.hits;
        this.total = imageResp.total;
        this.totalHits = imageResp.totalHits;
      },
      (err) => {
        console.log('ImageSearchComponent -> queryImages -> err', err);
        this.loader = false;
      },
      () => (this.loader = false)
    );
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.queryImages({
      q: this.q,
      category: this.category,
      page_size: this.innerWidth,
    });
  }
  changePage(i: number) {
    this.currentPage = i;

    this.queryImages({ category: this.category, q: this.q, currentPage: i });
  }
}
