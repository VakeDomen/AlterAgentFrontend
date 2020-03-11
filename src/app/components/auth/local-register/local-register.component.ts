import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-local-register',
  templateUrl: './local-register.component.html',
  styleUrls: ['./local-register.component.sass']
})
export class LocalRegisterComponent implements OnInit {

  user: User;
  validationPassword: string;

  @Output() registrationAttempt = new EventEmitter<boolean>();

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.user = new User();
  }

  async register(): Promise<void> {
    if (this.user.password === this.validationPassword) {
      const success = await this.authService.registerLocal(this.user);
      this.registrationAttempt.emit(success)
    }
  }

}