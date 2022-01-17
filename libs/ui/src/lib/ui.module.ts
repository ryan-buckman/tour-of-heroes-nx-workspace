import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from '@tour-of-heroes/hero-service';
import { MessageService } from '@tour-of-heroes/message-service';
import { RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [CommonModule, RouterModule,FormsModule],
  declarations: [
    DashboardComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HeroesComponent
  ],
  exports: [
    DashboardComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HeroesComponent
  ],
  providers:[HeroService, MessageService]
})
export class UiModule {}
