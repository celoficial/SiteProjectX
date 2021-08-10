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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MinhalistaComponent } from './pages/minhalista/minhalista.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {SocialAuthServiceConfig} from 'angularx-social-login';
import { SocialLoginModule, GoogleLoginProvider } from 'angularx-social-login';




@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    DetalhesComponent,
    CadastroComponent,
    MinhalistaComponent,
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
    IvyCarouselModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTabsModule,
    MatChipsModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    SocialLoginModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '958254564186-epltgprgs5ec2ai3pjp9p3pmu2lu22cj.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
