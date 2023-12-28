import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SlideModel } from '../../projects/ffp-carousel/src/lib/models';
import { FfpCarouselComponent } from '../../projects/ffp-carousel/src/lib/ffp-carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, FfpCarouselComponent]
})
export class AppComponent {

  slides: SlideModel[] = [
    {
      title: 'Cheeseburger',
      subtitle: 'Burger',
      description: 'A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt. Cheeseburgers can include variations in structure, ingredients and composition. As with other hamburgers, a cheeseburger may include toppings such as lettuce, tomato, onion, pickles, bacon, mayonnaise, ketchup, and mustard.',
      imageUrl: 'https://www.mcdonalds.com.sg/sites/default/files/2023-02/1200x1200_MOP_BBPilot_Cheeseburger_1.png'
    },
    {
      title: 'Bacon Cheeseburger',
      subtitle: 'Burger',
      description: 'This burger takes things to the next level with crispy bacon and melted cheese on top of a juicy patty.',
      imageUrl: 'https://res.cloudinary.com/sonic-drive-in/image/upload/c_fit,w_600,h_600,dpr_2,f_auto,q_auto/v1633113774/oa_menu/products/menuthumbnail_burger_bacon-cheeseburger.png'
    },
    {
      title: 'Cheese Pizza',
      subtitle: 'Pizza',
      label: 'Promoted',
      description: 'It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.',
      imageUrl: 'https://www.cicis.com/media/d21b0xj1/mac-and-cheese-pizza.png'
    },
    {
      title: 'Veggie Pizza',
      subtitle: 'Pizza',
      label: 'Veggie',
      description: 'When you want to jazz up your cheese pizza with color and texture, veggies are the perfect topping. And you’re only limited by your imagination. Everything from peppers and mushrooms, to eggplant and onions make for an exciting and tasty veggie pizza.',
      imageUrl: 'https://www.cicis.com/media/nctfaewb/veggie-pizza.png'
    },
    {
      title: 'Pepperoni Pizza',
      subtitle: 'Pizza',
      description: 'There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/023/742/403/original/pepperoni-pizza-isolated-illustration-ai-generative-free-png.png'
    },
    {
      title: 'Breakfast Burrito',
      subtitle: 'Breakfast',
      label: 'Promoted',
      description: 'Start your day off right with this breakfast burrito filled with scrambled eggs, cheese, potatoes, and your choice of bacon or sausage.',
      imageUrl: 'https://res.cloudinary.com/sonic-drive-in/image/upload/c_fit,w_600,h_600,dpr_2,f_auto,q_auto/v1622138834/oa_menu/products/menuproduct_breakfast_burrito-sausage-egg-cheese-jr.png'
    }
  ];

}
