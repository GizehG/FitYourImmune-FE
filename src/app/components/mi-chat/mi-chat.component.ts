import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-mi-chat',
  templateUrl: './mi-chat.component.html',
  styleUrls: ['./mi-chat.component.css']
})
export class MiChatComponent implements OnInit {

  constructor(private route: Router, public formularioService: FormulariosService) { }

  ngOnInit(): void {
    if(!this.formularioService.isLogin()){
      this.route.navigateByUrl('/');
    }
  }

}
