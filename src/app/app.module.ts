import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BuildComponent } from './build/build.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { SignInComponent } from './authorize/sign-in/sign-in.component';
import { SignUpComponent } from './authorize/sign-up/sign-up.component';
import { MailComponent } from './contact/mail/mail.component';
import { CallComponent } from './contact/call/call.component';
import { LiveComponent } from './contact/live/live.component';
import { FeedbackComponent } from './contact/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    BuildComponent,
    AboutComponent,
    ContactComponent,
    AuthorizeComponent,
    SignInComponent,
    SignUpComponent,
    MailComponent,
    CallComponent,
    LiveComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
