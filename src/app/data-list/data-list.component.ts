import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
})
export class DataListComponent implements OnInit {
  @Input() data: any;
  @Input() showCount = false;
  @Output() calCount = new EventEmitter<Number>();

  constructor() {}

  ngOnInit(): void {
    this.calCount.emit(this.data.length);
  }
}
