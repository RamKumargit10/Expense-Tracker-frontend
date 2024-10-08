import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}
  public expense_list = {
    Group_expenses: [
      {
        creation_time: '2024-06-26T15:27:57.668401Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '300.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '150.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '150.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-06-25T18:01:36.617848Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '61.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '30.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '30.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-06-24T14:39:36.461056Z',
        creator: 'RAM KUMAR',
        group_name: 'dinner ',
        total_amount: '390.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '97.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '146.25',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '146.25',
            state: 'PAID_RECEIVED',
            payer: 'Pervez Musharraf',
          },
        ],
      },
      {
        creation_time: '2024-06-24T05:12:00.987645Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '315.00',
        state: 'COMPLETED',
        title: 'mess + groceries',
        items: [
          {
            amount: '157.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '157.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-06-24T04:58:18.880134Z',
        creator: 'Girish Sv',
        group_name: 'Cricket Turf',
        total_amount: '3,060.00',
        state: 'ONGOING',
        title: '',
        items: [
          {
            amount: '306.00',
            state: 'UNPAID',
            payer: 'Murali Rajendran',
          },
          {
            amount: '306.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '306.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          { amount: '306.00', state: 'UNPAID', payer: 'vignesh k' },
          {
            amount: '306.00',
            state: 'PAID_RECEIVED',
            payer: 'Girish Sv',
          },
          {
            amount: '306.00',
            state: 'PAID_RECEIVED',
            payer: 'Nikhil varghese',
          },
          {
            amount: '306.00',
            state: 'PAID_RECEIVED',
            payer: 'Vinson Xavier',
          },
          {
            amount: '306.00',
            state: 'PAID_RECEIVED',
            payer: 'Pervez Musharraf',
          },
          {
            amount: '306.00',
            state: 'PAID_RECEIVED',
            payer: 'Sooraj D',
          },
          {
            amount: '306.00',
            state: 'UNPAID',
            payer: 'Mohanram P.B.',
          },
        ],
      },
      {
        creation_time: '2024-06-23T14:30:37.052416Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '30.00',
        state: 'COMPLETED',
        title: 'batter',
        items: [
          {
            amount: '15.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '15.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-06-23T09:10:53.904645Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '534.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '267.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '267.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-06-22T05:29:03.093104Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '633.00',
        state: 'COMPLETED',
        title: 'petrol + groceries',
        items: [
          {
            amount: '316.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '316.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-06-21T17:43:03.138986Z',
        creator: 'Sree Pavan',
        group_name: 'burger King',
        total_amount: '381.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '127.00',
            state: 'PAID_RECEIVED',
            payer: 'Pervez Musharraf',
          },
          {
            amount: '127.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '127.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-06-19T15:29:23.044883Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '94.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '47.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '47.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-06-19T14:40:16.387889Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '340.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '170.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '170.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-06-18T13:46:05.915755Z',
        creator: 'vignesh k',
        group_name: 'Group expense',
        total_amount: '518.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '103.60',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '103.60',
            state: 'PAID_RECEIVED',
            payer: 'Girish Sv',
          },
          {
            amount: '103.60',
            state: 'PAID_RECEIVED',
            payer: 'vignesh k',
          },
          {
            amount: '103.60',
            state: 'PAID_RECEIVED',
            payer: 'Mugilan E.S. (The Shadow Warrior)',
          },
          {
            amount: '103.60',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-06-13T09:27:32.807411Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '52.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '26.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '26.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-06-12T03:07:11.763149Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '232.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '116.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '116.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-06-10T13:38:07.183608Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '160.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '80.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '80.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-06-10T08:35:36.271296Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '557.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '278.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '278.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-06-10T03:17:36.579859Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '140.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '70.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '70.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-06-08T17:30:33.615827Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '178.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '89.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '89.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-06-08T06:37:43.831168Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '1,668.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '834.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '834.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-06-06T15:19:23.066975Z',
        creator: 'Pervez Musharraf',
        group_name: 'Cricket Turf',
        total_amount: '1,352.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '135.20',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '135.20',
            state: 'PAID_RECEIVED',
            payer: 'Vinson Xavier',
          },
          {
            amount: '135.20',
            state: 'PAID_RECEIVED',
            payer: 'Girish Sv',
          },
          {
            amount: '135.20',
            state: 'PAID_RECEIVED',
            payer: 'Sooraj D',
          },
          {
            amount: '135.20',
            state: 'PAID_RECEIVED',
            payer: 'Murali Rajendran',
          },
          {
            amount: '135.20',
            state: 'PAID_RECEIVED',
            payer: 'Roshan Nihaal Jahangeer',
          },
          {
            amount: '135.20',
            state: 'PAID_RECEIVED',
            payer: 'Mugilan E.S. (The Shadow Warrior)',
          },
          {
            amount: '135.20',
            state: 'MARK_AS_PAID',
            payer: 'Sree Pavan',
          },
          {
            amount: '135.20',
            state: 'PAID_RECEIVED',
            payer: 'Pervez Musharraf',
          },
          {
            amount: '135.20',
            state: 'PAID_RECEIVED',
            payer: 'Nikhil varghese',
          },
        ],
      },
      {
        creation_time: '2024-06-05T04:54:32.036004Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '222.00',
        state: 'COMPLETED',
        title: 'toor dal',
        items: [
          {
            amount: '111.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '111.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-06-05T04:53:29.639776Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '148.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '74.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '74.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-06-04T13:25:45.348263Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '500.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '250.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '250.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-06-04T13:25:22.639679Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '250.00',
        state: 'CLOSED',
        title: '',
        items: [
          { amount: '125.00', state: 'UNPAID', payer: 'Sree Pavan' },
          {
            amount: '125.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-06-03T03:13:36.940875Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '390.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '195.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '195.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-06-02T17:33:33.757939Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '240.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '120.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '120.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-06-02T17:32:45.290084Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '280.00',
        state: 'CLOSED',
        title: 'veggies + curd + chips + drink',
        items: [
          {
            amount: '140.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          { amount: '140.00', state: 'UNPAID', payer: 'RAM KUMAR' },
        ],
      },
      {
        creation_time: '2024-06-01T03:30:21.640562Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '415.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '207.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '207.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-05-30T18:07:13.900557Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '120.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '60.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '60.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-05-29T13:49:24.550508Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '205.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '102.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '102.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-05-29T13:35:40.589704Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '212.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '106.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '106.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-05-29T10:17:06.279699Z',
        creator: 'vignesh k',
        group_name: 'Group expense',
        total_amount: '230.00',
        state: 'ONGOING',
        title: '',
        items: [
          {
            amount: '73.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '81.00',
            state: 'PAID_RECEIVED',
            payer: 'Girish Sv',
          },
          {
            amount: '8.00',
            state: 'UNPAID',
            payer: 'Pervez Musharraf',
          },
          {
            amount: '68.00',
            state: 'PAID_RECEIVED',
            payer: 'vignesh k',
          },
        ],
      },
      {
        creation_time: '2024-05-27T17:08:47.231286Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '108.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '54.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '54.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-05-26T16:46:19.257633Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '40.00',
        state: 'COMPLETED',
        title: 'batter',
        items: [
          {
            amount: '20.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '20.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-05-26T14:07:16.973685Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '1,073.00',
        state: 'COMPLETED',
        title: 'milk',
        items: [
          {
            amount: '536.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '536.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-05-25T15:26:54.211803Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '90.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '45.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '45.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-05-23T14:08:54.389719Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '500.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '250.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '250.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-05-23T14:08:29.853637Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '50.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '25.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '25.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-05-22T16:38:04.872796Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '250.00',
        state: 'CLOSED',
        title: 'petrol',
        items: [
          { amount: '125.00', state: 'UNPAID', payer: 'RAM KUMAR' },
          {
            amount: '125.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-05-22T16:33:33.222555Z',
        creator: 'RAM KUMAR',
        group_name: 'Burger King ',
        total_amount: '1,725.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '345.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '345.00',
            state: 'PAID_RECEIVED',
            payer: 'Girish Sv',
          },
          {
            amount: '345.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '345.00',
            state: 'PAID_RECEIVED',
            payer: 'vignesh k',
          },
          {
            amount: '345.00',
            state: 'PAID_RECEIVED',
            payer: 'Pervez Musharraf',
          },
        ],
      },
      {
        creation_time: '2024-05-16T03:47:58.891183Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '525.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '262.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '262.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-05-10T14:41:07.538920Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '152.00',
        state: 'COMPLETED',
        title: 'petrol + morning groceries',
        items: [
          {
            amount: '76.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '76.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-05-04T14:51:52.084067Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '418.00',
        state: 'COMPLETED',
        title: 'gingelly oil',
        items: [
          {
            amount: '209.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '209.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-05-02T14:04:48.242247Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '522.00',
        state: 'COMPLETED',
        title: 'fridge',
        items: [
          {
            amount: '261.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '261.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-05-01T07:12:42.838600Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '263.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '131.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '131.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-04-29T14:10:28.954002Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '63.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '31.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '31.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-04-28T05:37:36.972436Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '344.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '172.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '172.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-04-27T08:56:21.932143Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '449.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '224.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '224.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-04-25T14:02:07.253351Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '206.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '103.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '103.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-04-20T08:42:05.979532Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '517.00',
        state: 'COMPLETED',
        title: 'oil ground nuts and groceries',
        items: [
          {
            amount: '258.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '258.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-04-16T14:16:42.085364Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '50.00',
        state: 'COMPLETED',
        title: 'batter',
        items: [
          {
            amount: '25.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '25.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-04-14T11:18:14.730586Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '90.00',
        state: 'COMPLETED',
        title: 'ice cream',
        items: [
          {
            amount: '45.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '45.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-04-14T05:42:19.170787Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '367.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '183.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '183.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-04-13T04:00:46.434378Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '854.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '427.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '427.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-04-13T03:58:56.514565Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '225.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '112.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '112.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-04-11T14:13:43.155790Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '36.00',
        state: 'COMPLETED',
        title: 'bananas',
        items: [
          {
            amount: '18.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '18.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-04-11T13:52:12.282638Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '182.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '91.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '91.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-04-11T13:51:09.796545Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '187.00',
        state: 'CLOSED',
        title: '',
        items: [
          {
            amount: '93.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          { amount: '93.50', state: 'UNPAID', payer: 'Sree Pavan' },
        ],
      },
      {
        creation_time: '2024-04-07T04:48:02.425558Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '560.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '280.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '280.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-04-07T04:43:02.246040Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '641.00',
        state: 'COMPLETED',
        title: 'gheesurfexcelpepper cu coriand',
        items: [
          {
            amount: '320.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '320.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-03-08T20:08:35.689359Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '125.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '62.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '62.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-03-07T13:03:51.028257Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '70.00',
        state: 'COMPLETED',
        title: 'breakfast',
        items: [
          {
            amount: '35.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '35.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-29T13:54:20.207689Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '126.00',
        state: 'COMPLETED',
        title: 'milk bread jam plantine',
        items: [
          {
            amount: '63.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '63.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-29T07:49:20.879613Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '50.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '25.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '25.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-28T07:44:17.163686Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '50.00',
        state: 'COMPLETED',
        title: 'curd',
        items: [
          {
            amount: '25.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '25.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-28T06:22:06.716853Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '48.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '24.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '24.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-27T04:16:43.745554Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '98.00',
        state: 'COMPLETED',
        title: 'groceries',
        items: [
          {
            amount: '49.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '49.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-26T08:52:19.909049Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '50.00',
        state: 'COMPLETED',
        title: 'curd',
        items: [
          {
            amount: '25.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '25.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-24T16:39:41.319147Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '200.00',
        state: 'ONGOING',
        title: 'petrol',
        items: [
          {
            amount: '100.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          { amount: '100.00', state: 'UNPAID', payer: 'Sree Pavan' },
        ],
      },
      {
        creation_time: '2024-02-22T14:20:04.688056Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '3,887.00',
        state: 'COMPLETED',
        title: 'act',
        items: [
          {
            amount: '1,943.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '1,943.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-22T14:17:55.630776Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '96.00',
        state: 'COMPLETED',
        title: 'thurs ',
        items: [
          {
            amount: '48.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '48.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-22T14:15:49.759315Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '1,657.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '828.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '828.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-21T07:08:57.515432Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '90.00',
        state: 'COMPLETED',
        title: 'tue',
        items: [
          {
            amount: '45.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '45.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-20T05:30:20.355794Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '492.00',
        state: 'COMPLETED',
        title: 'oil',
        items: [
          {
            amount: '246.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '246.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-19T03:23:43.340272Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '433.00',
        state: 'COMPLETED',
        title: 'rice ',
        items: [
          {
            amount: '216.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '216.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-18T16:39:11.674120Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '200.00',
        state: 'COMPLETED',
        title: 'sun',
        items: [
          {
            amount: '100.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '100.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-17T23:28:20.572372Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '112.00',
        state: 'COMPLETED',
        title: 'sat',
        items: [
          {
            amount: '56.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '56.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-17T07:51:50.424487Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '276.00',
        state: 'COMPLETED',
        title: 'fri',
        items: [
          {
            amount: '138.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '138.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-15T16:54:43.195944Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '138.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '69.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '69.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-14T15:52:15.083153Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '81.00',
        state: 'COMPLETED',
        title: 'wed',
        items: [
          {
            amount: '40.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '40.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-13T17:15:52.723157Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '204.00',
        state: 'COMPLETED',
        title: 'tue',
        items: [
          {
            amount: '102.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '102.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-12T13:31:44.828011Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '332.00',
        state: 'COMPLETED',
        title: 'sun mon',
        items: [
          {
            amount: '166.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '166.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-11T09:39:40.519092Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '294.00',
        state: 'COMPLETED',
        title: 'oil and a1 chips ',
        items: [
          {
            amount: '147.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '147.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-10T18:36:16.573687Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '30.00',
        state: 'COMPLETED',
        title: 'batter',
        items: [
          {
            amount: '15.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '15.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-10T09:30:43.132351Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '240.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '120.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '120.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-10T08:48:37.077742Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '20.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '10.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '10.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-10T08:47:43.345971Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '204.00',
        state: 'COMPLETED',
        title: 'Thursday Friday groceries ',
        items: [
          {
            amount: '102.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '102.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-07T03:35:37.791344Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '301.00',
        state: 'COMPLETED',
        title: 'groceries and cavins',
        items: [
          {
            amount: '150.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '150.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-05T17:10:00.428217Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '75.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '37.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '37.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-04T12:11:37.334402Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '425.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '212.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '212.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-04T09:13:32.079554Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '580.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '290.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '290.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-02T07:12:20.015915Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '1,076.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '269.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '807.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-02T01:24:16.842376Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '2,000.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '1,500.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '500.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-02-01T15:41:56.589685Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '20.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '10.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '10.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-02-01T14:56:47.016146Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '83.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '41.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '41.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-01-31T08:44:45.410073Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '265.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '132.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '132.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-01-25T08:35:28.594276Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '324.00',
        state: 'COMPLETED',
        title: 'groceries',
        items: [
          {
            amount: '162.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '162.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-01-23T15:26:02.908758Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '371.00',
        state: 'COMPLETED',
        title: 'groceries',
        items: [
          {
            amount: '185.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '185.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-01-21T06:40:37.457291Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '934.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '467.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '467.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-01-20T17:49:00.462092Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '559.00',
        state: 'COMPLETED',
        title: 'petrol+ groceries',
        items: [
          {
            amount: '279.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '279.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-01-09T17:43:47.281631Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '412.00',
        state: 'COMPLETED',
        title: 'groceries and pb bill',
        items: [
          {
            amount: '206.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '206.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-01-08T04:54:45.221932Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '571.00',
        state: 'COMPLETED',
        title: 'oil and vermicilli',
        items: [
          {
            amount: '285.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '285.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-01-07T10:58:19.577403Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '240.00',
        state: 'COMPLETED',
        title: 'pb snacks',
        items: [
          {
            amount: '120.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '120.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2024-01-05T05:59:08.286391Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '663.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '331.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '331.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2024-01-03T15:20:07.817142Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '1,176.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '588.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '588.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-12-22T09:06:54.978084Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '72.00',
        state: 'COMPLETED',
        title: 'morning groceries',
        items: [
          {
            amount: '36.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '36.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-22T09:06:21.010757Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '464.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '232.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '232.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-12-21T16:37:43.415289Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '300.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '150.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '150.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-12-21T16:37:17.256016Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '280.00',
        state: 'CLOSED',
        title: 'tiffin and badam milk',
        items: [
          { amount: '140.00', state: 'UNPAID', payer: 'RAM KUMAR' },
          {
            amount: '140.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-21T14:08:38.011481Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '405.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '202.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '202.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-20T14:03:18.114883Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '186.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '93.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '93.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-12-20T13:47:33.666734Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '500.00',
        state: 'COMPLETED',
        title: 'petrol',
        items: [
          {
            amount: '250.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '250.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-20T05:59:33.392324Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '258.00',
        state: 'COMPLETED',
        title: 'today + yesterday ',
        items: [
          {
            amount: '129.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '129.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-19T04:29:59.741196Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '210.00',
        state: 'COMPLETED',
        title: 'mart',
        items: [
          {
            amount: '105.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '105.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-18T17:01:32.329808Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '244.00',
        state: 'COMPLETED',
        title: 'today groceries + chilli powde',
        items: [
          {
            amount: '122.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '122.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-17T16:47:10.128380Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '60.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '30.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '30.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-12-17T08:55:12.334488Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '583.00',
        state: 'COMPLETED',
        title: 'sambar + oil',
        items: [
          {
            amount: '291.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '291.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-12-15T17:28:09.686511Z',
        creator: 'Nikhil varghese',
        group_name: 'dinner',
        total_amount: '898.00',
        state: 'COMPLETED',
        title: 'dinner',
        items: [
          {
            amount: '302.80',
            state: 'PAID_RECEIVED',
            payer: 'Nikhil varghese',
          },
          {
            amount: '232.60',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '257.00',
            state: 'MARK_AS_PAID',
            payer: 'Vinson Xavier',
          },
          {
            amount: '105.60',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-15T02:56:10.824501Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '432.00',
        state: 'COMPLETED',
        title: 'rice ',
        items: [
          {
            amount: '216.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '216.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-14T16:05:48.708077Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '495.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '247.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '247.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-11T13:48:26.672781Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '100.00',
        state: 'CLOSED',
        title: '',
        items: [
          {
            amount: '50.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          { amount: '50.00', state: 'UNPAID', payer: 'Sree Pavan' },
        ],
      },
      {
        creation_time: '2023-12-11T06:20:48.498027Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '1,072.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '536.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '536.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-09T03:32:13.742216Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '500.00',
        state: 'ONGOING',
        title: 'petrol',
        items: [
          {
            amount: '250.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          { amount: '250.00', state: 'UNPAID', payer: 'Sree Pavan' },
        ],
      },
      {
        creation_time: '2023-12-08T09:36:57.666501Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '1,004.00',
        state: 'ONGOING',
        title: 'eb',
        items: [
          { amount: '502.00', state: 'UNPAID', payer: 'Sree Pavan' },
          {
            amount: '502.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-12-08T09:34:59.283525Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '424.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '212.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '212.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-06T07:18:16.929991Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '221.00',
        state: 'COMPLETED',
        title: 'instamart',
        items: [
          {
            amount: '110.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '110.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-12-06T03:32:52.357647Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '346.00',
        state: 'COMPLETED',
        title: 'groceries from sunday',
        items: [
          {
            amount: '173.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '173.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-06T03:30:34.583068Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '846.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '634.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '211.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-03T17:04:04.439556Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '315.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '157.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '157.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-02T18:56:48.619053Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '73.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '36.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '36.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-12-02T14:20:50.069617Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '100.00',
        state: 'COMPLETED',
        title: 'fresh today ',
        items: [
          {
            amount: '50.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '50.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-02T08:59:25.732827Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '137.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '68.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '68.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-12-02T08:56:54.606517Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '700.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '350.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '350.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-11-30T14:55:54.231931Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '484.00',
        state: 'COMPLETED',
        title: 'perfume',
        items: [
          {
            amount: '242.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '242.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-11-30T14:55:23.180144Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '2,217.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '1,108.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '1,108.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-11-30T14:54:49.305006Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '2,217.00',
        state: 'CLOSED',
        title: '',
        items: [
          {
            amount: '1,108.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          { amount: '1,108.50', state: 'UNPAID', payer: 'Sree Pavan' },
        ],
      },
      {
        creation_time: '2023-11-30T05:09:53.378809Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '122.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '61.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '61.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-11-26T18:09:09.003142Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '233.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '116.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '116.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-11-26T18:08:47.667430Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '20.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '10.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '10.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-11-26T18:08:14.919640Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '256.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '128.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '128.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-11-24T11:29:57.529476Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '228.00',
        state: 'COMPLETED',
        title: 'hukum',
        items: [
          {
            amount: '114.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '114.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-11-22T05:15:18.329773Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '604.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '302.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '302.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-11-20T14:52:29.136830Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '378.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '189.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '189.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-11-07T07:36:32.144387Z',
        creator: 'RAM KUMAR',
        group_name: 'bk',
        total_amount: '440.00',
        state: 'COMPLETED',
        title: 'dinner',
        items: [
          {
            amount: '146.67',
            state: 'PAID_RECEIVED',
            payer: 'Pervez Musharraf',
          },
          {
            amount: '146.67',
            state: 'PAID_RECEIVED',
            payer: 'Vinson Xavier',
          },
          {
            amount: '146.66',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-11-04T04:23:20.554296Z',
        creator: 'RAM KUMAR',
        group_name: 'bk',
        total_amount: '826.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '275.34',
            state: 'PAID_RECEIVED',
            payer: 'Vinson Xavier',
          },
          {
            amount: '275.33',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '275.33',
            state: 'PAID_RECEIVED',
            payer: 'Pervez Musharraf',
          },
        ],
      },
      {
        creation_time: '2023-11-03T15:58:40.478779Z',
        creator: 'RAM KUMAR',
        group_name: 'Friday Dinner',
        total_amount: '824.00',
        state: 'ONGOING',
        title: '',
        items: [
          {
            amount: '274.67',
            state: 'UNPAID',
            payer: 'Vinson Xavier',
          },
          {
            amount: '274.66',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '274.67',
            state: 'UNPAID',
            payer: 'Pervez Musharraf',
          },
        ],
      },
      {
        creation_time: '2023-10-31T05:40:10.424762Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '64.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '32.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '32.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-10-30T17:10:27.382630Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '82.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '41.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '41.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-10-30T06:40:57.981867Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '121.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '60.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '60.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-10-21T14:09:35.756506Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '461.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '230.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '230.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-10-21T09:55:15.556033Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '274.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '137.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '137.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-10-21T08:04:54.723273Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '143.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '71.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '71.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-10-15T11:58:10.459260Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '354.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '177.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '177.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-10-15T04:51:56.264724Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '215.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '107.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '107.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-10-14T14:57:39.673766Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '104.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '52.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '52.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-10-13T14:53:10.312485Z',
        creator: 'RAM KUMAR',
        group_name: 'Kannan Villa',
        total_amount: '130.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '65.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '65.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-10-07T18:33:28.659652Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '174.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '87.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '87.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-09-15T06:17:17.052088Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '213.00',
        state: 'COMPLETED',
        title: 'baaki hukum',
        items: [
          {
            amount: '106.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '106.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-09-13T05:54:28.844707Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '210.00',
        state: 'COMPLETED',
        title: 'curd milk and groceries hukum ',
        items: [
          {
            amount: '105.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '105.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-09-12T06:25:29.063999Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '339.00',
        state: 'COMPLETED',
        title: '2 days groceries batter cavins',
        items: [
          {
            amount: '169.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '169.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-09-10T16:50:35.802834Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '177.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '88.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '88.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-09-10T09:15:10.137233Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '611.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '305.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '305.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-09-09T06:20:37.478199Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '768.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '384.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '384.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-09-06T10:23:09.850487Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '180.00',
        state: 'ONGOING',
        title: 'ice cream ka hukum ',
        items: [
          { amount: '90.00', state: 'UNPAID', payer: 'RAM KUMAR' },
          {
            amount: '90.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-09-03T07:53:40.515028Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '500.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '250.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '250.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-08-26T10:01:41.772219Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '382.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '191.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '191.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-08-26T07:17:13.264278Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '180.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '90.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '90.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-08-25T08:14:56.770929Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '388.00',
        state: 'COMPLETED',
        title: 'oil and other groceries hukum.',
        items: [
          {
            amount: '194.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '194.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-08-24T05:56:08.717143Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '175.00',
        state: 'COMPLETED',
        title: 'hukum ',
        items: [
          {
            amount: '87.50',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '87.50',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-08-23T06:07:06.154225Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '262.00',
        state: 'COMPLETED',
        title: 'morning groceries ..hukum',
        items: [
          {
            amount: '131.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '131.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
        ],
      },
      {
        creation_time: '2023-08-22T15:36:44.672309Z',
        creator: 'Sree Pavan',
        group_name: 'Kannan Villa',
        total_amount: '206.00',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '103.00',
            state: 'PAID_RECEIVED',
            payer: 'Sree Pavan',
          },
          {
            amount: '103.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-06-17T15:43:18.995053Z',
        creator: 'Saravanan Ganesan',
        group_name: 'Group expense',
        total_amount: '594.00',
        state: 'COMPLETED',
        title: 'kfc',
        items: [
          {
            amount: '297.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '297.00',
            state: 'PAID_RECEIVED',
            payer: 'Saravanan Ganesan',
          },
        ],
      },
      {
        creation_time: '2023-06-17T15:42:57.174471Z',
        creator: 'Saravanan Ganesan',
        group_name: 'Group expense',
        total_amount: '520.00',
        state: 'COMPLETED',
        title: 'Cinema snacks',
        items: [
          {
            amount: '260.00',
            state: 'PAID_RECEIVED',
            payer: 'Saravanan Ganesan',
          },
          {
            amount: '260.00',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
        ],
      },
      {
        creation_time: '2023-06-17T15:41:49.529493Z',
        creator: 'Saravanan Ganesan',
        group_name: 'Group expense',
        total_amount: '452.80',
        state: 'COMPLETED',
        title: '',
        items: [
          {
            amount: '226.40',
            state: 'PAID_RECEIVED',
            payer: 'RAM KUMAR',
          },
          {
            amount: '226.40',
            state: 'PAID_RECEIVED',
            payer: 'Saravanan Ganesan',
          },
        ],
      },
    ],
  };
}
