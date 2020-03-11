import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalCredentials } from 'src/app/models/local.credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-local-login',
  templateUrl: './local-login.component.html',
  styleUrls: ['./local-login.component.sass']
})
export class LocalLoginComponent implements OnInit {

  credentials: LocalCredentials;
  
  @Output() loginSuccess = new EventEmitter<boolean>();

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.credentials = new LocalCredentials({})
  }

  async login(): Promise<void> {
    const success: boolean = await this.auth.loginLocal(this.credentials);
    this.loginSuccess.emit(success);
  }

}