import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mi-dieta',
  templateUrl: './mi-dieta.component.html',
  styleUrls: ['./mi-dieta.component.css']
})
export class MiDietaComponent implements OnInit {
  panelOpenState = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
