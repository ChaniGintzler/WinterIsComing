 //import { Routes } from '@angular/router';
// import { ProfilesComponent } from './profiles.component';
// import { ProfilesListComponent } from './list/profilesList.component';
// import { CreateProfileComponent } from './create/createProfile.component';


// export const ProfilesRoutes: Routes = [{
//   path: 'profiles',
//   component: ProfilesComponent,
//   children: [
//     {path: '', component: ProfilesListComponent},
// 	{path: 'createProfile', component: CreateProfileComponent}
// 	// {path: ':articleId', component: ViewComponent},
// 	// {path: ':articleId/edit', component: EditComponent}
//   ],
// }];



import { Routes } from '@angular/router';

import { ProfilesComponent } from './profiles.component';
import { ProfilesListComponent } from './list/profilesList.component';
import { CreateProfileComponent } from './create/createProfile.component';
import { ViewComponent } from './view/view.component';


export const ProfilesRoutes: Routes = [{
  path: 'profiles',
  component: ProfilesComponent,
  children: [
	{path: '', component: ProfilesListComponent},
  {path: 'create', component: CreateProfileComponent},
	//{path: 'view', component: ViewComponent}
  {path: ':profileId', component: ViewComponent},
  ],
}];
