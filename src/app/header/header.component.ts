import {Component, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class  HeaderComponent {

  @Output() navBarClickEvent = new EventEmitter<{navHeader: string}>();

  onHeaderClick(title: string) {
    this.navBarClickEvent.emit({navHeader: title});
  }
}
