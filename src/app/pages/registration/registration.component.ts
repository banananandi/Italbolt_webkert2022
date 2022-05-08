import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide= true;
  registrationForm = new FormGroup({
    email: new FormControl(''),
    pw: new FormControl(''),
    repw: new FormControl(''),
    name: new FormGroup({
      lname: new FormControl(''),
      fname: new FormControl(''),
    }),
    birth: new FormControl('')
  });

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if((this.registrationForm.get('pw')?.value)== (this.registrationForm.get('repw')?.value)){
      //console.log(this.registrationForm.value);
      this.authService.signup(this.registrationForm.get('email')?.value, this.registrationForm.get('pw')?.value).then(cred => {
        //console.log(cred);
        this.router.navigateByUrl('/home');
      }).catch(error => {
        console.error(error);
      });
    }else{
      alert("A két jelszó nem egyezik!");
    }



  }

}
