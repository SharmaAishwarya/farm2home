import { Injectable } from '@angular/core';
var SockJs = require("sockjs-client");
var Stomp = require("stompjs/lib/stomp.js").Stomp;
@Injectable()
export class WebSocketService {
  // Open connection with the back-end socket
  public connect() {
    let socket = new SockJs(`http://localhost:3330/socket`);

    let stompClient = Stomp.over(socket);

    return stompClient;
  }
}
