import {Component, ComponentRef} from '@angular/core';
import {Router,NavigationExtras} from '@angular/router';
import {ProfilesService} from '../../profiles/profiles.service';
import {AuthenticationService} from '../../authentication/authentication.service';
import {DataService} from '../../services/data.service';

//import { WindowViewOutletComponent } from '../../core/window-view-outlet/window-view-outlet.component';
//import { WindowViewService } from '../../core/window-view.service';
//import { MyWindowComponent } from '../../chat/MyWindowComponent';



declare var __moduleName: string;
@Component({
   moduleId: __moduleName,
   //moduleId: module.id,
	selector: 'list',
	//template:'dddddddd'
	//templateUrl: 'app/profiles/list/profilesList.template.html',
	templateUrl: 'profilesList.template.html',
	styles:['profilesList.styles.css'],
	
	//providers: [WindowViewService]

})
export class ProfilesListComponent{
	profiles: any[];
	users:any[];
	constructor(private _profilesService: ProfilesService, private _router :Router,
		 private _dataService:DataService,
		private _authenticationService:AuthenticationService){//, private windowView: WindowViewService) {//

  }
 
	ngOnInit() {
		this._profilesService.list()
		.subscribe(pr  => {this.profiles = pr;console.log(pr);},
			error => console.log("Error: ", error)			
			);
		//	console.log(this.profiles);
		this._authenticationService.list().subscribe
		(users=>{this.users=users;
			console.log(users);},
			error=>console.log(error));
	}
	openChat (toUser)
	{
	console.log(toUser);
	let toUserObj=this.profiles.find(x => x._id == toUser);
	//};
	//console.log(navigationExtras);
	this._dataService.data=toUserObj;
	this._router.navigate(["/chat"]);//,{id:toUser}
	//this.windowView.pushWindow(MyWindowComponent);
	  
	}
	view(id){
		console.log("view");
		
		let profile=this.profiles.find(x => x._id == id);
		
		//};
		//console.log(navigationExtras);
		this._dataService.data=profile;
		this._router.navigate(["/view"]);
	}
	
	delete(id)
	{
		this._profilesService.delete(id).subscribe(res=>
			{console.log(res)
			
				this.profiles=this.profiles.filter(item =>item._id!==id);
			},
		 error=>console.log(error));
	}

}


