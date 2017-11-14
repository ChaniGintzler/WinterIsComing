import {Component,ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { Http } from '@angular/http';

import {ProfilesService} from '../profiles.service';
//import { FileUploader } from 'ng2-file-upload';

declare var google: any;
const URL = 'http://localhost:3000/api/picture';

declare var __moduleName: string;
@Component({
  moduleId: __moduleName,
  selector: 'createProfile',
  templateUrl: 'createProfile.template.html'
})
export class CreateProfileComponent {
	
	@ViewChild('fileInput') fileInput;
 
	filesToUpload: Array<File> = [];
	profile: any = {};
	errorMessage: string;
 //public uploader:FileUploader = new FileUploader({url: URL});
	constructor(private _router:Router,
				private _profilesService: ProfilesService,private http: Http) {}
	
	ngOnInit() {
		//  this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem('', response, status, '');
    //     this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem('', response, status, '');

  	}
  
	create() {
		this._profilesService.create(this.profile).subscribe(
							 				  				 error =>  this.errorMessage = error);
	}
	fileChangeEvent(event)
	{
		console.log(event.target.files[0]);
		console.log(event.target.result);
		console.log(event.target.value);
		
		}
}