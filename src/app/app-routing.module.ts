import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { HomeComponent } from './home/home.component';
import { ItServiceComponent } from './it-service/it-service.component';
import { AndroidComponent } from './it/android/android.component';
import { AngularComponent } from './it/angular/angular.component';
import { IotComponent } from './it/iot/iot.component';
import { JavaComponent } from './it/java/java.component';
import { PythonComponent } from './it/python/python.component';
import { ReactComponent } from './it/react/react.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path:'android', component:AndroidComponent },
  {path:'angular', component:AngularComponent },
  {path:'iot', component:IotComponent },
  {path:'java', component:JavaComponent },
  {path:'python', component:PythonComponent },
  {path:'react', component:ReactComponent },
  {path:'it-service', component:ItServiceComponent},
  {path:'animation', component:AnimationComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
