import { Component } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    isOpen = false;
    isOpenBody = false;
    faClose = faClose;
}
