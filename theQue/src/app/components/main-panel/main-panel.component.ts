import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {
  dropdownItems=['Tolchav','Walton','Location','All']
  constructor() { }

  ngOnInit(): void {
  }

}
