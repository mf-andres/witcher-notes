import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note/note.component'
import { ChordComponent } from './chord/chord.component';
import { ScaleComponent } from './scale/scale.component';
import { TonalityComponent } from './tonality/tonality.component';

const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'note/:name', component: NoteComponent },
  { path: 'chord/:name', component: ChordComponent },
  { path: 'scale/:name', component: ScaleComponent },
  { path: 'tonality/:name', component: TonalityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }