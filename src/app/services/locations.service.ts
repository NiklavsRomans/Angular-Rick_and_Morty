import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Locations } from '../models/locations.model';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  baseUrl = 'https://rickandmortyapi.com/api';
  loading = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  getLocations(): Observable<Locations> {
    this.loading.next(true);
    return this.http.get<Locations>(`${this.baseUrl}/location`);
  }

  getLoadingState(): Observable<boolean> {
    return this.loading.asObservable();
  }
}
