import { Component, OnInit, ElementRef } from '@angular/core';

const fireRefreshEventOnWindow = function () {
  const evt = document.createEvent('HTMLEvents');
  evt.initEvent('resize', true, false);
  window.dispatchEvent(evt);
};

@Component({
  selector: 'app-full',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.querySelector('#sidebarToggle')
      .addEventListener('click', this.onClick.bind(this));
  }

  onClick(event) {
    // initialize window resizer event on sidebar toggle click event
    setTimeout(() => { fireRefreshEventOnWindow(); }, 300);
  }

}
