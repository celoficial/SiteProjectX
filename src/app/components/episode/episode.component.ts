import { Component, Input, OnInit } from '@angular/core';
import { EpisodioModel } from 'src/app/models/episodiomodel';


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
  styles: [
    `
      ::ng-deep .specific-class > .mat-expansion-indicator:after {
        color: white;
      }
    `,
  ],
})
export class EpisodeComponent implements OnInit {
  @Input() episodio: EpisodioModel = new EpisodioModel();
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}
}
