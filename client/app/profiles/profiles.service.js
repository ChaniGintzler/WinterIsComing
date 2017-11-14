System.register(["rxjs/Rx", "rxjs/Observable", "rxjs/add/operator/map", "@angular/core", "@angular/http"], function (exports_1, context_1) {
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
    var Observable_1, core_1, http_1, ProfilesService;
    return {
        setters: [
            function (_1) {
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_2) {
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            ProfilesService = class ProfilesService {
                constructor(_http) {
                    this._http = _http;
                    this._baseURL = 'api/profiles';
                }
                create(profile) {
                    console.log(this._baseURL);
                    return this._http
                        .post(this._baseURL, profile)
                        .map((res) => res.json())
                        .catch(this.handleError);
                }
                read(profileId) {
                    console.log("on servicedcccc");
                    console.log(`${this._baseURL}/${profileId}`);
                    return this._http
                        .get(`${this._baseURL}/${profileId}`)
                        .map((res) => res.json())
                        .catch(this.handleError);
                    // let id =1;
                    // console.log("service list prof ffffff")
                    // return this._http.get('api/ppp')
                    // 	//.get('api/profiles/'+profileId)
                    // 	.map((res: Response) =>console.log(res));
                    //.catch(this.handleError);
                }
                update(profile) {
                    return this._http
                        .put(`${this._baseURL}/${profile._id}`, profile)
                        .map((res) => res.json())
                        .catch(this.handleError);
                }
                delete(profileId) {
                    return this._http
                        .delete(`${this._baseURL}/${profileId}`)
                        .map((res) => res.json())
                        .catch(this.handleError);
                }
                list() {
                    console.log("service list prof");
                    return this._http
                        .get(this._baseURL)
                        .map((res) => res.json());
                    //.catch(this.handleError);
                }
                handleError(error) {
                    console.log("there is error profiles service" + error);
                    return Observable_1.Observable.throw(error.json().message || 'Server error');
                }
            };
            ProfilesService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], ProfilesService);
            exports_1("ProfilesService", ProfilesService);
        }
    };
});
//# sourceMappingURL=profiles.service.js.map