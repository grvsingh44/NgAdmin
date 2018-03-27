import {Component, ElementRef, OnInit} from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private toggleButton: any;
  private toggleLeftButton: any;
  private sidebarVisible: boolean;
  private sidebarLeftVisible: boolean;

  constructor(public location: Location, private element: ElementRef) { this.sidebarVisible = false; this.sidebarLeftVisible = false; }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[1];
    this.toggleLeftButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }

  sidebarToggleRight() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function(){
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  }

  sidebarLeftOpen() {
    const toggleLeftButton = this.toggleLeftButton;
    const sidebar = document.getElementsByClassName('app-sidebar')[0];
    setTimeout(function () {
      sidebar.classList.remove('hide-sidebar');
    });
    this.sidebarLeftVisible = true;
  }

  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
}
