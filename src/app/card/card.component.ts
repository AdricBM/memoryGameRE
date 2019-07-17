import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards = [];
  constructor(private cardService:CardsService) { }

  ngOnInit() 
  {
    console.log('garba');
    this.cards = this.cardService.getCards();
  }

}
