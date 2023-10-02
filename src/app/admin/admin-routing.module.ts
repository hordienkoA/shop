import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAdminComponent } from './components/products-admin/products-admin.component';
import { ProductsAdminViewComponent } from './components/products-admin-view/products-admin-view.component';
import { ProductsAdminAddComponent } from './components/products-admin-add/products-admin-add.component';
import { ProductsAdminEditComponent } from './components/products-admin-edit/products-admin-edit.component';
import { canActivateAdminAuthGuard } from '../core/guards/can-activate-admin-auth.guard';

const routes: Routes = [
  {
    path:"admin/products",
    component: ProductsAdminComponent,
    canActivate: [canActivateAdminAuthGuard],
    children:[
      {
        path: "add",
        component: ProductsAdminAddComponent
      },
      {
        path: "edit/:productID",
        component: ProductsAdminEditComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: ProductsAdminViewComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
