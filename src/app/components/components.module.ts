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
import { CategoryComponent } from './category/category.component';
import { EpisodeComponent } from './episode/episode.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    SearchComponent,
    CategoryComponent,
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
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    SearchComponent,
    CategoryComponent,
    EpisodeComponent,
  ],
})
export class ComponentsModule {}
