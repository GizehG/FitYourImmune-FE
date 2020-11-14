import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(private route: Router, public formularioService: FormulariosService) { }

  ngOnInit(): void {
    if(!this.formularioService.isLogin()){
      this.route.navigateByUrl('/');
    }
  }

}
