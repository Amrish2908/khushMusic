import { Component } from '@angular/core';
import { sideBarMenubootom, sideBarMenutop } from 'src/app/constants/constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  sideBarMenutop=sideBarMenutop;
  sideBarBootom=sideBarMenubootom
}

