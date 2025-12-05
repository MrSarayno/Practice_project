import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalComponent } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { ControlFlow } from './components/control-flow/control-flow';
import { NotFound } from './components/not-found/not-found';



export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'signal',
        component: SignalComponent
    },
    {
        path: 'variables',
        component: Variables
    },
    {   
        path: 'control-flow',
        component: ControlFlow
    },
    {
        path: '**',
        component: NotFound
    }
];
