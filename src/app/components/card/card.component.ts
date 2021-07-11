import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
     var item = 0;



     const slider = document.querySelector('.card-section');

     const setaEsquerda = document.getElementById('scroll-left');
     const setaDireita = document.getElementById('scroll-right');

    //  setaEsquerda.addEventListener('click', () => {
    //    scroll(1);
    //  });
    //  setaDireita.addEventListener('click', () => {
    //    scroll(2);
    //  });


    //  function scroll(n) {
    //    if (n == 1) {
    //      slider.scrollLeft -= slider.offsetWidth;
    //    } else if (n == 2) {
    //      slider.scrollLeft += slider.offsetWidth;
    //    }
    //  }

  }
}
