import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-mi-sos',
  templateUrl: './mi-sos.component.html',
  styleUrls: ['./mi-sos.component.css']
})
export class MiSOSComponent implements OnInit {

  constructor(private route: Router, public formularioService: FormulariosService) { }

  ngOnInit(): void {
    if(!this.formularioService.isLogin()){
      this.route.navigateByUrl('/');
    }
  }

}
