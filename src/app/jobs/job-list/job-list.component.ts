import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";

import { IJob, IResponseJobs } from '../shared/models/job';
import { JobsService } from '../shared/services/jobs.service';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit, AfterViewInit {

  @ViewChild('gridJobs', {read: ElementRef}) 
  private readonly _gridJobs!: ElementRef<HTMLElement>;
  @ViewChildren('child', {read: ElementRef}) 
  private readonly _gridChildren!: QueryList<ElementRef<HTMLElement>>

  private _observer!: IntersectionObserver;


  public errorMessage: string | any = '';
  public jobs: IJob[] = [];
  private target!: HTMLElement;

  constructor(private jobsService: JobsService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.showJobs();
    this.intersectionObserver();
  }

  
  ngAfterViewInit(): void {
    this._observer.observe(this._gridJobs.nativeElement);
    this.target = this._gridJobs.nativeElement;
    this._gridChildren.changes.subscribe({
      next: (e: QueryList<ElementRef<HTMLElement>>) => {
        this._observer.unobserve(this.target)
        if(e.last) {
          this._observer.observe(e.last.nativeElement);
          this.target = e.last.nativeElement;
        }
      },
      error: (error) => {
        this.errorMessage = error.errorMessage;
      }
    })
  }
  
  trackById(i: number, job: IJob): number{
    return job.id;
  }

  showJobs(limit = 5){
    this.spinner.show();
    this.jobsService.getJobs().subscribe({
    next: (jobsResponse: IResponseJobs<IJob>) => {
      this.spinner.hide();
      const start = (this.jobs.length)? (this.jobs.length) : 0;
      this.jobs.push(...jobsResponse.jobs.slice(start, limit + start));
    }
  });
  }

  intersectionObserver(){
    const options: IntersectionObserverInit = {
      rootMargin: '10px',
      threshold: [.9]
    }
    this._observer = new IntersectionObserver((observables) => {
     const r = observables[0].intersectionRatio;
     if(r !== 1 && r !== 0){
      this.showJobs();
      
     }
    
    }, options)

  }


}
