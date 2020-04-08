import { Item } from './../../../data/item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @Input() item: Item

  constructor() {

  }

  ngOnInit(): void {
  }

}
