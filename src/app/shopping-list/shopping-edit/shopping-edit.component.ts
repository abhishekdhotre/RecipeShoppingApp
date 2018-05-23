import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputElement: ElementRef;
  @ViewChild('amountInput') amountInputElement: ElementRef;
  @Output() ingredientAddedEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onSubmitClick() {
    this.ingredientAddedEvent
      .emit({ name: this.nameInputElement.nativeElement.value,
        amount: this.amountInputElement.nativeElement.value});
  }
}
