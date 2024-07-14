import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiURL = 'http://localhost:3000';
  currentDate = new Date();
  fromDate = new Date(
    this.currentDate.setDate(this.currentDate.getDate() - 30)
  );
  dateRange: FormControl = new FormControl();
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  filter = {};
  constructor(private http: HttpClient) {}
  // getData(body) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  //   return this.http
  //     .post(`${this.apiURL}/stats/data`, { ...body }, { ...headers })
  //     .pipe(catchError(this.handleError.bind(this)));
  // }
  getRange() {
    return { range: this.dateRange.value };
  }
  getSum(body) {
    let filter = {};
    filter = { range: this.dateRange.value };
    return this.http
      .post(
        `${this.apiURL}/stats/sum`,
        { ...body, ...filter },
        { ...this.headers }
      )
      .pipe(catchError(this.handleError.bind(this)));
  }
  getTotalTransactions() {
    return this.http
      .post(
        `${this.apiURL}/stats/count`,
        { ...this.getRange() },
        { ...this.headers }
      )
      .pipe(catchError(this.handleError.bind(this)));
  }
  getTransactionsGroupedByMonth() {
    return this.http
      .post(
        `${this.apiURL}/stats/groupByMonth`,
        { ...this.getRange() },
        { ...this.headers }
      )
      .pipe(catchError(this.handleError.bind(this)));
  }
  getTransactionsGroupedByCategory() {
    return this.http
      .post(
        `${this.apiURL}/stats/groupByCategory`,
        { ...this.getRange() },
        { ...this.headers }
      )
      .pipe(catchError(this.handleError.bind(this)));
  }
  getAllTransactions() {
    return this.http
      .post(
        `${this.apiURL}/stats/getAllTransactions`,
        { ...this.getRange() },
        { ...this.headers }
      )
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
