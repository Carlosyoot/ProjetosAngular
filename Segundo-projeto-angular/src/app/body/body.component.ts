import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() screenWidget = 0;


  getBodyClass(): string {
    let StyleClass = ''

    console.log("body")
    console.log(this.collapsed)
    console.log(this.screenWidget)

    if(this.collapsed && this.screenWidget > 768){
      StyleClass = 'body-trimmed'
    }
    else if (this.collapsed && this.screenWidget <= 768 && this.screenWidget > 0){
      StyleClass = 'body-md-screen'
    }

    return ''
  }
}
