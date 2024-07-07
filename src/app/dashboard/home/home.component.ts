import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import * as _ from 'lodash';
import { DashboardService } from '../../services/dashboard.service';
import { forkJoin } from 'rxjs';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public utilityService: UtilityService,
    public dashboardService: DashboardService
  ) {}
  title = 'Expense-Tracker';
  day: number;
  week: number;
  month: number;
  year: number;
  totalSpent: number;
  totalEarned: number;
  totalTransactions: number;
  totalSaved: number;
  // data = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //   datasets: [
  //     {
  //       label: 'First Dataset',
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //     },
  //     {
  //       label: 'Second Dataset',
  //       data: [28, 48, 40, 19, 86, 27, 90],
  //     },
  //   ],
  // };
  pieChartData = {};
  lineChartData = {};
  lineChartOptions = {};
  pieChartOptions = {};
  public chart: any;
  ngOnInit(): void {
    forkJoin([
      this.dashboardService.getSum({ forColumn: 'Debit' }),
      this.dashboardService.getSum({ forColumn: 'Credit' }),
    ]).subscribe((res: [number, number]) => {
      this.totalSpent = res[0];
      this.totalEarned = res[1];
      this.totalSaved = Number((this.totalEarned - this.totalSpent).toFixed(2));
    });
    this.dashboardService.getTransactionsGroupedByMonth().subscribe((res) => {
      this.createLineChart(res);
    });
    this.dashboardService.getCount().subscribe((res) => {
      this.totalTransactions = res;
    });
    this.dashboardService.getMostSpentOn().subscribe((res) => {
      this.createPieChart(res);
    });
  }
  // getData(body) {
  //   let { type } = body;
  //   this.dashboardService.getData(body).subscribe((res) => {
  //     if (type == 'month') this.month = res;
  //     else if (type == 'year') this.year = res;
  //     else if (type == 'day') this.day = res;
  //     else if (type == 'week') this.week = res;
  //     else if (type == 'S') this.week = res;
  //     else if (type == 'week') this.week = res;
  //   });
  // }
  createLineChart({ totalDebited, totalCredited }) {
    const labels = totalDebited.map((item: any) => item.month);
    const debited = totalDebited.map((item: any) => item.total);
    const credited = totalCredited.map((item: any) => item.total);
    this.lineChartOptions = {
      aspectRatio: 1,
      maintainAspectRatio: false,
      responsive: true,
      animation: {
        duration: 1000,
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => `${context.raw}`,
          },
        },
        legend: {
          // display:false,
          position: 'bottom',
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      },
    };

    this.lineChartData = {
      labels: labels,
      datasets: [
        {
          label: 'Total Credited',
          data: credited,
          fill: true,
          tension: 0.4,
        },
        {
          label: 'Total Debited',
          data: debited,
          fill: true,
          tension: 0.4,
        },
      ],
    };
  }
  createPieChart(data) {
    const labels = data.map((item: any) => item.Narration);
    const value = data.map((item: any) => item.total_debit);
    this.pieChartOptions = {
      aspectRatio: 1,
      maintainAspectRatio: false,
      responsive: true,
      animation: {
        duration: 1000,
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => `${context.raw}`,
          },
        },
        legend: {
          // display:false,
          position: 'bottom',
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      },
    };
    this.pieChartData = {
      responsive: true,
      labels: labels,
      datasets: [
        {
          pointStyle: 'circle',
          label: 'Total Credited',
          data: value,
          fill: true,
          tension: 0.4,
        },
      ],
    };
  }
}
