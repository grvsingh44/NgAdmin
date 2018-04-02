///<reference path="../../../node_modules/@types/jquery/index.d.ts"/>
import { Component, ViewChild, ElementRef, OnInit, ChangeDetectionStrategy, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Chat } from './chat.model';

declare var $: any;
let sidebarTimer;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

  chat: Chat[];
  @ViewChild('messageInput') messageInputRef: ElementRef;

  messages = [];
  item = 0;
  constructor(private elRef: ElementRef, private chatService: ChatService) {
    this.chat = chatService.chat1;
  }

  ngOnInit() {
    $.getScript('./assets/js/chat.js');
  }

  // send button function calls
  onAddMessage() {
    if (this.messageInputRef.nativeElement.value !== '') {
      this.messages.push(this.messageInputRef.nativeElement.value);
    }
    this.messageInputRef.nativeElement.value = '';
    this.messageInputRef.nativeElement.focus();
  }

  // chat user list click event function
  SetActive(event, chatId: string) {
    const hElement: HTMLElement = this.elRef.nativeElement;
    // now you can simply get your elements with their class name
    const allAnchors = hElement.getElementsByClassName('list-group-item');
    // do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'list-group-item');
    });
    // set active class for selected item
    event.currentTarget.setAttribute('class', 'list-group-item active');

    this.messages = [];

    if (chatId === 'chat1') {
      this.chat = this.chatService.chat1;
    } else if (chatId === 'chat2') {
      this.chat = this.chatService.chat2;
    } else if (chatId === 'chat3') {
      this.chat = this.chatService.chat3;
    } else if (chatId === 'chat4') {
      this.chat = this.chatService.chat4;
    } else if (chatId === 'chat5') {
      this.chat = this.chatService.chat5;
    } else if (chatId === 'chat6') {
      this.chat = this.chatService.chat6;
    } else if (chatId === 'chat7') {
      this.chat = this.chatService.chat7;
    }

  }


  // // moviing tab added
  //
  // ngAfterViewInit() {
  //   // init Moving Tab after the view is initialisez
  //   setTimeout(() => {
  //     if (mda.movingTabInitialised === false) {
  //       mda.initMovingTab();
  //       mda.movingTabInitialised = true;
  //     }
  //   }, 10);
  // }
}

// const mda: any = {
//   movingTab: '<div class="chat-moving-tab"/>',
//   isChild: false,
//   sidebarMenuActive: '',
//   movingTabInitialised: false,
//   distance: 0,
//
//   setMovingTabPosition: function($currentActive) {
//     $currentActive = mda.sidebarMenuActive;
//     mda.distance = $currentActive.parent().position().top - 10;
//     mda.moveTab();
//   },
//   initMovingTab: function () {
//     mda.movingTab = $(mda.movingTab);
//     mda.sidebarMenuActive = $('.chat-application .chat-sidebar-content > a.list-group-item > .media');
//
//     if (mda.sidebarMenuActive.length !== 0) {
//       mda.setMovingTabPosition(mda.sidebarMenuActive);
//     } else {
//       // mda.sidebarMenuActive = $('.sidebar .nav-container .nav > li.active .collapse li.active > a');
//       // mda.isChild = true;
//       // this.setParentCollapse();
//     }
//
//     mda.sidebarMenuActive.addClass('visible');
//     const button_text = mda.sidebarMenuActive.html();
//     mda.movingTab.html(button_text);
//
//     $('.chat-application .chat-sidebar-content .list-group').append(mda.movingTab);
//
//     $('.chat-application .chat-sidebar-content .list-group > a.active').click(function () {
//       mda.sidebarMenuActive = $(this);
//       const parent = $(this).parent();
//
//       // we call the animation of the moving tab
//       clearTimeout(sidebarTimer);
//       let $currentActive = mda.sidebarMenuActive;
//       mda.sidebarMenuActive.removeClass('visible');
//       const $movingTab = mda.movingTab;
//       $movingTab.addClass('moving');
//       $movingTab.css('padding-left', $currentActive.css('padding-left'));
//       const button_text = $currentActive.html();
//       const $currentActive = mda.sidebarMenuActive;
//       mda.distance = $currentActive.parent().position().top - 10;
//
//       mda.moveTab();
//
//       sidebarTimer = setTimeout(function() {
//         $movingTab.removeClass('moving');
//         $currentActive.parent().addClass('visible');
//       }, 650);
//       setTimeout(function() {
//         $movingTab.html(button_text);
//       }, 10);
//
//     });
//
//   },
//   animateMovingTab: function() {
//     clearTimeout(sidebarTimer);
//     const $currentActive = mda.sidebarMenuActive;
//     console.log('ActiveMenu', $currentActive);
//     $('.chat-application .chat-sidebar-content > a.list-group-item').removeClass('visible');
//     const $movingTab = mda.movingTab;
//     $movingTab.addClass('moving');
//
//     $movingTab.css('padding-left', $currentActive.css('padding-left'));
//     const button_text = $currentActive.html();
//
//     mda.setMovingTabPosition($currentActive);
//
//     sidebarTimer = setTimeout(function() {
//       $movingTab.removeClass('moving');
//       $currentActive.parent().addClass('visible');
//     }, 650);
//
//     setTimeout(function() {
//       $movingTab.html(button_text);
//     }, 10);
//   },
//   moveTab: function() {
//     mda.movingTab.css({
//       'transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
//       '-webkit-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
//       '-moz-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
//       '-ms-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
//       '-o-transform': 'translate3d(0px,' + mda.distance + 'px, 0)'
//     });
//   }
// };
