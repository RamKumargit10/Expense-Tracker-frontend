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
  pieChartData = {};
  lineChartData = {};
  lineChartOptions = {};
  pieChartOptions = {};
  public chart: any;
  ngOnInit(): void {
    this.getAllData();
    this.dashboardService.dateRange.valueChanges.subscribe((res) => {
      if (res && res[0] != null && res[1] != null) this.getAllData();
    });
  }
  getAllData() {
    forkJoin([
      this.dashboardService.getSum({ forColumn: 'Debit' }),
      this.dashboardService.getSum({ forColumn: 'Credit' }),
    ]).subscribe((res: [number, number]) => {
      this.totalSpent = res[0] || 0;
      this.totalEarned = res[1] || 0;
      this.totalSaved = Math.max(
        Number((this.totalEarned - this.totalSpent).toFixed(2)),
        0
      );
    });
    this.dashboardService.getTransactionsGroupedByMonth().subscribe((res) => {
      this.createLineChart(res);
    });
    this.dashboardService.getTotalTransactions().subscribe((res) => {
      this.totalTransactions = res;
    });
    this.dashboardService
      .getTransactionsGroupedByCategory()
      .subscribe((res) => {
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
    const labels = totalDebited.map((item: any) => item.date);
    const debited = totalDebited.map((item: any) => item.total || 0);
    const credited = totalCredited.map((item: any) => item.total || 0);
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
          display: false,
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
    const labels = data.map((item: any) => item.Category);
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
