import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private route:Router, public formularioService: FormulariosService) { }

  ngOnInit(): void {
    // if(!this.formularioService.isLogin()){
    //   this.route.navigateByUrl('/');
    // }else{
    //   this.route.navigateByUrl('/cuenta');
    // }

    this.formGroup = this.fb.group({
      nombre: [''],
      dpi: [''], 
      telefono: [''],
      email:[''], 
      contrasena:['']
    });
  }

  goTo(ruta: string){
    this.route.navigateByUrl(ruta); 
  }

}
