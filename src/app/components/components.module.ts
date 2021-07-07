import { NgModule } from '@angular/core';
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
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    SearchComponent,
    CategoryComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    SearchComponent,
    CategoryComponent,
    InfoComponent,
  ],
})
export class ComponentsModule {}
