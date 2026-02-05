import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 // Parent → Child
  @Input() product: any;

  // Child → Parent (optional extension)
  @Output() back = new EventEmitter<void>();

  goBack() {
    this.back.emit();
  }
}
