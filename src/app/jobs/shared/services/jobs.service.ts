import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { IJob, IResponseJobs } from '../models/job';
import { catchError, filter, map, Observable, throwError } from 'rxjs';

type paramJobs = {
  category?: string;
  company_name?: string;
  search?: string;
  limit?: string;
} | null;

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private readonly API_ENDPOINT_JOBS = 'https://remotive.io/api/remote-jobs';

  constructor(private httpClient: HttpClient){}

  getJobs(limit: number = 5, params: paramJobs = {}):Observable<IResponseJobs<IJob>>{
    let paramsMap = new HttpParams();
    if(params){
      for(let param in params){
        if(param === 'category' || param === 'limit' || param === 'search' || param === 'company_name'){
          if(param && params[param]){
            paramsMap = paramsMap.set(param, params[param]!); 
          }
        }
      }
    }
    return this.httpClient.get<IResponseJobs<IJob>>(this.API_ENDPOINT_JOBS, {
      params: paramsMap
    }).pipe(
      catchError(this.handlerError)
    );
  
  }

  getJob(id: string | number){
    return this.httpClient.get<IResponseJobs<IJob>>(this.API_ENDPOINT_JOBS).pipe(
      map((response: IResponseJobs<IJob>) => response.jobs.find((job: IJob) => {
        return job.id == id;
      }))
    );
   
  }

  private handlerError(error: HttpErrorResponse) {
    if(error.error in ErrorEvent){
      console.log('Client eorr');
    }
    else{
      console.log(`Error BackEnd: ${error.status} - ${error.error}`);
    }
    return throwError("Quelque chose s'est mal passé");
  }
}
