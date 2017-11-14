System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, ComputersService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            ComputersService = class ComputersService {
                constructor(http) {
                    this.http = http;
                    console.log('Task Service Initialized...');
                }
                getFiles() {
                    return this.http.get('/app/computers')
                        .map(res => res.json());
                }
                addComputer(com) {
                    console.log('in service');
                    const body = JSON.stringify(com);
                    const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post('/app/computer', body, { headers: headers });
                }
                getLastDate(compName) {
                    let myHeaders = new http_1.Headers();
                    myHeaders.append('Content-Type', 'application/json');
                    let myParams = new http_1.URLSearchParams();
                    myParams.append('name', compName);
                    this.options = new http_1.RequestOptions({ headers: myHeaders, search: myParams });
                    //console.log('dsadsdasda');
                    return this.http
                        .get('/app/lastfile', this.options).map(res => res.json());
                    // let options = new RequestOptions({ headers: myHeaders, params: myParams });
                    // return this.http.get('/app/lastfile/', options)
                    // .map(res => res.json());
                }
            };
            ComputersService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], ComputersService);
            exports_1("ComputersService", ComputersService);
        }
    };
});
//# sourceMappingURL=computers.service.js.map