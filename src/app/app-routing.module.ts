import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LsiDashboardComponent } from './lsi-dashboard/lsi-dashboard.component';


const routes: Routes = [
  { path: 'lsi-dashboard', component: LsiDashboardComponent },
  { path: '', redirectTo: 'lsi-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
