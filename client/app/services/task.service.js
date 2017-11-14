System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map"], function (exports_1, context_1) {
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
    var core_1, http_1, TaskService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            TaskService = class TaskService {
                constructor(http) {
                    this.http = http;
                    console.log('Task Service Initialized...');
                }
                getTasks() {
                    return this.http.get('/api/tasks')
                        .map(res => res.json());
                }
                addTask(newTask) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post('/api/task', JSON.stringify(newTask), { headers: headers })
                        .map(res => res.json());
                }
                deleteTask(id) {
                    return this.http.delete('/api/task/' + id)
                        .map(res => res.json());
                }
                updateStatus(task) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.put('/api/task/' + task._id, JSON.stringify(task), { headers: headers })
                        .map(res => res.json());
                }
            };
            TaskService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], TaskService);
            exports_1("TaskService", TaskService);
        }
    };
});
//# sourceMappingURL=task.service.js.map