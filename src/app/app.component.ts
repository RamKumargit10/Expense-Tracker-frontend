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
}
