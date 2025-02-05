import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces';

@Pipe({
  name: 'sortUserBy'
})

export class SortUserByPipe implements PipeTransform {
  transform(users: User[], sortBy?: 'first_name' | 'last_name'): User[] {
    
    if (sortBy === "first_name") {
      return users.sort((a, b) => 
        a.first_name.toLowerCase() > b.first_name.toLowerCase() ? 1 : -1);
    }
    if (sortBy === "last_name") {
      return users.sort((a, b) => 
        a.last_name.toLowerCase() > b.last_name.toLowerCase() ? 1 : -1);
    }
    return users
  }
}