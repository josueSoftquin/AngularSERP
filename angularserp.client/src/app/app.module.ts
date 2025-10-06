import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { HeaderComponent } from './features/layout/header/header.component';
import { SidenavComponent } from './features/layout/sidenav/sidenav.component';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MainComponent } from './features/main/main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    NotFoundComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas);
  }
}
