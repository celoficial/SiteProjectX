import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit {
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}
}
