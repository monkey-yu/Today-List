import { Router } from '@angular/router';
import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { USER_NAME,LOGIN_TIME } from './../../services/local-storage/local-storage.namespace'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  username:string;
  constructor(
    private store:LocalStorageService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  login():void{
    this.store.set(LOGIN_TIME,Date().toLocaleString());
    this.store.set(USER_NAME,this.username);
    this.router.navigateByUrl('main');
  }
}
