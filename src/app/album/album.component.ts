import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../api.service.service';
import { IAlbum } from '../interfaces';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  
  search = '';
  allSelectedAlbums$: Observable<Array<IAlbum>> = this.apiService.albumsListChanged;
  albumSelected: IAlbum | null = null;

  constructor(private apiService: ApiService) {}
}
