import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {};

  constructor(private router : Router,private auth: AuthService) { }

  ngOnInit() {
  }

  onLoginClick(){
    this.auth.login(this.user)
      .subscribe(
        result=>{
          sessionStorage.setItem('authtoken',result.token);
          this.router.navigateByUrl('/looged');
        },
      )
  }

}
