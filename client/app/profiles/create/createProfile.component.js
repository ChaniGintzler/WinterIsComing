System.register(["@angular/core", "@angular/router", "@angular/http", "../profiles.service"], function (exports_1, context_1) {
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
    var core_1, router_1, http_1, profiles_service_1, URL, CreateProfileComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (profiles_service_1_1) {
                profiles_service_1 = profiles_service_1_1;
            }
        ],
        execute: function () {
            URL = 'http://localhost:3000/api/picture';
            CreateProfileComponent = class CreateProfileComponent {
                //public uploader:FileUploader = new FileUploader({url: URL});
                constructor(_router, _profilesService, http) {
                    this._router = _router;
                    this._profilesService = _profilesService;
                    this.http = http;
                    this.filesToUpload = [];
                    this.profile = {};
                }
                ngOnInit() {
                    //  this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem('', response, status, '');
                    //     this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem('', response, status, '');
                }
                create() {
                    this._profilesService.create(this.profile).subscribe(error => this.errorMessage = error);
                }
                fileChangeEvent(event) {
                    console.log(event.target.files[0]);
                    console.log(event.target.result);
                    console.log(event.target.value);
                }
            };
            __decorate([
                core_1.ViewChild('fileInput'),
                __metadata("design:type", Object)
            ], CreateProfileComponent.prototype, "fileInput", void 0);
            CreateProfileComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    selector: 'createProfile',
                    templateUrl: 'createProfile.template.html'
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    profiles_service_1.ProfilesService, http_1.Http])
            ], CreateProfileComponent);
            exports_1("CreateProfileComponent", CreateProfileComponent);
        }
    };
});
//# sourceMappingURL=createProfile.component.js.map