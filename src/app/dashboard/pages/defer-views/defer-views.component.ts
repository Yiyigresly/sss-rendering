
import { Component } from '@angular/core';
import { HeavyLoudersSlowComponent } from '@shared/heavy-louders/heavy-louders-slow.component';


@Component({
  imports: [
    HeavyLoudersSlowComponent
  ],
  templateUrl: './defer-views.component.html',
  styles: ``,
  host: {'some-binding': 'defer-views'},
})
export default class DeferViewsComponent  {
  
  

   
}
