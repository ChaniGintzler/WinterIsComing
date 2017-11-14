import {Injectable} from '@angular/core';
import {Http, Headers , URLSearchParams, RequestOptions} from '@angular/http';
import {Computer} from '../../computer';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ComputersService{
    options: RequestOptions;
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }
    
    getFiles(){
        return this.http.get('/app/computers')
            .map(res => res.json());
              }

    addComputer(com:Computer){
        console.log('in service');
        const body=JSON.stringify(com);
        const headers=new Headers({'Content-Type':'application/json'});
        return this.http.post('/app/computer',body,{headers:headers});
    }

    getLastDate(compName)
    {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');    
        let myParams = new URLSearchParams();
        myParams.append('name', compName);		
        this.options = new RequestOptions({ headers: myHeaders, search: myParams });
       //console.log('dsadsdasda');
        return this.http
           .get('/app/lastfile',this.options).map(res => res.json());
          
            // let options = new RequestOptions({ headers: myHeaders, params: myParams });
            // return this.http.get('/app/lastfile/', options)
            // .map(res => res.json());
       
    }

}