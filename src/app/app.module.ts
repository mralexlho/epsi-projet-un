import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownDirective } from './dropdown.directive';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BaspageComponent } from './baspage/baspage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BouttonsComponent } from './bouttons/bouttons.component';
import { PosimagashopComponent } from './posimagashop/posimagashop.component';
import { DetailhomeComponent } from './detailhome/detailhome.component';
import { DescriptionComponent } from './description/description.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { EnssembleComponent } from './enssemble/enssemble.component';
import { B3Component } from './b3/b3.component';
import { I4Component } from './i4/i4.component';
import { I5Component } from './i5/i5.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'baspage', component: BaspageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'bouttons', component: BouttonsComponent },
  { path: 'posimagashop', component: PosimagashopComponent },
  { path: 'detailhome', component: DetailhomeComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'partenaire', component: PartenaireComponent },
  { path: 'enssemble', component: EnssembleComponent },
  { path: 'b3', component: B3Component },
  { path: 'i4', component: I4Component },
  { path: 'i5', component: I5Component },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HomeComponent,
    BaspageComponent,
    NavbarComponent,
    BouttonsComponent,
    PosimagashopComponent,
    DetailhomeComponent,
    DescriptionComponent,
    PartenaireComponent,
    EnssembleComponent,
    B3Component,
    I4Component,
    I5Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
