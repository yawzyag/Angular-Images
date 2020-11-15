import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() queryImages: EventEmitter<any> = new EventEmitter();
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}
  getParamsResult(q: string = 'macbook', category: string = '') {
    /* this.imageService.getImages({}).subscribe((imageResp) => {
      console.log(imageResp);
    }); */
    console.log(q, category);

    this.queryImages.emit({ q, category });
  }
}
