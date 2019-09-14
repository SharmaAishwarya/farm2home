import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  Feedback } from '../model/feedback';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { ServerResponse } from '../model/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*',
      'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    })
  };
  private feedback_list : string ="http://localhost:3330/farmer2home/feedback/list/";

  private create_feedback : string = "http://localhost:3330/farmer2home/feedback/create"

  private get_feedback :string = "http://localhost:3330/farmer2home/feedback/get/"

  user_list : string ="http://localhost:3330/farmer2home/user";

  constructor(private http:HttpClient) { }

  /**
   * @method getting the list of feedback from the database using userId
   * @param userid 
   */
  getfeedbacks(userid) : Observable<ServerResponse>
  {
    
    return this.http.get<ServerResponse>(this.feedback_list+userid);
  }

  /**
   * @method getting the feedback from database using feedback id
   * @param fid 
   */
  getfeedback(fid) : Observable<ServerResponse>
  {
    
    return this.http.get<ServerResponse>(this.get_feedback+fid);
  }

  /**
   * @method getting the user from the database
   */
  getUser():Observable<User[]>
  {
    return this.http.get<User[]>(this.user_list  + "/list/");
  }

  /**
   * @method creating a feedback from the UI and storing it in database
   * @param feedback 
   */
  createfeedbacks(feedback:Feedback):Observable<Feedback>
  {
    return this.http.post<Feedback>(this.create_feedback ,JSON.stringify(feedback),{ headers: this.httpOptions.headers });
  }
}
