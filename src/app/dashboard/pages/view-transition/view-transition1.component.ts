import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [
    TitleComponent
  ],
  template: `
     <app-title Title="View Transitions 1"/>
     <section class="flex justify-start">
       <img 
        srcset="https://picsum.photos/id/237/200/300" 
        alt="picsum-dog"
        width="200"
        height="300"
        style="view-transition-name: hero1">
        <div class="bg-blue-500 w-56 h-56"
        style="view-transition-name: hero22">
        </div>
     </section>
  `,
  styles: ``,
  host: {'some-binding': 'view-transition'},
})
export default class ViewTransition1Component { }
