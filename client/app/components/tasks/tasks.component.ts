import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';
declare var __moduleName: string;
@Component({
  //moduleId: module.id,
  moduleId: __moduleName,
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})

export class TasksComponent { 
   tasks:Task[];
    constructor(private serv:TaskService)
    {
       this.serv.getTasks().subscribe(t=>
        {
            console.log(t);
            this.tasks=t;
         });
    }

   
   
}
