import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';
import {Subscription} from 'rxjs/Subscription';

declare var __moduleName: string;

@Component({
  moduleId: __moduleName,
  //moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent{
  subscription:Subscription;
  user:any
  constructor(private _authenticationService: AuthenticationService, private router: Router) {
  } 
  ngOnInit() {
    this.subscription = this._authenticationService.OnUserInOut$
       .subscribe(item => this.user = item)
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
  
}
