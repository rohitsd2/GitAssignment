import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

  // private gitClientId = 'fbdb82b6446792c5b768';
  // private gitClientSecretKey = '010c05e884fde608810090f678a937d7f5cb3178';
  constructor(private http: Http) { }

  getUser(userName) {
    userName = userName ? userName : 'rohitsd2';
    return this.http.get(`https://api.github.com/search/users?q=${userName}`)
      .map(res => res.json());
  }

  getUserDetails(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}/repos`)
      .map(res => res.json());
  }
}
