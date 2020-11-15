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
    params = params.set('per_page', "12");
    if (options && options.q) {
      params = params.set('q', options.q);
    }
    if (options && options.category) {
      params = params.set('category', options.category);
    }

    return this.http.get<ImageResponse>(this.imagesUrl, { params });
  }
}
