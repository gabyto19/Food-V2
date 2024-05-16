import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  @Output() sendAuthorizeMethod = new EventEmitter<void>();



  authorizeBind(){
    this.sendAuthorizeMethod.emit();
  }
}
