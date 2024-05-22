import { Component } from '@angular/core';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrl: './build.component.css',
})
export class BuildComponent {
  products: any[] = [
    [//Foods
      {
        id: 1,
        name: 'Egg',
        imageUrl: 'assets/Build/Left images/Food/egg.png',
      },
      {
        id: 2,
        name: 'Bread',
        imageUrl: 'assets/Build/Left images/Food/bread.png',
      },
      {
        id: 3,
        name: 'Meat',
        imageUrl: 'assets/Build/Left images/Food/meat.png',
      },
      {
        id: 4,
        name: 'Cheese',
        imageUrl: 'assets/Build/Left images/Food/cheese.png',
      },
      {
        id: 5,
        name: 'Vegetables',
        imageUrl: 'assets/Build/Left images/Food/vegetable.png',
      },
      {
        id: 6,
        name: 'Sauces',
        imageUrl: 'assets/Build/Left images/Food/sauce.png',
      },
    ],
    [//Drinks
      {
        id: 1,
        name: 'Water',
        imageUrl: 'assets/Build/Left images/Drinks/water.png',
      },
      {
        id: 2,
        name: 'Soda',
        imageUrl: 'assets/Build/Left images/Drinks/soda.png',
      },
      {
        id: 3,
        name: 'juice',
        imageUrl: 'assets/Build/Left images/Drinks/juice.png',
      },
      {
        id: 4,
        name: 'Energy',
        imageUrl: 'assets/Build/Left images/Drinks/energy.png',
      },
      {
        id: 5,
        name: 'Other',
        imageUrl: 'assets/Build/Left images/Drinks/coffee.png',
      },
    ],
    [//Sweets
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
