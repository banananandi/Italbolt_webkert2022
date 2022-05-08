import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  pw = new FormControl('');
  hide = true;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

async login() {
  this.authService.login(this.email.value, this.pw.value).then(cred =>{
    //console.log(cred);
    this.router.navigateByUrl('/home');
  }).catch(error => {
    console.error(error);
  });

}
}
