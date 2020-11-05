import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.css']
})
export class DietaComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup; 
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Leche vegetal'},
    {name: 'Brocoli'},
    {name: 'Aguacate'},
    {name: 'Zanahoria'},
    {name: 'Pepino'},
    {name: 'Berenjena'},
    {name: 'Jengibre'},
    {name: 'Espinaca'},
    {name: 'Chile pimiento'},
    {name: 'Banano'},
    {name: 'Toronja'},
    {name: 'Piña'},
    {name: 'Papas'},
    {name: 'Lácteos'},
    {name: 'Pescado'},
    {name: 'Mariscos'},
    {name: 'Huevos'}

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


  constructor(private fb: FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }

  goTo(ruta: string){
    this.route.navigateByUrl(ruta); 
  }

}
