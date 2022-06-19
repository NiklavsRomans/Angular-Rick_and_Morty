import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-character-card',
  templateUrl: './single-character-card.component.html',
  styleUrls: ['./single-character-card.component.scss'],
})
export class SingleCharacterCardComponent {
  @Input() image = '';
  @Input() name = '';
  @Input() status = '';
  @Input() species = '';
  @Input() origin = '';
  @Input() created = '';
}
