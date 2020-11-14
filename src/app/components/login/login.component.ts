import CryptoJS from 'crypto-js';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private route:Router, private fb: FormBuilder, public formularioService: FormulariosService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: [''],
      passwd: ['']
    });
  }
  
  goTo(ruta: string){
    this.route.navigateByUrl(ruta); 
  }

  login(){
    this.formularioService.login(this.formGroup.value).subscribe(data => {
      if(data.status =1){
        //this.route.navigateByUrl('/cuenta');
        alert("Bienvenido Se ha iniciado sesión");
        console.log(this.formGroup.value.dpi)
        this.formularioService.guardarToken();
        this.route.navigateByUrl('/cuenta');
      }
      else alert("Error! No se encontraron los datos");
    }) 
    this.formGroup.reset();
    

  }


}
