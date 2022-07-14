import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userName='Victoria Katrina';
  active = 'Dashboard';
  title='The Que'
  menuItems=[{
    title:'Dashboard',
    icon:'assets/dashboard.svg',
    link:'',
  },{
    title:'Accounts',
    icon:'assets/accounts.svg',
    link:'',
  },{
    title:'Chat',
    icon:'assets/chats.svg',
    link:'',
  },{
    title:'Employees',
    icon:'assets/employees.svg',
    link:'',
  },{
    title:'Locations',
    icon:'assets/locations.svg',
    link:'',
  },{
    title:'Prices',
    icon:'assets/prices.svg',
    link:'',
  },{
    title:'Discounts',
    icon:'assets/discounts.svg',
    link:'',
  },{
    title:'Notifications',
    icon:'assets/notifications.svg',
    link:'',
  },{
    title:'Groups',
    icon:'assets/groups.svg',
    link:'',
  },{
    title:'Reports',
    icon:'assets/reports.svg',
    link:'',
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
