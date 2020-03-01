import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  name: string;

  chords = [
    "M",
    "m",
    "dim",
  ]

  scales = [
    "jonica",
    "dorica",
    "frigio",
    "lidio",
    "mixolidio",
    "eolico",
    "locrio"
  ]

  tonalities = [
    "jonica",
    "dorica",
    "frigio",
    "lidio",
    "mixolidio",
    "eolico",
    "locrio"
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')
    } )
  }

}
