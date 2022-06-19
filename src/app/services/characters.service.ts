import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Characters } from '../models/characters.model';
import { Character } from '../models/single-character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  baseUrl = 'https://rickandmortyapi.com/api/character';
  loading = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  getCharacters(page = 1): Observable<Characters> {
    this.loading.next(true);
    return this.http.get<Characters>(`${this.baseUrl}?page=${page}`);
  }

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/${id}`);
  }

  getLoadingState(): Observable<boolean> {
    return this.loading.asObservable();
  }
}
