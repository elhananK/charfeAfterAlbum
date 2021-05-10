import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../api.service.service';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnDestroy {

  private readonly subs = new Subscription();
  allUsers: Array<IUser> = [];

  userName = new FormControl('')

  constructor(private apiService: ApiService) {
    this.subs.add(this.userName.valueChanges
        .pipe(switchMap(user => this.apiService.getAlbumsByUser(user.id)))
        .subscribe(allSelectedAlbums => this.apiService.albumsListChanged.next(allSelectedAlbums)));
    this.subs.add(this.apiService.getUsers()
      .subscribe(res => (this.allUsers = res)));
  }

  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
