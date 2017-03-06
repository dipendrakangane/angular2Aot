import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Temp1Component } from './temp1/temp1.component';

export const routes: Routes = [
    { path: 'angular2Aot', component: Temp1Component, pathMatch: 'full' },
    { path: 'angular2Aot', redirectTo: 'angular2Aot/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
