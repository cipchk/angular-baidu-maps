import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AbmComponent } from './core/abm.component';
import { AbmPanoramaComponent } from './core/abm-panorama.component';
import { AbmConfig } from './core/abm.config';
import { LoaderService } from './core/loader.service';

@NgModule({
  imports: [CommonModule],
  providers: [ LoaderService ],
  declarations: [AbmComponent, AbmPanoramaComponent],
  exports: [AbmComponent, AbmPanoramaComponent]
})
export class AbmModule {
    static forRoot(config: AbmConfig): ModuleWithProviders {
        return {
            ngModule: AbmModule,
            providers: [
                { provide: AbmConfig, useValue: config }
            ]
        };
    }
}
