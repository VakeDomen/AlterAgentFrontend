import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-local-auth',
  templateUrl: './local-auth.component.html',
  styleUrls: ['./local-auth.component.sass']
})
export class LocalAuthComponent implements OnInit {

  tab: 'login' | 'register' = 'login'
  modalOpen: boolean = false;

  

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit() {
    
  }

  handleLoginAttempt(success: boolean): void {
    if (success) {
      this.modalOpen = false;
    }
  }

  handleRegistrationAttempt(success: boolean): void {
    if (success) {
      this.modalOpen = false;
    }
  }

}