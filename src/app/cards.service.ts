import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

   cards = ['avocado.png','bacon-and-eggs.png','breakfast.png','burger-and-potatoes.png','cheese.png',
            'chef.png','coffe-cup.png','croisant.png','gingerbreadman.png','ice-cream.png','latte.png',
            'meat.png','pizza.png','taco.png','wine.png','avocado.png','bacon-and-eggs.png','breakfast.png','burger-and-potatoes.png','cheese.png',
            'chef.png','coffe-cup.png','croisant.png','gingerbreadman.png','ice-cream.png','latte.png',
            'meat.png','pizza.png','taco.png','wine.png'];
  constructor() { }
  
  getCards()
  {
    return this.cards;
  }
}
