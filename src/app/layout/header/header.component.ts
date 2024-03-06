import { Component } from '@angular/core';
import { topBarNav } from '../../constants/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  topBarNavLink=topBarNav;


}
