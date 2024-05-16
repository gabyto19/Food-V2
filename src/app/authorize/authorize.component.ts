import { Component } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrl: './authorize.component.css'
})
export class AuthorizeComponent {
  authorizeToggler: boolean = false;

  toggleAuthorize(){
    this.authorizeToggler = !this.authorizeToggler;
  }
}
