System.register(["@angular/core", "../../services/computers.service"], function (exports_1, context_1) {
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
    var core_1, computers_service_1, ComputersComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (computers_service_1_1) {
                computers_service_1 = computers_service_1_1;
            }
        ],
        execute: function () {
            ComputersComponent = class ComputersComponent {
                constructor(serv) {
                    this.serv = serv;
                    this.okHours = 2;
                    this.newComp = { compName: "",
                        deptName: '',
                        barId: null
                    };
                    this.getComputers();
                }
                getComputers() {
                    this.now = new Date(Date.now());
                    this.serv.getFiles().subscribe(t => {
                        var i = 0;
                        this.computers = t;
                        this.computers.forEach(cc => {
                            var path = cc.compName + "/c$/CardexFiles";
                            this.serv.getLastDate(path).subscribe(d => {
                                cc.lastDate = d;
                                var hours = Math.abs((this.now.getTime() - (new Date(d)).getTime()) / (3600 * 1000));
                                if (hours > this.okHours) {
                                    cc.isOk = '!לא תקין';
                                }
                                else {
                                    cc.isOk = 'תקין';
                                }
                            });
                        });
                    });
                }
                addComputer() {
                    console.log(this.newComp);
                    this.compParam = {
                        compName: this.newComp.compName,
                        deptName: this.newComp.deptName,
                        barId: this.newComp.barId,
                        lastDate: null,
                        isOk: ''
                    };
                    this.serv.addComputer(this.compParam).subscribe(() => {
                        console.log("success");
                        this.newComp.compName = '';
                        this.newComp.deptName = '';
                        this.newComp.barId = null;
                        this.computers.push(this.compParam);
                    }, error => console.error(error));
                    console.log('comp');
                    return;
                }
            };
            ComputersComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    //moduleId: module.id,
                    selector: 'computers',
                    templateUrl: 'computers.component.html',
                    providers: [computers_service_1.ComputersService]
                }),
                __metadata("design:paramtypes", [computers_service_1.ComputersService])
            ], ComputersComponent);
            exports_1("ComputersComponent", ComputersComponent);
        }
    };
});
//# sourceMappingURL=computers.component.js.map