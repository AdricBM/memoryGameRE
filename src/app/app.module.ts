import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlaysComponent } from './overlays/overlays.component';
import { CardBoardComponent } from './card-board/card-board.component';
import { CardComponent } from './card/card.component';
import { CardsService } from './cards.service';

@NgModule({
  declarations: [
    AppComponent,
    OverlaysComponent,
    CardBoardComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
