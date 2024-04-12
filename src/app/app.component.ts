import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    NgbCollapseModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cap-app';

  isCollapsed : boolean = true;

  onClickCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  getOppotitVal(): boolean {
    return !this.isCollapsed;
  }

  setCollapsed(): void{
    this.isCollapsed = true;
  }
}