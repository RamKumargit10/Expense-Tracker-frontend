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
  cols = [
    { name: 'Date', width: '10%' },
    { name: 'Narration', width: '35%' },
    { name: 'Credit', width: '15%' },
    { name: 'Debit', width: '15%' },
    { name: 'Balance', width: '15%' },
    { name: 'Category', width: '20%' },
  ];
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
