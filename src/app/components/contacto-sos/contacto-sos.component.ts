import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-contacto-sos',
  templateUrl: './contacto-sos.component.html',
  styleUrls: ['./contacto-sos.component.css']
})
export class ContactoSOSComponent implements OnInit {

  constructor(private route: Router, public formularioService: FormulariosService) { }

  ngOnInit(): void {
    if(!this.formularioService.isLogin()){
      this.route.navigateByUrl('/');
    }
  }

}
