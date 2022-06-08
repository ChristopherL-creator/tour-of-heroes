import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(message: string): void{ // mano a mano che creo messaggi, verrrano messi dentor arryamessaggi
    this.messages.push(message);
  }

  clear(): void{
    this.messages = [];
  }
}
