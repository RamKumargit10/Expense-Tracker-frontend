import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChartModule } from 'primeng/chart';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [HomeComponent, TransactionsListComponent],
  imports: [
    CommonModule,
    ChartModule,
    DashboardRoutingModule,
    TableModule,
    InputTextModule,
    CalendarModule,
  ],
})
export class DashboardModule {}
