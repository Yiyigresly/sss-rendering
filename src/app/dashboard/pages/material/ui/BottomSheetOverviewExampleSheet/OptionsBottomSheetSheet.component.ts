import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  imports: [
    MatListModule,
  ],
  templateUrl: './OptionsBottomSheetSheet.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottomSheetSheetComponent {

  private _bottomSheetRef =
    inject<MatBottomSheetRef<OptionsBottomSheetSheetComponent>>(MatBottomSheetRef);

  public openLink(event: MouseEvent){
     this._bottomSheetRef.dismiss();
     event.preventDefault();
  }
 }
