import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private route:Router, public formularioService: FormulariosService) {}
  ngOnInit(){

    if(!this.formularioService.isLogin()){
      this.route.navigateByUrl('/');
    }
  }
  
  goTo(ruta: string){
    this.route.navigateByUrl(ruta); 
  }

  logout() {
    this.formularioService.logout();
    alert("Se ha cerrado sesión");
  }
}
