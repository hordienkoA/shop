import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './sample/components/first/first.component';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { ConstantService } from './core/services/constant.service';
import { GENERATED_STRING, GeneratorFactory } from './core/services/generator-factory';
import { GeneratorService } from './core/services/generator.service';
import { APP_INITIALIZER } from '@angular/core';
import { LocalStorageService } from './core/services/local-storage.service';
import { ClickStyleDirective } from './shared/directives/click-style.directive';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule,
    SharedModule
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
