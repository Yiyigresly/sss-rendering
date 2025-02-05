import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
enum Grade {
   A = 'A',
   B = 'B',
   C = 'C',
   D = 'D',
   F = 'F',
}
@Component({
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './control-flow.component.html',
  styles: ``,
  host: { 'some-binding': 'control-flow' },
})
export default class ControlFlowComponent {
  public showContent = signal<boolean>(false);
  public grade = signal<Grade>(Grade.C);
  public framworks = signal<String[]>(['Angular','Vue', 'Svelte', 'React', 'Laravel', 'NextJS','cxxxxx']);
  public framworks2 = signal<String[]>(['d']);

  public toggleContent(){
     this.showContent.update( current => !current)
  }
  
}
