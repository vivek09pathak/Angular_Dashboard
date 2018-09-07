import { Component, OnInit, Input } from '@angular/core';
import { AccountService, Account } from '../../services/account.service';

@Component({
  selector: 'app-access-account',
  templateUrl: './access-account.component.html',
  styleUrls: ['./access-account.component.css']
})
export class AccessAccountComponent implements OnInit {
  // dp:string;
  // dn:string;
  account: Account;

  constructor(private accountService: AccountService) {
   }

  ngOnInit() {
    this.accountService.getAccount().subscribe(account => this.account = account);
  }

}
