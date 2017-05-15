import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Task1Component } from "./task1/task1.component";
import { Task2Component } from "./task2/task2.component";
import { Task3Component } from "./task3/task3.component";


const routing:Routes = [
    {
        path:'',
        children:[
            {
                path: '',
                redirectTo: 'task1',
                pathMatch: 'full'
            },
            {
                path: "task1",
                component: Task1Component
            },
            {
                path: 'task2',
                component: Task2Component
            },
            {
                path: "task3",
                component: Task3Component
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'task1',
        pathMatch: 'full'
    }
];

export const routes:ModuleWithProviders = RouterModule.forRoot(routing);