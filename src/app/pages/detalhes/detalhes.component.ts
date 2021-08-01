import { Component, OnInit } from '@angular/core';
import { EpisodioModel } from 'src/app/models/episodiomodel';
import { TemporadaModel } from 'src/app/models/temporadamodel';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  
  listEpisodios: Array<EpisodioModel> = [
    {
      id: '1',
      sinopse: 'aaaaaaa',
      episodioTitle: "AAAAA",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
