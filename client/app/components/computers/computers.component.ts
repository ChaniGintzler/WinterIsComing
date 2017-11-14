import { Component } from '@angular/core';
import {ComputersService} from '../../services/computers.service';
import {Computer} from '../../../computer';
import {Task} from '../../../Task';
declare var __moduleName: string;

@Component({
    moduleId: __moduleName,
  //moduleId: module.id,
  selector: 'computers',
  templateUrl: 'computers.component.html',
  providers:[ComputersService]
})

export class ComputersComponent { 
   
   computers:Computer[]; 
   compParam :Computer;
   now:Date;
   okHours:Number=2;
   newComp={ compName:"",
deptName:'',
barId:null
}
   
    constructor(private serv:ComputersService)
    {
        this.getComputers();
    }

   
    getComputers()
    {
      this.now=new Date(Date.now());
      this.serv.getFiles().subscribe(t=>
            {
                var i=0;
                this.computers=t;
                this.computers.forEach(cc=>
                    {
                        var path=cc.compName+"/c$/CardexFiles";
                        this.serv.getLastDate(path).subscribe(d=>{
                             cc.lastDate=d;
                             var hours = Math.abs((this.now.getTime() - (new Date(d)).getTime())/ (3600 * 1000)); 
                             if(hours >this.okHours)
                                {
                                  cc.isOk='!לא תקין';
                                }
                                else
                                    {
                                  cc.isOk='תקין';
                                     }
                        })
                    }
                );
             });
    }

    addComputer()
    {
        
       console.log(this.newComp);
    this.compParam={
        compName:this.newComp.compName,
        deptName:this.newComp.deptName,
        barId:this.newComp.barId,
        lastDate:null,
        isOk:''
    }
         this.serv.addComputer(this.compParam).subscribe(
            ()=> {console.log("success")
            this.newComp.compName='';
            this.newComp.deptName='';
            this.newComp.barId=null;
            this.computers.push(this.compParam);
            },
            error=>console.error(error)
         )
        console.log( 'comp');
        return;
    }
}
