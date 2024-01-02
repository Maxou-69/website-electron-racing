import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  // @Input() activePane: SlideType = 'bottom';
}

type SlideType = 'left' | 'right';