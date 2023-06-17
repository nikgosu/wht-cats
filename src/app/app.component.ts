import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WHT-CATS';
  isOpened = true

  ngOnInit() {
    this.isOpened = !(window.innerWidth <= 800)
  }
  onResize(event: any) {
    this.isOpened = !(event.target.innerWidth <= 800);
  }
  handleMenuClick(event: boolean) {
    this.isOpened = event ? event : !this.isOpened
  }
}
