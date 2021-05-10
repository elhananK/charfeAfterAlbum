import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}



// Display all album titles
// Add a dropdown with all user names with ability to select one
// Filter albums according to the selected user
// Add an input to enable searching in selected user album names
// Filter albums according to the selected user and the search term
// Clicking an album name will display the first photo in the album
// Things we would love to see: use of rxjs, async pipes, clean code