import { Component } from '@angular/core';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrl: './build.component.css',
})
export class BuildComponent {
  products: any[] = [
    [ //Foods
      {
        id: 1,
        name: 'Egg',
        imageUrl: '/assets/imgs/foodproducts/icons8-breakfast-60.png',
      },
      {
        id: 2,
        name: 'Bread',
        imageUrl: '/assets/imgs/foodproducts/sandwich.png',
      },
      {
        id: 3,
        name: 'Meat',
        imageUrl: '/assets/imgs/foodproducts/sandwich.png',
      },
      {
        id: 4,
        name: 'Vegetables',
        imageUrl: '/assets/imgs/foodproducts/sandwich.png',
      },
      {
        id: 5,
        name: 'Sauces',
        imageUrl: '/assets/imgs/foodproducts/sandwich.png',
      },

    ],
    [
      {
        id: 1,
        name: 'Water',
        imageUrl: '/assets/imgs/desserts/cake.png',
      },
      {
        id: 2,
        name: 'Soda',
        imageUrl: '/assets/imgs/desserts/cookie.png',
      },
      {
        id: 3,
        name: 'juice',
        imageUrl: '/assets/imgs/desserts/cookie.png',
      },
      {
        id: 4,
        name: 'Energy',
        imageUrl: '/assets/imgs/desserts/cookie.png',
      },
      {
        id: 5,
        name: 'Other',
        imageUrl: '/assets/imgs/desserts/cookie.png',
      },
    ],
    [
      {
        id: 1,
        name: 'Cake',
        imageUrl: '/assets/imgs/desserts/cake.png',
      },
      {
        id: 2,
        name: 'Cookie',
        imageUrl: '/assets/imgs/desserts/cookie.png',
      },
      {
        id: 3,
        name: 'Donut',
        imageUrl: '/assets/imgs/desserts/donut.png',
      },
      {
        id: 4,
        name: 'Muffin',
        imageUrl: '/assets/imgs/desserts/muffin.png',
      },
    ],
  ];
}
