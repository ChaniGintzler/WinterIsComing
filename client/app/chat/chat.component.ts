import {Component} from '@angular/core';
import {ChatService} from './chat.service';
import {ActivatedRoute, ParamMap} from '@angular/router'
import {DataService} from '../services/data.service';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'chat',
  templateUrl: 'app/chat/chat.template.html',
  providers: [ChatService]
})
export class ChatComponent {
	messageText: string;
	messages: Array<any>;
	toUserObj:any;
	
	constructor(private _chatService: ChatService, private route: ActivatedRoute,
	private _dataService:DataService) {
		
		this.toUserObj=this._dataService.data;
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
			user:this.toUserObj.creator
			//'59e341d444336ea434ace7af' //chanigmail
         // 59e719340707c3c6ac8dfcd5  chani// chanig ??
		};

		this._chatService.emit('chatMessage', message);
		console.log(message);
		this.messages.push(message);
            
		this.messageText = ''
	}

	ngOnDestroy() {
		this._chatService.removeListener('chatMessage');
	}
}



