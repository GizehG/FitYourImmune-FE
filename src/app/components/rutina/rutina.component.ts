import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormulariosService } from 'src/app/services/formularios.service';

export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit {
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup; 
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Trotar'},
    {name: 'Yoga'},
    {name: 'Correr'},
    {name: 'Natación'},
    {name: 'Bicicleta'},
    {name: 'Boxing'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }


  constructor(private fb: FormBuilder, private route:Router, public formularioService: FormulariosService) { }

  ngOnInit(): void {
    // if(!this.formularioService.isLogin()){
    //   this.route.navigateByUrl('/');
    // }
    this.firstFormGroup = this.fb.group({
      pesoIdeal:[''],
      tiempoDisponible:[''],
      hora_entreno:[''],
      dpi:['']

    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }
  goTo(ruta: string){
    this.route.navigateByUrl(ruta); 
  }

}
