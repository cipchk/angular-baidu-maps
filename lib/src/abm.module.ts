import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmComponent } from './abm.component';
import { AbmPanoramaComponent } from './abm-panorama.component';
import { AbmConfig } from './abm.config';
import { LoaderService } from './loader.service';

@NgModule({
  imports: [CommonModule],
  providers: [LoaderService],
  declarations: [AbmComponent, AbmPanoramaComponent],
  exports: [AbmComponent, AbmPanoramaComponent],
})
export class AbmModule {
  static forRoot(config: AbmConfig): ModuleWithProviders {
    return {
      ngModule: AbmModule,
      providers: [{ provide: AbmConfig, useValue: config }],
    };
  }
}
