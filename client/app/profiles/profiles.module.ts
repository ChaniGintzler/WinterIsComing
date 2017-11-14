import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProfilesRoutes } from './profiles.routes';
import { ProfilesComponent } from './profiles.component';
import { CreateProfileComponent } from './create/createProfile.component';
import { ProfilesListComponent } from './list/profilesList.component';
import {ViewComponent} from './view/view.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ProfilesRoutes),
  ],
  declarations: [
    ProfilesComponent,
    CreateProfileComponent,
    ProfilesListComponent,
    ViewComponent
  ],
  exports:[ProfilesComponent,ProfilesListComponent],//
  
})
export class ProfilesModule {}
