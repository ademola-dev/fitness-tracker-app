import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidanav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
 @Output() closeSidenav = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClose() {
    this.closeSidenav.emit()
  }
  
}
