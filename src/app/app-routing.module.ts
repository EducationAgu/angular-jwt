import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './shared/layout/site-layout/site-layout.component'
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { AuthGuard } from './shared/classes/auth.guard';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
        {path: '', redirectTo:'/login', pathMatch:'full'},
        {path: 'login', component: LoginPageComponent},
        {path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard] ,children: [
      {path: 'overview', component: OverviewPageComponent},
      {path: 'post', component: PostPageComponent},
      {path: 'favorites', component: FavoritesPageComponent},
      {path: 'contacts', component: ContactsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
