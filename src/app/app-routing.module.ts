import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ITServicesComponent } from './it-services/it-services.component';
import { AndroidComponent } from './it/android/android.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path:'it-services', component: ITServicesComponent },
  {path:'android', component:AndroidComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
