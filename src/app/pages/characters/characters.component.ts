import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterResults } from 'src/app/models/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters?: CharacterResults[];
  charactersSubscription?: Subscription;
  pages?: number[];
  currentPage = 1;
  filterByNameValue?: any = '';
  filterByGenderValue?: any = '';

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters(this.currentPage);
  }

  getCharacters(page = 1): void {
    this.charactersService
      .getCharacters(page, this.filterByNameValue, this.filterByGenderValue)
      .subscribe((characterResponse) => {
        this.characters = characterResponse.results;
        this.fillInPageArray(characterResponse.info.pages);
        this.currentPage = page;
      });
  }

  fillInPageArray(total: number): void {
    this.pages = [] as number[];

    for (let counter: number = 1; counter <= total; counter++) {
      this.pages.push(counter);
    }
  }

  showPages() {
    let numShown = 5;
    numShown = Math.min(numShown, this.pages!.length);
    let first = this.currentPage - Math.floor(numShown / 2);
    first = Math.max(first, 1);
    first = Math.min(first, this.pages!.length - numShown + 1);
    return [...Array(numShown)].map((_k, i) => i + first);
  }
}
