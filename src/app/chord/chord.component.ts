import { Component, OnInit } from '@angular/core';
import { TallNotesServiceService } from '../tall-notes-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chord',
  templateUrl: './chord.component.html',
  styleUrls: ['./chord.component.css']
})
export class ChordComponent implements OnInit {

  name: string;
  notes: [string];

  constructor(
    private tallNotesService: TallNotesServiceService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')
    } )
    this.notes = this.tallNotesService.getChordNotes(this.name)
  }

}
