import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getData(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post(`${this.apiURL}/stats/data`, { ...body }, { ...headers })
      .pipe(catchError(this.handleError.bind(this)));
  }
  getSum(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post(`${this.apiURL}/stats/sum`, { ...body }, { ...headers })
      .pipe(catchError(this.handleError.bind(this)));
  }
  getCount() {
    return this.http
      .get(`${this.apiURL}/stats/count`)
      .pipe(catchError(this.handleError.bind(this)));
  }
  getTransactionsGroupedByMonth() {
    return this.http
      .get(`${this.apiURL}/stats/groupByMonth`)
      .pipe(catchError(this.handleError.bind(this)));
  }
  getMostSpentOn() {
    return this.http
      .get(`${this.apiURL}/stats/groupByPrice`)
      .pipe(catchError(this.handleError.bind(this)));
  }
  getAllTransactions() {
    return this.http
      .get(`${this.apiURL}/stats/getAllTransactions`)
      .pipe(catchError(this.handleError.bind(this)));
  }
  private handleError(errorResponse: HttpErrorResponse) {
    // if (
    //   errorResponse.status == 404 ||
    //   (errorResponse.error && !errorResponse.error.message)
    // ) {
    //   this.toastService.showError(errorResponse.error);
    // } else if (errorResponse.error.message) {
    //   this.toastService.showError(errorResponse.error.message);
    // }
    return throwError(errorResponse.statusText);
  }
}
