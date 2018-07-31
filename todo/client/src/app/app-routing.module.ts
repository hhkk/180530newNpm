import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {CustomerComponent} from "./customer/customer.component";
import { CustomerCreateComponent } from "./customer-create/customer-create.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import { CustomerEditComponent } from "./customer-edit/customer-edit.component";

console.log("=== hbk ===== in /Users/hkon/utd/180530newNpm/todo/client/src/app/app-routing.module.ts ");


const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
    {
        path: 'customers',
        component: CustomerComponent,
        data: { title: 'Customer List' }
    },
    { path: '',
        redirectTo: '/customers',
        pathMatch: 'full'
    },
    {
        path: 'customer-create',
        component: CustomerCreateComponent,
        data: { title: 'Add Customer' }
    },
    {
        path: 'customer-details/:id',
        component: CustomerDetailComponent,
        data: { title: 'Customer Details' }
    },
    {
        path: 'customer-edit/:id',
        component: CustomerEditComponent,
        data: { title: 'Edit Customer' }
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}