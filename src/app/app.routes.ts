import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalComponent } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { ControlFlow } from './components/control-flow/control-flow';
import { NotFound } from './components/not-found/not-found';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { UserMaster } from './components/user-master/user-master';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { Admin } from './components/admin/admin';
import { Attribute } from './components/attribute/attribute';
import { Photos } from './components/photos/photos';
import { User } from './components/user/user';
import { GetAPI } from './components/API CALL/get-api/get-api';
import { PostAPI } from './components/API CALL/post-api/post-api';
import { PutAPI } from './components/API CALL/put-api/put-api';
import { DeleteAPI } from './components/API CALL/delete-api/delete-api';



export const routes: Routes = [
    {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full'
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'dynamic-css-class',
        component: DynamicCssClass
    },
    {
        path: 'reactive-user',
        component: ReactiveUser
    },
    {
        path: 'signal',
        component: SignalComponent
    },
    {
        path: 'user-master',
        component: UserMaster
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
        path: 'admin',
        component: Admin
    },
    {
        path: 'attribute',
        component: Attribute
    },
    {
        path: 'photos',
        component: Photos
    },
    {
        path: 'user',
        component: User
    },
    {
        path: 'get-api',
        component: GetAPI
    },
    {
        path: 'post-api',
        component: PostAPI
    },
    {
        path: 'put-api',
        component: PutAPI
    },
    {
        path: 'delete-api',
        component: DeleteAPI
    },
    {
        path: '**',
        component: NotFound
    }
];
