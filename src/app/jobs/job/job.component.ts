import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IJob, JobType } from '../shared/models/job';
import { JobsService } from '../shared/services/jobs.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  public job!: IJob;

  constructor(private activatedRoute: ActivatedRoute, private jobsService: JobsService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.getJob(id);
    }
  }

  getJob(id: string | number){
    this.jobsService.getJob(id).subscribe({
      next: (job: IJob| undefined) => {
        if(job) this.job = job;
      }
    });
  }

}
