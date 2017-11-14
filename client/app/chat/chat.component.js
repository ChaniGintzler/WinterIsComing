System.register(["@angular/core", "./chat.service", "@angular/router", "../services/data.service", "rxjs/add/operator/switchMap"], function (exports_1, context_1) {
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
    var core_1, chat_service_1, router_1, data_service_1, ChatComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            ChatComponent = class ChatComponent {
                constructor(_chatService, route, _dataService) {
                    this._chatService = _chatService;
                    this.route = route;
                    this._dataService = _dataService;
                    this.toUserObj = this._dataService.data;
                    console.log(this.toUserObj);
                }
                ngOnInit() {
                    this.messages = new Array();
                    //this.userId=this.route.snapshot.params['id']
                    this._chatService.on('userMessage', (msg) => {
                        this.messages.push(msg);
                    });
                    this._chatService.on('chatMessage', (msg) => {
                        this.messages.push(msg);
                    });
                }
                sendMessage() {
                    var message = {
                        text: this.messageText,
                        user: this.toUserObj.creator
                        //'59e341d444336ea434ace7af' //chanigmail
                        // 59e719340707c3c6ac8dfcd5  chani// chanig ??
                    };
                    this._chatService.emit('chatMessage', message);
                    console.log(message);
                    this.messages.push(message);
                    this.messageText = '';
                }
                ngOnDestroy() {
                    this._chatService.removeListener('chatMessage');
                }
            };
            ChatComponent = __decorate([
                core_1.Component({
                    selector: 'chat',
                    templateUrl: 'app/chat/chat.template.html',
                    providers: [chat_service_1.ChatService]
                }),
                __metadata("design:paramtypes", [chat_service_1.ChatService, router_1.ActivatedRoute,
                    data_service_1.DataService])
            ], ChatComponent);
            exports_1("ChatComponent", ChatComponent);
        }
    };
});
//# sourceMappingURL=chat.component.js.map