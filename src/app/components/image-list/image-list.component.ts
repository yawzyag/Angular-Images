import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
})
export class ImageListComponent implements OnInit {
  @Input() imageList: Image[] | undefined;

  constructor() {
  }

  ngOnInit(): void {}
}
