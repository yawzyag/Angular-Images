import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
})
export class ImageListComponent implements OnInit {
  imageList: Image[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.imageList = [
      {
        id: 5727503,
        pageURL:
          'https://pixabay.com/photos/fantasy-sea-moon-reflection-clouds-5727503/',
        type: 'photo',
        tags: 'fantasy, sea, moon',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/09/18/30/fantasy-5727503_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d7444f52af14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d7444f52af14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 7087,
        imageHeight: 4724,
        imageSize: 3137981,
        views: 15649,
        downloads: 15125,
        favorites: 32,
        likes: 67,
        comments: 59,
        user_id: 3764790,
        user: 'enriquelopezgarre',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/10/26/19-25-49-981_250x250.jpg',
      },
      {
        id: 5713337,
        pageURL:
          'https://pixabay.com/photos/windmill-rural-old-windmill-5713337/',
        type: 'photo',
        tags: 'windmill, rural, old windmill',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/04/19/22/windmill-5713337_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d4404951ab14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d4404951ab14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 4359,
        imageHeight: 2906,
        imageSize: 5380588,
        views: 57327,
        downloads: 42364,
        favorites: 77,
        likes: 120,
        comments: 37,
        user_id: 8237000,
        user: 'max_gloin',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/10/11/12-28-32-578_250x250.jpg',
      },
      {
        id: 5728951,
        pageURL:
          'https://pixabay.com/photos/swan-bird-sea-waterfowl-water-bird-5728951/',
        type: 'photo',
        tags: 'swan, bird, sea',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/10/08/50/swan-5728951_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d74b4357ad14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d74b4357ad14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 5863,
        imageHeight: 3914,
        imageSize: 4194536,
        views: 9158,
        downloads: 8911,
        favorites: 18,
        likes: 61,
        comments: 57,
        user_id: 1130890,
        user: 'Peggychoucair',
        userImageURL:
          'https://cdn.pixabay.com/user/2018/12/28/22-17-08-435_250x250.jpg',
      },
      {
        id: 5727504,
        pageURL:
          'https://pixabay.com/photos/lighthouse-field-night-evening-5727504/',
        type: 'photo',
        tags: 'lighthouse, field, night',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/09/18/30/lighthouse-5727504_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d7444f52a814f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d7444f52a814f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 7087,
        imageHeight: 4724,
        imageSize: 8923478,
        views: 13476,
        downloads: 13035,
        favorites: 24,
        likes: 67,
        comments: 63,
        user_id: 3764790,
        user: 'enriquelopezgarre',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/10/26/19-25-49-981_250x250.jpg',
      },
      {
        id: 5717276,
        pageURL:
          'https://pixabay.com/photos/cow-cattle-livestock-dairy-cow-5717276/',
        type: 'photo',
        tags: 'cow, cattle, livestock',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/06/09/24/cow-5717276_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d4444855aa14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d4444855aa14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 6240,
        imageHeight: 4160,
        imageSize: 5592872,
        views: 29804,
        downloads: 29173,
        favorites: 18,
        likes: 78,
        comments: 82,
        user_id: 10327513,
        user: 'NickyPe',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/10/28/08-56-43-566_250x250.jpg',
      },
      {
        id: 5717988,
        pageURL:
          'https://pixabay.com/illustrations/merry-christmas-woman-mail-tree-5717988/',
        type: 'illustration',
        tags: 'merry christmas, woman, mail',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/06/15/05/merry-christmas-5717988_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d444435aa414f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d444435aa414f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 7087,
        imageHeight: 4724,
        imageSize: 2314054,
        views: 10153,
        downloads: 9478,
        favorites: 24,
        likes: 66,
        comments: 63,
        user_id: 3764790,
        user: 'enriquelopezgarre',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/10/26/19-25-49-981_250x250.jpg',
      },
      {
        id: 5712690,
        pageURL:
          'https://pixabay.com/photos/lynx-moon-yawning-surreal-animal-5712690/',
        type: 'photo',
        tags: 'lynx, moon, yawning',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/04/15/09/lynx-5712690_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d4414c5bac14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
          'https://pixabay.com/get/53e7d4414c5bac14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 4329,
        imageHeight: 2882,
        imageSize: 4257372,
        views: 29011,
        downloads: 27852,
        favorites: 54,
        likes: 89,
        comments: 57,
        user_id: 13452116,
        user: 'Syaibatulhamdi',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/08/19/09-44-13-930_250x250.png',
      },
      {
        id: 5720741,
        pageURL:
          'https://pixabay.com/photos/chrysanthemum-flower-plant-bloom-5720741/',
        type: 'photo',
        tags: 'chrysanthemum, flower, plant',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/07/11/57/chrysanthemum-5720741_150.jpg',
        previewWidth: 110,
        previewHeight: 150,
        webformatURL:
          'https://pixabay.com/get/53e7d7434d56ad14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 468,
        webformatHeight: 640,
        largeImageURL:
          'https://pixabay.com/get/53e7d7434d56ad14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 2430,
        imageHeight: 3322,
        imageSize: 1010275,
        views: 24829,
        downloads: 24486,
        favorites: 12,
        likes: 56,
        comments: 91,
        user_id: 12752456,
        user: 'Mammiya',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/11/05/12-30-15-753_250x250.jpeg',
      },
      {
        id: 5719159,
        pageURL:
          'https://pixabay.com/photos/fox-animal-snow-red-fox-mammal-5719159/',
        type: 'photo',
        tags: 'fox, animal, snow',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/06/23/59/fox-5719159_150.jpg',
        previewWidth: 150,
        previewHeight: 102,
        webformatURL:
          'https://pixabay.com/get/53e7d44a4b57a514f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 436,
        largeImageURL:
          'https://pixabay.com/get/53e7d44a4b57a514f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 3266,
        imageHeight: 2223,
        imageSize: 1541084,
        views: 28806,
        downloads: 28021,
        favorites: 32,
        likes: 52,
        comments: 38,
        user_id: 631535,
        user: 'AlainAudet',
        userImageURL:
          'https://cdn.pixabay.com/user/2015/01/25/18-48-01-558_250x250.jpg',
      },
      {
        id: 5711536,
        pageURL:
          'https://pixabay.com/photos/deer-animal-wildlife-red-deer-5711536/',
        type: 'photo',
        tags: 'deer, animal, wildlife',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/04/06/08/deer-5711536_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d4424f51aa14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d4424f51aa14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 6240,
        imageHeight: 4160,
        imageSize: 5195549,
        views: 26064,
        downloads: 25602,
        favorites: 22,
        likes: 74,
        comments: 80,
        user_id: 10327513,
        user: 'NickyPe',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/10/28/08-56-43-566_250x250.jpg',
      },
      {
        id: 5727348,
        pageURL: 'https://pixabay.com/photos/road-forest-birch-autumn-5727348/',
        type: 'photo',
        tags: 'road, forest, birch',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/09/17/35/road-5727348_150.jpg',
        previewWidth: 150,
        previewHeight: 96,
        webformatURL:
          'https://pixabay.com/get/53e7d7444956a414f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 411,
        largeImageURL:
          'https://pixabay.com/get/53e7d7444956a414f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 5754,
        imageHeight: 3691,
        imageSize: 8571542,
        views: 5196,
        downloads: 4960,
        favorites: 14,
        likes: 57,
        comments: 52,
        user_id: 1130890,
        user: 'Peggychoucair',
        userImageURL:
          'https://cdn.pixabay.com/user/2018/12/28/22-17-08-435_250x250.jpg',
      },
      {
        id: 5724397,
        pageURL:
          'https://pixabay.com/photos/forest-path-trees-leaves-fog-5724397/',
        type: 'photo',
        tags: 'forest, path, trees',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/08/16/57/forest-5724397_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d747495bab14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d747495bab14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 6240,
        imageHeight: 4160,
        imageSize: 14617116,
        views: 6758,
        downloads: 4160,
        favorites: 25,
        likes: 63,
        comments: 33,
        user_id: 3728206,
        user: 'minka2507',
        userImageURL:
          'https://cdn.pixabay.com/user/2017/10/11/15-42-27-585_250x250.jpg',
      },
      {
        id: 5718089,
        pageURL:
          'https://pixabay.com/photos/woman-mysterious-traveler-journey-5718089/',
        type: 'photo',
        tags: 'woman, mysterious, traveler',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/06/15/33/woman-5718089_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d44b4a5aa514f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
          'https://pixabay.com/get/53e7d44b4a5aa514f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 6016,
        imageHeight: 4000,
        imageSize: 5597178,
        views: 11298,
        downloads: 9858,
        favorites: 45,
        likes: 76,
        comments: 51,
        user_id: 6314823,
        user: 'Victoria_Borodinova',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/11/03/19-20-14-245_250x250.jpeg',
      },
      {
        id: 5717273,
        pageURL:
          'https://pixabay.com/photos/cow-cattle-livestock-dairy-cow-5717273/',
        type: 'photo',
        tags: 'cow, cattle, livestock',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/06/09/22/cow-5717273_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d4444855af14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d4444855af14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 6240,
        imageHeight: 4160,
        imageSize: 6291472,
        views: 17541,
        downloads: 17253,
        favorites: 8,
        likes: 60,
        comments: 63,
        user_id: 10327513,
        user: 'NickyPe',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/10/28/08-56-43-566_250x250.jpg',
      },
      {
        id: 5732966,
        pageURL:
          'https://pixabay.com/photos/merry-christmas-greeting-star-card-5732966/',
        type: 'photo',
        tags: 'merry christmas, greeting, star',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/11/16/12/merry-christmas-5732966_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d6414354aa14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d6414354aa14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 7087,
        imageHeight: 4724,
        imageSize: 3150257,
        views: 9747,
        downloads: 9558,
        favorites: 10,
        likes: 35,
        comments: 32,
        user_id: 3764790,
        user: 'enriquelopezgarre',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/10/26/19-25-49-981_250x250.jpg',
      },
      {
        id: 5711827,
        pageURL:
          'https://pixabay.com/photos/woman-body-model-nude-adult-5711827/',
        type: 'photo',
        tags: 'woman, body, model',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/04/09/19/woman-5711827_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d4424250ab14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d4424250ab14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 5760,
        imageHeight: 3840,
        imageSize: 3214422,
        views: 8751,
        downloads: 4778,
        favorites: 49,
        likes: 85,
        comments: 11,
        user_id: 15196666,
        user: 'innamikitas',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/06/16/04-26-50-279_250x250.jpg',
      },
      {
        id: 5729744,
        pageURL:
          'https://pixabay.com/photos/cookies-pastry-christmas-food-5729744/',
        type: 'photo',
        tags: 'cookies, pastry, christmas',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/10/13/15/cookies-5729744_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d74a4d56a814f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d74a4d56a814f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 6000,
        imageHeight: 4000,
        imageSize: 4123349,
        views: 1847,
        downloads: 1723,
        favorites: 9,
        likes: 37,
        comments: 36,
        user_id: 19628,
        user: 'RitaE',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/09/07/16-49-31-85_250x250.jpg',
      },
      {
        id: 5733350,
        pageURL:
          'https://pixabay.com/vectors/mandala-flowers-ornamental-floral-5733350/',
        type: 'vector/svg',
        tags: 'mandala, flowers, ornamental',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/11/18/59/mandala-5733350_150.png',
        previewWidth: 150,
        previewHeight: 149,
        webformatURL:
          'https://pixabay.com/get/53e7d6404957ac14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.png',
        webformatWidth: 640,
        webformatHeight: 635,
        largeImageURL:
          'https://pixabay.com/get/53e7d6404957ac14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.png',
        imageWidth: 1936,
        imageHeight: 1920,
        imageSize: 796990,
        views: 251,
        downloads: 177,
        favorites: 7,
        likes: 26,
        comments: 32,
        user_id: 1086657,
        user: 'GDJ',
        userImageURL:
          'https://cdn.pixabay.com/user/2015/12/02/23-35-18-266_250x250.png',
      },
      {
        id: 5711535,
        pageURL: 'https://pixabay.com/photos/roe-deer-animal-wildlife-5711535/',
        type: 'photo',
        tags: 'roe deer, animal, wildlife',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/04/06/07/roe-deer-5711535_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d4424f51a914f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d4424f51a914f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 6240,
        imageHeight: 4160,
        imageSize: 6685390,
        views: 12938,
        downloads: 12648,
        favorites: 19,
        likes: 73,
        comments: 75,
        user_id: 10327513,
        user: 'NickyPe',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/10/28/08-56-43-566_250x250.jpg',
      },
      {
        id: 5711532,
        pageURL:
          'https://pixabay.com/photos/deer-animals-wildlife-roe-deer-5711532/',
        type: 'photo',
        tags: 'deer, animals, wildlife',
        previewURL:
          'https://cdn.pixabay.com/photo/2020/11/04/06/05/deer-5711532_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
          'https://pixabay.com/get/53e7d4424f51ae14f1dc84609629347f1436dde2544c704f752a78dd974ec35a_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
          'https://pixabay.com/get/53e7d4424f51ae14f6da8c7dda79367d143ed7e654566c48732f7ed79e4dc65eba_1280.jpg',
        imageWidth: 6240,
        imageHeight: 4160,
        imageSize: 5408904,
        views: 15264,
        downloads: 15005,
        favorites: 18,
        likes: 62,
        comments: 70,
        user_id: 10327513,
        user: 'NickyPe',
        userImageURL:
          'https://cdn.pixabay.com/user/2020/10/28/08-56-43-566_250x250.jpg',
      },
    ];
  }
}
