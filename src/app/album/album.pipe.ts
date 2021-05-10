import { Pipe, PipeTransform } from '@angular/core';
import { IAlbum } from '../interfaces';

@Pipe({
  name: 'filterAlbums'
})
export class AlbumPipe implements PipeTransform {
  
  transform(allSelectedAlbums: Array<IAlbum>, search: string) {
    if(!search) {
      return allSelectedAlbums;
    }
    return allSelectedAlbums.filter(album => album.title.includes(search));
  }

}

