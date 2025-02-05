import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

//material
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { OptionsBottomSheetSheetComponent } from './ui/BottomSheetOverviewExampleSheet/OptionsBottomSheetSheet.component';
@Component({
  selector: 'app-material',
  imports: [
    MatButtonModule,
    MatSlideToggle,
    MatBadgeModule,
    MatIconModule,
    MatBottomSheetModule,
  ],
  templateUrl: `./material.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MaterialComponent {

  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    // se enviar el nuevo componente
    this._bottomSheet.open(OptionsBottomSheetSheetComponent);
  }
 }
