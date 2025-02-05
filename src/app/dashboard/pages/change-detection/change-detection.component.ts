import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title Title="Change Detection" />

    <pre>{{ frameworkSignal() | json }}</pre>
    <pre>{{ framework | json }}</pre>
    <pre>{{ currentFramwork() | json }}</pre>
  `,
  styles: ``,
  host: { 'some-binding': 'change-detection' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {

  public frameworkSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });
  public framework = {
    name: 'Angular',
    releaseDate: 2016,
  };
  public currentFramwork = computed(()=> this.frameworkSignal())

  constructor() {
    setTimeout(() => {
      //signal
      this.frameworkSignal.update( value => ({
        ...value,
        name: 'React Avanzado 2222',
      }));

      //property
      this.framework.name = 'laravel 2';
      this.framework.releaseDate = 2025;
    }, 3000);
  }
}
