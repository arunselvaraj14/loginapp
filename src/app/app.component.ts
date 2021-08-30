import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean=true
  title = 'login';
  constructor(private router:Router){}
  login(){
    this.router.navigateByUrl('/login')
    this.show = false
  }
  log(){
    this.show!=false
  }

}
