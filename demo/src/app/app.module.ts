import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HighlightJsModule } from 'ngx-highlight-js';

import { AbmModule } from 'angular-baidu-maps';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo.component';
import { DemoPanoramaComponent } from './components/panorama.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path: '', component: DemoComponent },
        { path: 'panorama', component: DemoPanoramaComponent }
    ], { useHash: true }),
    CommonModule,
    HighlightJsModule,
    
    AbmModule.forRoot({
        apiKey: 'p3HIQIqLqKVQOXao1IiLp5O0eTFakjEP'
    })
  ],
  declarations: [
    AppComponent,
    DemoComponent,
    DemoPanoramaComponent
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})

export class AppDemoModule {
}
