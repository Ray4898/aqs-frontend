import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerFormComponent } from './owner-form/owner-form.component'
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { KioskIntialComponent } from './kiosk-intial/kiosk-intial.component';
import { KioskStartComponent } from './kiosk-start/kiosk-start.component';
import { IfPrequalComponent } from './if-prequal/if-prequal.component';
import { NotPrequalComponent } from './not-prequal/not-prequal.component';

const routes: Routes = [{path: 'checkin', component: OwnerFormComponent},
  {path: 'search', component: SearchScreenComponent},
  {path: 'init', component: KioskIntialComponent},
  {path: 'start', component: KioskStartComponent},
  {path: 'IfPrequal', component: IfPrequalComponent},
  {path: 'NotPrequal', component: NotPrequalComponent},
  {path : '', redirectTo: '/checkin', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OwnerFormComponent,  SearchScreenComponent ];
