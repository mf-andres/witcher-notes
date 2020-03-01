import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  
  notes = [
    {name:"DO"},
    {name:"DO#"},
    {name:"RE"},
    {name:"RE#"},
    {name:"MI"},
    {name:"FA"},
    {name:"FA#"},
    {name:"SOL"},
    {name:"SOL#"},
    {name:"LA"},
    {name:"LA#"},
    {name:"SI"}
  ]
  
  constructor() { }
  
  ngOnInit() {
  }
  
}
