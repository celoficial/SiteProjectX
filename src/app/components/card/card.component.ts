import { Component, Input, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { CardModel } from 'src/app/models/cardmodel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: CardModel = new CardModel();

  array: Array<string> = new Array<string>(5)
  intStars = 0
  halfStar = 0

  constructor() {}

  ngOnInit(): void {

    //intStar = ?
    //halfstar = (rating % 1).toFixed(2).substring(2)
    //TODO: Refact this shit
    var number = this.card.rating.toString()

    this.intStars = parseInt(number.split('.')[0])
    this.halfStar = parseInt(number.split('.')[1])

    for (let index = 0; index < this.intStars; index++) {
      this.array[index] = "star"
    }

    if(this.halfStar){
      this.array[this.intStars] = "star_half"
    }

    for (let index = 0; index < this.array.length; index++) {
      if(!this.array[index]){
        this.array[index] = "star_border"
      }
    }
  }
}
