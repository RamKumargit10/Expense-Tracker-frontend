import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
})
export class TransactionsListComponent implements OnInit {
  transactions: any[] = [];
  cols = ['Date', 'Narration', 'Credit', 'Debit', 'Balance'];
  constructor(
    public utilityService: UtilityService,
    public dashboardService: DashboardService
  ) {}
  ngOnInit(): void {
    this.dashboardService.getAllTransactions().subscribe((res) => {
      this.transactions = res;
      console.log(res);
    });
  }
}
