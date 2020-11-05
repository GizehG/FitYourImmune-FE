import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private route:Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      dpi: [''],
      contrasena: ['']
    });
  }
  
  goTo(ruta: string){
    this.route.navigateByUrl(ruta); 
  }

}
