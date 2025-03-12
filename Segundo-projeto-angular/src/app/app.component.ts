import { Component } from '@angular/core';

interface SidebarToggle{
  screenWidget: number;
  collapsed: boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Segundo-projeto-angular';

  isSidebarcollapsed = false;
  screenWidget = 0;

  onSidebarToggle(data: SidebarToggle): void {
    this.screenWidget = data.screenWidget;
    this.isSidebarcollapsed = data.collapsed



  }
}
