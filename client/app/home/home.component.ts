import {Component,ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
declare var __moduleName: string;

@Component({
	moduleId: __moduleName,
	selector: 'home',
	templateUrl: 'home.template.html',
	styleUrls:['home.style.css'],
	//template:'dfsdddddddddddd'
	//encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
	user: any;
	image: string = '../app/images/winter.jpg';
	constructor (private _authenticationService: AuthenticationService) {
		this.user = _authenticationService.user;
		console.log(this.user);
	}
	// onNotify():void {		
	// 	this.user = this._authenticationService.user;
	
	//   }
}