import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-auth',
  templateUrl: './local-auth.component.html',
  styleUrls: ['./local-auth.component.sass']
})
export class LocalAuthComponent implements OnInit {

  tab: 'login' | 'register' = 'login'
  modalOpen: boolean = false;
  @Input() isPage: boolean = true;

  

  constructor(
    public authService: AuthService,
    private toastr: ToastrService,
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