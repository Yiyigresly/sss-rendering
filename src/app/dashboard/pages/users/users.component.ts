import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces';
import { SortUserByPipe } from '../../../guards';
import { UpperCasePipe } from '@angular/common';

@Component({
  imports: [
    TitleComponent,
    RouterModule,
    SortUserByPipe,
    UpperCasePipe
  ],
  templateUrl: './users.component.html',
  styles: ``,
  host: {'some-binding': 'users'},
})
export default class UsersComponent {
  
  private usersService = inject(UsersService);
  public users = computed<User[]>(()=> this.usersService.users());

 }
