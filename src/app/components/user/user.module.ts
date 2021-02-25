import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'auth', useClass: AuthService },
    { provide: 'user', useClass: UserService },
    AuthGuardService
    ]
})
export class UserModule {
  constructor(@Optional() @SkipSelf() userModule: UserModule) {
    if (userModule) {
      throw new Error(
        'UserModule is already loaded. Import it in the AppModule only');
    }
  }
}
