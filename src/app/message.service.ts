import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  //--------------------------------------------------
  //liveOrLocalUrl = 'http://localhost:3000';
  liveOrLocalUrl = 'https://chatbotaiapi.onrender.com';
  //--------------------------------------------------
  constructor(private http: HttpClient) { }

  sendMessage(message: string) {
    return this.http.post(this.liveOrLocalUrl + '/message', { prompt: message });
    //https://chatpdfaibot.onrender.com/ -- CHANGED
  }
}
