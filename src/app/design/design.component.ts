import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
declare function design(): void;

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent {
  constructor() {
    design();
  }
}
