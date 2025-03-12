import { Component, EventEmitter, Output} from '@angular/core';
import { NavROUTES } from './nav-bar-routes';

interface SidebarToggle{
  screenWidget: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    @Output() onToggleSidebar: EventEmitter<SidebarToggle> = new EventEmitter
    collapsed = true;
    screenWidget = 0;

    navRotas = NavROUTES;

    // Método para alternar o estado de collapsed
    toggleSidebar(expand: boolean): void {
      this.collapsed = !expand;  // Inverte o estado de collapsed
      this.onToggleSidebar.emit({ collapsed: this.collapsed, screenWidget: this.screenWidget });
    }
  }

