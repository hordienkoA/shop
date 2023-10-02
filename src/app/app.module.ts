import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './sample/components/first/first.component';
import { CartModule } from './cart/cart.module';
import { ConstantService } from './core/services/constant.service';
import { GENERATED_STRING, GeneratorFactory } from './core/services/generator-factory';
import { GeneratorService } from './core/services/generator.service';
import { LocalStorageService } from './core/services/local-storage.service';
import { ClickStyleDirective } from './shared/directives/click-style.directive';
import { SharedModule } from './shared/shared.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { PathNotFoundComponent } from './pages/path-not-found/path-not-found.component';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    SharedModule,
    ProductRoutingModule,
    AdminModule,
    AdminRoutingModule,
    AppRoutingModule,

  ],
  providers: [{
    provide: ConstantService,
    useValue: {
      App: 'TaskManager',
      Ver: '1.0',
      API_URL: 'http://example.com/api'
    }
  },
  GeneratorService,
    {
      provide: GENERATED_STRING,
      useFactory: (generatorService: GeneratorService) => GeneratorFactory(10, generatorService),
      deps: [GeneratorService],
    },
  {
    provide: LocalStorageService,
    useValue: new LocalStorageService(),
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
