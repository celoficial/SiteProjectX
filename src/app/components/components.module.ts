import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';

import { EpisodeComponent } from './episode/episode.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    SearchComponent,
    EpisodeComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatTooltipModule,
    MatMenuModule,
  ],
  exports: [HeaderComponent, CardComponent, SearchComponent, EpisodeComponent],
})
export class ComponentsModule {}
