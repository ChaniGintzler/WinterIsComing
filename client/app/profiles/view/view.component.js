System.register(["@angular/core", "@angular/router", "../../authentication/authentication.service", "../profiles.service"], function (exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1, profiles_service_1, ViewComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (profiles_service_1_1) {
                profiles_service_1 = profiles_service_1_1;
            }
        ],
        execute: function () {
            ViewComponent = class ViewComponent {
                constructor(_profileService, _router, _route, _authenticationService) {
                    this._profileService = _profileService;
                    this._router = _router;
                    this._route = _route;
                    this._authenticationService = _authenticationService;
                    this.allowEdit = false;
                }
                ngOnInit() {
                    console.log("view");
                    this.currentUser = this._authenticationService.user;
                    this.routingObserver = this._route.params.subscribe(params => {
                        // console.log(params)
                        let profileId = params['profileId'];
                        this._profileService
                            .read(profileId)
                            .subscribe(prof => {
                            console.log(prof);
                            this.profile = prof;
                            //this.allowEdit = (this.currentUser && this.currentUser._id === this.profile.creator._id);              
                        });
                    });
                }
                save() {
                    this._profileService.update(this.profile).subscribe(error => this.errorMessage = error);
                }
            };
            ViewComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    selector: 'view',
                    templateUrl: 'view.template.html',
                    providers: [profiles_service_1.ProfilesService]
                }),
                __metadata("design:paramtypes", [profiles_service_1.ProfilesService,
                    router_1.Router,
                    router_1.ActivatedRoute,
                    authentication_service_1.AuthenticationService])
            ], ViewComponent);
            exports_1("ViewComponent", ViewComponent);
        }
    };
});
//# sourceMappingURL=view.component.js.map