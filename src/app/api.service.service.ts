import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { combineAll, concatMap, map, mergeMap } from 'rxjs/operators';
import { IAlbum, IUser } from './interfaces';

@Injectable()
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  albumsListChanged = new BehaviorSubject<IAlbum[]>([]);

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${this.baseUrl}/users`);
  }

  getAlbumsByUser(userId: number): Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]>(`${this.baseUrl}/albums?userId=${userId}`);
  }

  getAlbums(): Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]>(`${this.baseUrl}/albums`);
  }

  getData() {
    this.getUsers().pipe(
      mergeMap(user => {
        return this.getAlbums();
      })
    );
  }
}
