import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Audio } from '../audios/audio';
import { FormulariosService } from 'src/app/services/formularios.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.css']
})

export class AudiosComponent implements OnInit {
  formularioList: Array<Audio> = new Array<Audio>();
  displayedColumns: string[] = ['nombre_audio', 'link', 'funcion'];
  dataSource: MatTableDataSource<Audio> = new MatTableDataSource(this.formularioList);


  constructor(private fb: FormBuilder, private route:Router, private _httpClient: HttpClient, private formService: FormulariosService) { }
  
  ngOnInit() {
    if(!this.formService.isLogin()){
      this.route.navigateByUrl('/');
    }

    this.formService.getAudios().subscribe((data) => {
      if (data.length > 0) {
        let temp : Audio;
        this.formularioList = new Array<Audio>();
        data.forEach((element) => {
          temp = new Audio();
          temp.correlativo = element.correlativo;
          temp.nombre_audio = element.nombre_audio;
          console.log(element.nombre_audio)
          temp.link = element.link;
          temp.funcion = element.funcion;
          
          this.formularioList.push(temp);
        });
        this.dataSource.data = this.formularioList;
      }
    });
  }

  goTo(link: string){
    this.route.navigateByUrl(link); 
  }

}
