import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  states: string[] = ['teste', 'teste1', 'teste', 'teste1', 'teste','teste1',];

  constructor() {}

  ngOnInit(): void {}
}
