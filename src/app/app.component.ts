import { animation } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Italbolt';
  page = '';
  routes: Array<string> = [];
  loggedInUser?: firebase.default.User | null;


  constructor(private router: Router, private authService: AuthService) {

  }

  @HostBinding('class') className = '';
  togglecontrol = new FormControl(false);

  ngOnInit(): void {
    this.togglecontrol.valueChanges.subscribe(val => {
      this.className = val ? 'darkTheme' : '';
    });

    this.routes = this.router.config.map(conf => conf.path) as string[];

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage)) {
        this.page = currentPage;
      }
    });

    this.authService.isUserLoggedIn().subscribe(user => {
      //console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });

  }
  MenuToggle(sidenav: MatSidenav) {
    sidenav.toggle();
    
  }
  changePage(selectedPage: string) {
    this.router.navigateByUrl(selectedPage);
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    
    }
  }

  logout(_?: boolean) {
    this.authService.logout().then(() => {
      console.log('Logged out successfully.');
    }).catch(error => {
      console.error(error);
    });
  }


}

