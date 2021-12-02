import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private auth : AuthService,private router : Router){}


  onLogout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login')
  }
}
