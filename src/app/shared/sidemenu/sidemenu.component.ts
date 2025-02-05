import { CommonModule, TitleCasePipe } from '@angular/common';
import {
  Component,
  signal,
} from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  imports: [RouterModule, CommonModule, TitleCasePipe],
  templateUrl: './sidemenu.component.html',
  styles: ``,
})
export class SidemenuComponent {

  public menuItems: Route[] = routes
  .map((route) => route.children ?? [])
  .flat()
  .filter((route) => route && route.path)
  .filter((route) => !route.path?.includes(':'));
  
  public menu = signal<Route[]>(this.menuItems);
  
}
