import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './jobs/job/job.component';
import { Page404Component } from './page404/page404.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'job/:id', component: JobComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: Page404Component}
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
