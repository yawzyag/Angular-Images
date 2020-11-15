import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() queryImages: EventEmitter<any> = new EventEmitter();
  q: string = '';
  category: string = '';
  options: string[];
  constructor(private imageService: ImageService) {
    this.options = [
      'science',
      'education',
      'people',
      'feelings',
      'computer',
      'buildings',
    ];
  }

  ngOnInit(): void {}
  onSubmit() {
    this.getParamsResult(this.q, this.category);
  }
  getParamsResult(q: string = '', category: string = '') {
    this.queryImages.emit({ q, category });
  }
}
