import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {FormulariosService} from '../../services/formularios.service';

@Component({  
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private route:Router, private formService: FormulariosService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      dpi:[''],
      nombre: [''],
      apellido: [''], 
      telefono: [''],
      email:[''], 
      passwd:[''],
      colegiado:['']
    });
  } 

  //Guardando datos
  save(){
    this.formService.savePaciente(this.formGroup.value).subscribe((data)=>{
    })
    this.formGroup.reset();
    this.goTo('/sos');
  }

  //Metodo para rutas
  goTo(ruta: string){
    this.route.navigateByUrl(ruta); 
  }

}
