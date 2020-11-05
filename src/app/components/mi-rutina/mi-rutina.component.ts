import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mi-rutina',
  templateUrl: './mi-rutina.component.html',
  styleUrls: ['./mi-rutina.component.css']
})
export class MiRutinaComponent implements OnInit {
  panelOpenState = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
