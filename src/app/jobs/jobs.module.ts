import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxSpinnerModule } from 'ngx-spinner';

import { JobComponent } from './job/job.component';
import { JobListComponent } from './job-list/job-list.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { JobsDatas } from './shared/api/jobs.datas';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    JobComponent,
    JobListComponent
  ],
  imports: [
    SharedModule,   
    BrowserAnimationsModule,
    NgxSpinnerModule,
    environment.production? []: InMemoryWebApiModule.forFeature(JobsDatas, {
      passThruUnknownUrl: true,
    })
  ],
  exports: [
    JobComponent,
    JobListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobsModule {
  
 }