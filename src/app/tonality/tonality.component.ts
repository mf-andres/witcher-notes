import { Component, OnInit } from '@angular/core';
import { TallNotesServiceService } from '../tall-notes-service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tonality',
  templateUrl: './tonality.component.html',
  styleUrls: ['./tonality.component.css']
})
export class TonalityComponent implements OnInit {

  name: string;
  chords: [string];

  constructor(
    private tallNotesService: TallNotesServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')
    } )
    this.chords = this.tallNotesService.getTonalityNotes(this.name)
  }

}
