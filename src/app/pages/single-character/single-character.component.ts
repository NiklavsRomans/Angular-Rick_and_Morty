import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/single-character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss'],
})
export class SingleCharacterComponent implements OnInit {
  character?: Character;

  constructor(
    private route: ActivatedRoute,
    private charachersService: CharactersService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    //@ts-ignore
    this.getCharacter(id);
  }

  getCharacter(id: string): void {
    this.charachersService.getCharacter(id).subscribe((character) => {
      this.character = character;
    });
  }
}
