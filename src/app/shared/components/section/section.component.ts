import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.less',
})
export class SectionComponent {

  title = input<string>('title');
}
