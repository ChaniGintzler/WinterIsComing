import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { RouterModule }   from '@angular/router';

import {AppComponent} from './app.component';
import { AppRoutes }       from './app.routes';

import {TasksComponent} from './components/tasks/tasks.component';
import {ComputersComponent} from './components/computers/computers.component';
import {Computer} from '../Computer'

import { AuthenticationService } from './authentication/authentication.service';
import {HomeModule} from './home/home.module';
import {AuthenticationModule} from './authentication/authentication.module';
import {ProfilesModule} from './profiles/profiles.module';
import {ChatModule} from './chat/chat.module';
import {ProfilesService} from './profiles/profiles.service';
import {DataService} from './services/data.service';
//import { WindowViewModule } from 'ng2-window-view';
//import { WindowViewService } from './core/window-view.service';
@NgModule({
  imports:
   [ BrowserModule,
    HttpModule,
    FormsModule,
    HomeModule,
    AuthenticationModule,
    ProfilesModule ,
    ChatModule,
  // WindowViewModule,
    RouterModule.forRoot(AppRoutes),
  ],
  declarations: [AppComponent, TasksComponent,ComputersComponent],
  providers:[AuthenticationService, ProfilesService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
