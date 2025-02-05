import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { 
   User, 
   UsersResponse,
   UserResponse 
} from '../interfaces';
import { catchError, delay, map, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  #router = inject(Router);
  #_http = inject(HttpClient);
  #_state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed(()=> this.#_state().users)

  constructor(){
     this.getUsers(); 
  }
  getUsers() {
    const url = 'https://reqres.in/api/users';
    this.#_http.get<UsersResponse>(url)
    .pipe(delay(1500))
    .subscribe( resp => this.#_state.set({
      loading: true,
      users: resp.data
    }));
    
  }
  getUserById(id: string): Observable<User|null> {

    if (!id )  return of(null);

    const url = `https://reqres.in/api/users/${ id }`;

    return this.#_http.get<UserResponse>(url)
     .pipe(
       map( ({ data }) => data ? data : null ),
       catchError(() =>{
          this.#router.navigateByUrl('/dashboard/list-users')
          return of(null)
       })
     )
   
  }
}
