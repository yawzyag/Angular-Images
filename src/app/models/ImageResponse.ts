import { Image } from './Image';

export class ImageResponse {
  'total': number;
  'totalHits': number;
  'hits': Image[];
}

export class ImageRequestData {
  'q': string;
  'category': string;
  'currentPage'?: number;
  'page_size'?: number;
}
