import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/models/cardmodel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: CardModel = new CardModel();
  constructor() {}

  ngOnInit(): void {}
}
