import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NoteComponent } from './note/note.component';
import { ChordComponent } from './chord/chord.component';
import { ScaleComponent } from './scale/scale.component';
import { TonalityComponent } from './tonality/tonality.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteComponent,
    ChordComponent,
    ScaleComponent,
    TonalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
