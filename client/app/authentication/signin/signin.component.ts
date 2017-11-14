import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { EventEmitter,Output } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({

  selector: 'signin',
  templateUrl: 'app/authentication/signin/signin.template.html',
  styleUrls:['sign.style.css']
})
export class SigninComponent { 
	errorMessage: string;
	credentials: any = {};
	@Output()notify: EventEmitter<string> = new EventEmitter<string>();
	
	constructor (private _authenticationService: AuthenticationService, private _router: Router) {

	}

	signin() {
		this._authenticationService.signin(this.credentials).subscribe(result  => {this.notify.emit();this._router.navigate(['/']);}, //this.notify.emit();
																	   error =>  this.errorMessage = error );
	}
}