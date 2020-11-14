import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private route:Router, public formularioService: FormulariosService) { } 

  ngOnInit(): void {

    if(!this.formularioService.isLogin()){
      this.route.navigateByUrl('/');
    }

    this.formGroup = this.fb.group({
      nombre: [''],
      dpi: [''], 
      telefono: [''],
      email:[''], 
      contrasena:['']
    });
  }

  newConsulta(){
    this.goTo("http://localhost:8080/");
  }

  goTo(ruta: string){
    this.route.navigateByUrl(ruta); 
  }

}
