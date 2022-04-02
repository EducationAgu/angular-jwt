import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layout/site-layout/site-layout.component';
import { TokenInterceptor } from './shared/classes/token.interceptor';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    OverviewPageComponent,
    PostPageComponent,
    LoaderComponent,
    ContactsPageComponent,
    FavoritesPageComponent,
    PostModalComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
