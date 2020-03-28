import { Injectable } from '@angular/core';
import { tallNotes } from './tall-notes'

@Injectable({
  providedIn: 'root'
})
export class TallNotesServiceService {

  constructor() { }

  getChordNotes(chord: string) {
    return tallNotes['chords'][chord]  
  }

  getScaleNotes(scale: string) {
    return tallNotes['scales'][scale]
  }

  getTonalityNotes(tonality: string) {
    return tallNotes['tonalities'][tonality]
  }

  getScaleOnGuitar(scale: string) {
    return tallNotes['scales_on_guitar'][scale]
  }
}
