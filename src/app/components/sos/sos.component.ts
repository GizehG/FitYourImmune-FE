import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css']
})
export class SOSComponent implements OnInit {
  
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private route:Router, private formService: FormulariosService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      id:[''],
      nombreSOS: [''],
      telefono: [''],
      email:[''],
      dpi:['232232000000'] 
    });
  }

  save(){
    this.formService.saveSOS(this.formGroup.value).subscribe((data)=>{
    })
    this.formGroup.reset();
    this.goTo('/historial');
    
  }

  goTo(ruta: string){
    this.route.navigateByUrl(ruta); 
  }
}
