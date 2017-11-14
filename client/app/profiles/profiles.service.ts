import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestMethod, Response} from '@angular/http';


@Injectable()
export class ProfilesService {
	private _baseURL = 'api/profiles';

	constructor (private _http: Http) {}

	create(profile: any): Observable<any> {
		console.log(this._baseURL);
		return this._http
			.post(this._baseURL, profile)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}
	
	read(profileId: string): Observable<any> {
		
		console.log("on servicedcccc")
		console.log(`${this._baseURL}/${profileId}`)

		return this._http
		//.get('api/profiles/aaa')
		.get(`${this._baseURL}/${profileId}`)
			.map((res: Response) =>res.json())
			.catch(this.handleError);
             // let id =1;
			// console.log("service list prof ffffff")
			// return this._http.get('api/ppp')
			// 	//.get('api/profiles/'+profileId)
			// 	.map((res: Response) =>console.log(res));
				//.catch(this.handleError);
		
	}

	update(profile: any): Observable<any> {
		return this._http
			.put(`${this._baseURL}/${profile._id}`, profile)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

	delete(profileId: any): Observable<any> {
		return this._http
			.delete(`${this._baseURL}/${profileId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}	
	
	list(): Observable<any> {
		console.log("service list prof")
		return this._http
			.get(this._baseURL)
			.map((res: Response) =>res.json());
			//.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.log("there is error profiles service"+ error)
		
		return Observable.throw(error.json().message || 'Server error');
	}
}