System.register(["@angular/core", "@angular/router", "../../profiles/profiles.service", "../../authentication/authentication.service", "../../services/data.service"], function (exports_1, context_1) {
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
    var core_1, router_1, profiles_service_1, authentication_service_1, data_service_1, ProfilesListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profiles_service_1_1) {
                profiles_service_1 = profiles_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }
        ],
        execute: function () {
            ProfilesListComponent = class ProfilesListComponent {
                constructor(_profilesService, _router, _dataService, _authenticationService) {
                    this._profilesService = _profilesService;
                    this._router = _router;
                    this._dataService = _dataService;
                    this._authenticationService = _authenticationService;
                }
                ngOnInit() {
                    this._profilesService.list()
                        .subscribe(pr => { this.profiles = pr; console.log(pr); }, error => console.log("Error: ", error));
                    //	console.log(this.profiles);
                    this._authenticationService.list().subscribe(users => {
                        this.users = users;
                        console.log(users);
                    }, error => console.log(error));
                }
                openChat(toUser) {
                    console.log(toUser);
                    let toUserObj = this.profiles.find(x => x._id == toUser);
                    //};
                    //console.log(navigationExtras);
                    this._dataService.data = toUserObj;
                    this._router.navigate(["/chat"]); //,{id:toUser}
                    //this.windowView.pushWindow(MyWindowComponent);
                }
                view(id) {
                    console.log("view");
                    let profile = this.profiles.find(x => x._id == id);
                    //};
                    //console.log(navigationExtras);
                    this._dataService.data = profile;
                    this._router.navigate(["/view"]);
                }
                delete(id) {
                    this._profilesService.delete(id).subscribe(res => {
                        console.log(res);
                        this.profiles = this.profiles.filter(item => item._id !== id);
                    }, error => console.log(error));
                }
            };
            ProfilesListComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    //moduleId: module.id,
                    selector: 'list',
                    //template:'dddddddd'
                    //templateUrl: 'app/profiles/list/profilesList.template.html',
                    templateUrl: 'profilesList.template.html',
                    styles: ['profilesList.styles.css'],
                }),
                __metadata("design:paramtypes", [profiles_service_1.ProfilesService, router_1.Router,
                    data_service_1.DataService,
                    authentication_service_1.AuthenticationService])
            ], ProfilesListComponent);
            exports_1("ProfilesListComponent", ProfilesListComponent);
        }
    };
});
//# sourceMappingURL=profilesList.component.js.map