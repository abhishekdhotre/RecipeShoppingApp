import {Component, Output, EventEmitter } from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

@Component ({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class  HeaderComponent {

  @Output() navBarClickEvent = new EventEmitter<{navHeader: string}>();

  constructor(private dataStorageService: DataStorageService) { }

  /*// Used earlier while emitting the events instead of routing
  onHeaderClick(title: string) {
    this.navBarClickEvent.emit({navHeader: title});
  }*/

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
