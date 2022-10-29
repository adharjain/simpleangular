import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { UserProfileService } from './services/user-profile.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { UserProfileComponent } from './comps/user-profile/user-profile.component';
import { HeaderComponent } from './comps/header/header.component';
import { FooterComponent } from './comps/footer/footer.component';
import { AddUserComponent } from './comps/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HeaderComponent,
    FooterComponent,
    AddUserComponent
  ],
  imports: [
    AppRouterModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule  
  ],
  providers: [UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
