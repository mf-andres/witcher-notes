import { Component, OnInit } from '@angular/core';
import { TallNotesServiceService } from '../tall-notes-service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.css']
})
export class ScaleComponent implements OnInit {

  name: string;
  notes: [string];
  scaleOnGuitar;
  strings;
  frets;

  is_note_in_scale(fret: number, string: number){
    return this.scaleOnGuitar[fret][string][1] == true
  }

  is_note_tonic(fret: number, string: number) {
    return this.scaleOnGuitar[fret][string][2] == true
  }

  constructor(
    private tallNotesService: TallNotesServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')
    } )
    this.notes = this.tallNotesService.getScaleNotes(this.name)
    this.scaleOnGuitar = this.tallNotesService.getScaleOnGuitar(this.name)
    this.strings = Array(6).fill(1).map((x,i)=>i)
    this.frets = Array(12).fill(1).map((x,i)=>i + 1)
  }
}
