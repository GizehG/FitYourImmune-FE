import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/services/formularios.service';

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

  constructor(private route: Router, public formularioService: FormulariosService) { }

  ngOnInit(): void {
    if(!this.formularioService.isLogin()){
      this.route.navigateByUrl('/');
    }
  }

}
