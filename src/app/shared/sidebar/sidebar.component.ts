import {Component, OnInit, ElementRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ROUTES} from './sidebar-routes.config';


declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public sidebar_img_container: any;

  constructor(private router: Router,
              private route: ActivatedRoute, private element: ElementRef) {
  }

  ngOnInit() {
    $.getScript('./assets/js/app-sidebar.js');
    this.menuItems = ROUTES.filter(menuItem => menuItem);

    // const sidebar: HTMLElement = this.element.nativeElement;
    // this.sidebar_img_container = sidebar.getElementsByClassName('sidebar-background')[0];
    // this.sidebar_img_container.setElementStyle('sidebar-background', 'background-color', 'green');
  }

}
