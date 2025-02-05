import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoudersFastComponent } from '@shared/heavy-louders/heavy-louders-fast.component';
import { HeavyLoudersSlowComponent } from '@shared/heavy-louders/heavy-louders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [
    HeavyLoudersSlowComponent,
    TitleComponent,
    HeavyLoudersFastComponent
  ],
  templateUrl: './defer-option.component.html',
  styles: ``,
  host: {'some-binding': 'defer-option'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferOptionComponent { 

}
