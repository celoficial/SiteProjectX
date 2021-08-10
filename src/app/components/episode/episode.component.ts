import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EpisodioModel } from 'src/app/models/episodiomodel';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit {
  @Input() episodio: EpisodioModel = new EpisodioModel();
  panelOpenState = false;
  constructor() {}
  showDelay = new FormControl(500);
  ngOnInit(): void {}
}
