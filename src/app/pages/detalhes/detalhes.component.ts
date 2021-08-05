import { Component, Input, OnInit} from '@angular/core';
import { EpisodioModel } from 'src/app/models/episodiomodel';
import { TemporadaModel } from 'src/app/models/temporadamodel';
import { AnimeModel } from 'src/app/models/animemodel';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
   @Input() anime: AnimeModel = new AnimeModel();
  



  constructor() {}

  ngOnInit(): void {}
}
