import { NgModule } from '@angular/core';
import { ProductListComponent, ProductsComponent } from './components';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { productResolver } from './resolvers/product.resolver';

const routes: Routes = [

  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'item/:productID',
        component: ProductDetailsComponent,
        resolve: {
          productFromResolver: productResolver
        }
    },
    {
      path: '',
      component: ProductListComponent
    }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
