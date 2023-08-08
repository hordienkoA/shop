import { Component, Input } from '@angular/core';
import { Category } from '../../models/category.enum';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  @Input() name?: string;
  @Input() description?: string;
  @Input() price?: number;
  @Input() category?: Category;
  @Input() isAvailable?: boolean;
}
