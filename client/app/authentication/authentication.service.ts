import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthenticationService {
	public user = window['user'];

	private _signinURL = 'api/auth/signin';
	private _signupURL = 'api/auth/signup';

	constructor (private http: Http) {
		
	}

	isLoggedIn(): boolean {
		return (!!this.user);
	}

	private _userInOut = new BehaviorSubject(this.user);
	OnUserInOut$ = this._userInOut.asObservable();
	
	signin(credentials: any): Observable<any> {
    	let body = JSON.stringify(credentials);
    	let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });

		return this.http.post(this._signinURL, body, options)
						.map(res =>
							 {
								 this.user = res.json()
								 this._userInOut.next(this.user);
							})
                        .catch(this.handleError)
  	}

  	signup(user: any): Observable<any> {
    	let body = JSON.stringify(user);
    	let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });

		return this.http.post(this._signupURL, body, options)
                        .map(res => this.user = res.json())
                        .catch(this.handleError)
  	}

	  list()
	  {
		  return this.http.get('api/users').map(res=>res.json());
	  }
	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().message || 'Server error');
	}
}