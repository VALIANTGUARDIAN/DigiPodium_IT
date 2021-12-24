import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import{ MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbToastrModule,
  NbDialogModule,
  NbCardModule,
  NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LayoutComponent } from './layout/layout.component';
import { JavaComponent } from './it/java/java.component';
import { PythonComponent } from './it/python/python.component';
import { AndroidComponent } from './it/android/android.component';
import { IotComponent } from './it/iot/iot.component';
import { AngularComponent } from './it/angular/angular.component';
import { ReactComponent } from './it/react/react.component';
import { ItServiceComponent } from './it-service/it-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LayoutComponent,
    JavaComponent,
    PythonComponent,
    AndroidComponent,
    IotComponent,
    AngularComponent,
    ReactComponent,
    ItServiceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    LayoutModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbMenuModule,
    NbToastrModule,
    NbDialogModule,
    NbCardModule,
    NbIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
