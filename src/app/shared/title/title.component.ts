import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: `./title.component.html`,
  styles: ``,
})
export class TitleComponent {
  @Input({ required: true, alias: 'Title' })
  public title!: string;
  @Input({ transform : booleanAttribute})
  public withShadow: boolean = false;

}
