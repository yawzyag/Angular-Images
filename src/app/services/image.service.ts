import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ImageResponse } from '../models/ImageResponse';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  imagesUrl: string = '';

  constructor(private http: HttpClient) {
    this.imagesUrl = environment.API_URL;
  }

  // get todos
  getImages(options?: any): Observable<ImageResponse> {
    let params = new HttpParams().set('key', environment.API_KEY);

    if (options && options.q) {
      params = params.set('q', options.q);
    }
    if (options && options.category) {
      params = params.set('category', options.category);
    }
    if (options && options.page) {
      params = params.set('page', options.page);
    }
    if (options && options.size >= 1200) {
      params = params.set('per_page', '18');
    } else {
      params = params.set('per_page', '12');
    }

    return this.http.get<ImageResponse>(this.imagesUrl, { params });
  }
}
