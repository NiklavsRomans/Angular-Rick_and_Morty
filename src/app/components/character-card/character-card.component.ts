import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() name = '';
  @Input() gender = '';
  @Input() imgSrc = '';
  @Input() count = 0;
  @Input() origin = '';
  @Input() location = '';
}
