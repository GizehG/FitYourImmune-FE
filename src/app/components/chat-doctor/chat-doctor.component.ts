import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ChatComponent } from '../chat/chat.component';
import { Doctor } from '../chat-doctor/doctor';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-chat-doctor',
  templateUrl: './chat-doctor.component.html',
  styleUrls: ['./chat-doctor.component.css']
})
export class ChatDoctorComponent implements OnInit{
  formularioList: Array<Doctor> = new Array<Doctor>();
  displayedColumns: string[] = ['colegiado', 'nombreDoc', 'email', 'telefono', 'direccion', 'especialidad'];
  dataSource: MatTableDataSource<Doctor> = new MatTableDataSource(this.formularioList);
 
  constructor( private fb: FormBuilder, private route:Router, public dialog: MatDialog, private formService: FormulariosService) {
    
  }
  

  ngOnInit() {

    this.formService.getDoctores().subscribe((data) => {
      if (data.length > 0) {
        let temp : Doctor;
        this.formularioList = new Array<Doctor>();
        data.forEach((element) => {
          temp = new Doctor();
          temp.colegiado = element.colegiado;
          temp.nombredoc = element.nombredoc;
          temp.email = element.email;
          temp.telefono = element.telefono;
          temp.direccion = element.direccion;
          temp.especialidad = element.especialidad;
          this.formularioList.push(temp);
        });
        this.dataSource.data = this.formularioList;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  goTo(ruta: string){
    this.route.navigateByUrl(ruta); 
  }
  
  openColegiado(){
    let dialogRef = this.dialog.open(ChatComponent,{
      height: '200px',
      width: '300px',});
    dialogRef.afterClosed().subscribe();
  }
}
