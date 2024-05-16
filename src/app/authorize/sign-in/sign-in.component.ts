import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  @Output() sendAuthorizeMethod = new EventEmitter<void>();



  authorizeBind(){
    this.sendAuthorizeMethod.emit();
  }
}
