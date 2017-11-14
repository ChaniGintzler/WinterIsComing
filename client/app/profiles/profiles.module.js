System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "./profiles.routes", "./profiles.component", "./create/createProfile.component", "./list/profilesList.component", "./view/view.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, router_1, profiles_routes_1, profiles_component_1, createProfile_component_1, profilesList_component_1, view_component_1, ProfilesModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profiles_routes_1_1) {
                profiles_routes_1 = profiles_routes_1_1;
            },
            function (profiles_component_1_1) {
                profiles_component_1 = profiles_component_1_1;
            },
            function (createProfile_component_1_1) {
                createProfile_component_1 = createProfile_component_1_1;
            },
            function (profilesList_component_1_1) {
                profilesList_component_1 = profilesList_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            }
        ],
        execute: function () {
            ProfilesModule = class ProfilesModule {
            };
            ProfilesModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        router_1.RouterModule.forChild(profiles_routes_1.ProfilesRoutes),
                    ],
                    declarations: [
                        profiles_component_1.ProfilesComponent,
                        createProfile_component_1.CreateProfileComponent,
                        profilesList_component_1.ProfilesListComponent,
                        view_component_1.ViewComponent
                    ],
                    exports: [profiles_component_1.ProfilesComponent, profilesList_component_1.ProfilesListComponent],
                })
            ], ProfilesModule);
            exports_1("ProfilesModule", ProfilesModule);
        }
    };
});
//# sourceMappingURL=profiles.module.js.map