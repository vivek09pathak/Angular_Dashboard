import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class Account {
  name: string;
  pic: string;
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  account:Account=new Account();

  constructor() { 
    this.init();
  }

  init(){
    this.account.name="Alice";
    this.account.pic="https://img00.deviantart.net/e7d3/i/2016/357/2/1/_cm____cuppycakiie_by_kirimatsu-daskshu.png";
  }

  getAccount():Observable<Account>{
    return of(this.account);
  }
}