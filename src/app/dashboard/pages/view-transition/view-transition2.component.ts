import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [
    TitleComponent
  ],
  template: `
     <app-title Title="View Transitions 2"/>
     <section class="flex justify-end">
       <img 
        srcset="https://picsum.photos/id/237/200/300" 
        alt="picsum-dog"
        width="200"
        height="200"
        style="view-transition-name: hero2">
        <div class="fixed bottom-2 right-1 bg-blue-800 w-20 h-20 "
        style="view-transition-name: hero11">
        </div>
     </section>
  `,
  styles: ``,
  host: {'some-binding': 'view-transition'},
})
export default class ViewTransition2Component {
   
 }
