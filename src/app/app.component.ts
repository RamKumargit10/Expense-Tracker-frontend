import { Component } from '@angular/core';
import { UtilityService } from './services/utility.service';
import * as _ from 'lodash';
import { DashboardService } from './services/dashboard.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public utilityService: UtilityService,
    public dashboardService: DashboardService
  ) {}
  title = 'Expense-Tracker';
  ngOnInit(): void {
    // this.dateRange.valueChanges.subscribe((res) => console.log(res));
    this.dashboardService.dateRange.setValue([
      this.dashboardService.fromDate,
      new Date(),
    ]);
    this.dashboardService.dateRange.valueChanges.subscribe((res) => {
      if (res[0] && res[1]) this.dashboardService.filter = { range: res };
    });
  }
}
