//import { Routes } from '@angular/router';
// import { ProfilesComponent } from './profiles.component';
// import { ProfilesListComponent } from './list/profilesList.component';
// import { CreateProfileComponent } from './create/createProfile.component';
System.register(["./profiles.component", "./list/profilesList.component", "./create/createProfile.component", "./view/view.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var profiles_component_1, profilesList_component_1, createProfile_component_1, view_component_1, ProfilesRoutes;
    return {
        setters: [
            function (profiles_component_1_1) {
                profiles_component_1 = profiles_component_1_1;
            },
            function (profilesList_component_1_1) {
                profilesList_component_1 = profilesList_component_1_1;
            },
            function (createProfile_component_1_1) {
                createProfile_component_1 = createProfile_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            }
        ],
        execute: function () {//import { Routes } from '@angular/router';
            // import { ProfilesComponent } from './profiles.component';
            // import { ProfilesListComponent } from './list/profilesList.component';
            // import { CreateProfileComponent } from './create/createProfile.component';
            exports_1("ProfilesRoutes", ProfilesRoutes = [{
                    path: 'profiles',
                    component: profiles_component_1.ProfilesComponent,
                    children: [
                        { path: '', component: profilesList_component_1.ProfilesListComponent },
                        { path: 'create', component: createProfile_component_1.CreateProfileComponent },
                        //{path: 'view', component: ViewComponent}
                        { path: ':profileId', component: view_component_1.ViewComponent },
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=profiles.routes.js.map