import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  displayBurgerMenu = false;

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.displayBurgerMenu = false;
    });
  }
}
