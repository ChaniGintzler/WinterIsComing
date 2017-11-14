
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ProfilesService } from '../profiles.service';
declare var __moduleName: string;
@Component({
  moduleId: __moduleName,
  selector: 'view',
  templateUrl: 'view.template.html',
  providers: [ProfilesService]
})

export class ViewComponent   {
    profile:any;
    currentUser:any;
    routingObserver: any;
	errorMessage: string;
    allowEdit: boolean = false;
    
    constructor(private _profileService:ProfilesService,
    	private _router: Router,
		private _route: ActivatedRoute,
		private _authenticationService: AuthenticationService
	){}
ngOnInit()
{
    console.log("view")
	this.currentUser = this._authenticationService.user
    this.routingObserver = this._route.params.subscribe(params => {
   // console.log(params)
        let profileId = params['profileId'];
        this._profileService
            .read(profileId)
            .subscribe(
            prof => {
                console.log(prof)
                this.profile = prof;
                //this.allowEdit = (this.currentUser && this.currentUser._id === this.profile.creator._id);              
            },
           // error => this._router.navigate(['/profiles'])
            );
    });
}

    
	save() {
		this._profileService.update(this.profile).subscribe(error =>  this.errorMessage = error);
	}

}
