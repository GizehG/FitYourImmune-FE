import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HistorialMedComponent } from './components/historial-med/historial-med.component';
import { ChatDoctorComponent } from './components/chat-doctor/chat-doctor.component';
import { DietaComponent } from './components/dieta/dieta.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { AudiosComponent } from './components/audios/audios.component';
import {MatChipsModule} from '@angular/material/chips';


//MATERIAL
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import {MatSortModule} from '@angular/material/sort';;
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule, MatSelect} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { SOSComponent } from './components/sos/sos.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactoSOSComponent } from './components/contacto-sos/contacto-sos.component';
import { HistorialComponent } from './components/historial/historial.component';
import { MiDietaComponent } from './components/mi-dieta/mi-dieta.component';
import { MiRutinaComponent } from './components/mi-rutina/mi-rutina.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MiChatComponent } from './components/mi-chat/mi-chat.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    LoginComponent,
    RegistroComponent,
    HistorialMedComponent,
    ChatDoctorComponent,
    DietaComponent,
    RutinaComponent,
    AudiosComponent,
    CuentaComponent,
    SOSComponent,
    ChatComponent,
    ContactoSOSComponent,
    HistorialComponent,
    MiDietaComponent,
    MiRutinaComponent,
    MiChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatRadioModule,
    MatStepperModule,
    MatDividerModule,
    MatDatepickerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule, 
    MatSelectModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
