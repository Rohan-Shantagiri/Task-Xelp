import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {};

  constructor(private auth: AuthService,private router : Router) { }

  ngOnInit() {
  }

  onRegisterClick(){
    this.auth.registration(this.user)
      .subscribe(
        result =>{
          sessionStorage.setItem('authtoken',result.token);
          this.router.navigateByUrl('/looged')
        },
        error => {
          console.log(error);
        }
      )
  }

}
