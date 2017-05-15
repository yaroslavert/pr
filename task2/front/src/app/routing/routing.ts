import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { DashboardDetailComponent } from './../dashboard/dashboard-detail/dashboard-detail.component';
import { CalculateComponent } from './../calculate/calculate.component';
import { FormComponent } from './../form/form.component';

const routes:Routes = [
    {
        path : '',
        children : [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {   
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'calculate',
                component: CalculateComponent
            },
            {
                path: 'dashboard/:id',
                component: DashboardDetailComponent
            },
            {
                path: 'form',
                component: FormComponent
            }
        ]
    },
    // {
    //     path:'**',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    // }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);