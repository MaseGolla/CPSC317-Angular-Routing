import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'people', component:BodyComponent},
  {path:'planets', component:PlanetsComponent},
  {path:'starships', component:StarshipsComponent},
  {path: '',
    redirectTo: '/people',
    pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
