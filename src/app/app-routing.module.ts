import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { DietaComponent } from './components/dieta/dieta.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistorialMedComponent } from './components/historial-med/historial-med.component';
import { AudiosComponent } from './components/audios/audios.component';
import { ChatDoctorComponent } from './components/chat-doctor/chat-doctor.component';
import { LoginComponent } from './components/login/login.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { SOSComponent } from './components/sos/sos.component';
import { MiRutinaComponent } from './components/mi-rutina/mi-rutina.component';
import { MiDietaComponent } from './components/mi-dieta/mi-dieta.component';
import { ChatComponent } from './components/chat/chat.component';
import {MiChatComponent} from './components/mi-chat/mi-chat.component';

const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'rutina', component: RutinaComponent},
  {path: 'dieta', component: DietaComponent},
  {path: 'mi-rutina', component: MiRutinaComponent},
  {path: 'mi-dieta', component: MiDietaComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'historial', component: HistorialMedComponent},
  {path: 'audios', component: AudiosComponent},
  {path: 'chat', component: ChatDoctorComponent},
  {path: 'chats', component: ChatComponent},
  {path: '', component:LoginComponent},
  {path: 'cuenta', component:CuentaComponent},
  {path:'sos', component:SOSComponent},
  {path:'chatInit', component: MiChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
