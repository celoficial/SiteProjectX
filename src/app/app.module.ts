import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import {IvyCarouselModule} from 'angular-responsive-carousel';




@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    DetalhesComponent,
    CadastroComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ComponentsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    IvyCarouselModule

  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue : 'en-GB'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
