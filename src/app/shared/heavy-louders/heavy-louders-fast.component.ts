import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-louders-fast',
  imports: [
    CommonModule,
  ],
  template:`
     <section [ngClass]="['w-full', cssClass]">

       <ng-content/>
        
     </section>
  `,
  styles: ``,
})
export class HeavyLoudersFastComponent {
   @Input({ required: true}) 
   public cssClass!: string;
 }
