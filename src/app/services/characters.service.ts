import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters.model';
import { Character } from '../models/single-character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(
    page = 1,
    name: string,
    gender: string
  ): Observable<Characters> {
    return this.http.get<Characters>(
      `${this.baseUrl}/?page=${page}&name=${name}&gender=${gender}`
    );
  }

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/${id}`);
  }
}
