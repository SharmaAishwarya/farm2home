import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../model/constant';
import { ServerResponse } from '../model/ServerResponse';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationCount = 0;
  public notification = new Set();
 base_url: string = BASE_URL;
  constructor(private http: HttpClient) { }


  getUserNotifications( userId): Observable<ServerResponse> {

    return this.http.get<ServerResponse>(this.base_url + 'user/userNotifications/' + userId);

  }

  removeNotifications(userId, notificationId): Observable<ServerResponse> {

    return this.http.get<ServerResponse>(this.base_url + 'user/removeNotification/' + userId + '/' + notificationId);
  }
 
}

