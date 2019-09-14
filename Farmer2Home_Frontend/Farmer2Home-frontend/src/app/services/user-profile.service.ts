import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { ServerResponse } from '../model/ServerResponse';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  private _url = 'http://localhost:3330/farmer2home/user';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*',
      'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    })
  };
  /**
   * @method gets particular user using id from database
   * @param id 
   */
  getUser(id: string): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this._url + '/get/' + id);
  }

  /**
   * @method deletes particular user using id from database
   * @param id 
   */
  deleteUser(id: string): Observable<ServerResponse> {
    return this.http.delete<ServerResponse>(this._url + '/delete/' + id, { headers: this.httpOptions.headers });
  }

  /**
   * @method updates certain fields of user
   * @param user 
   */
  updateUser(user: User): Observable<ServerResponse> {
    return this.http.put<ServerResponse>(this._url + '/update', JSON.stringify(user), { headers: this.httpOptions.headers });
  }

  /**
   * @method logsout user
   * @param id 
   */
  logoutUser(id: string): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this._url + '/logout/' + id);
  }

}
