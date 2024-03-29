import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/services/formularios.service';
 
@Component({
  selector: 'app-historial-med',
  templateUrl: './historial-med.component.html',
  styleUrls: ['./historial-med.component.css']
})
export class HistorialMedComponent implements OnInit {
  formGroup: FormGroup; 
  secondFormGroup: FormGroup; 

  favoriteSeason: string;
  cirujias: string[] = ['Sí', 'No'];

  constructor(private fb:FormBuilder,  private route:Router, public formService: FormulariosService) { }

  ngOnInit(): void {
    // if(!this.formService.isLogin()){
    //   this.route.navigateByUrl('/');
    // }

    this.formGroup = this.fb.group({
      id:[''],
      fecha_nac:[''],
      peso:[''],
      altura:[''],
      traumas:[''],
      cirugias:[''],
      medicamentosactuales:[''],
      infecciones:[''],
      dpi:['232232000000']
    });
    this.secondFormGroup=this.fb.group({

    });
  }

  save(){
    this.formService.saveHistoria(this.formGroup.value).subscribe((data)=>{
    })
    this.formGroup.reset();
    this.goTo('/dieta');
  }

  goTo(ruta: string){
    this.route.navigateByUrl(ruta); 
  }

}
