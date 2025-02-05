import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
//services
import { UsersService } from '@services/users.service';
//interfaces
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { Togglecase } from '../../../pipes/togglecase.pipe';


@Component({
  imports: [
    TitleComponent, 
    Togglecase,
  ],
  templateUrl: './user.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _userServ = inject(UsersService);
  //signals
  //!Toma un obsevable y devuelve un señal
  public user = toSignal(
    this._route.params
    .pipe(switchMap(({ id }) => this._userServ.getUserById(id)))
  );
  public fullName = computed(() =>{
     
    if (!this.user()) return 'Información del usuario'
    return  `${ this.user()?.first_name } - ${ this.user()?.last_name }`;
  })

  ngOnInit(): void {
    //  this.getUser();
  }

  // getUser(){
  //   this._route.params
  //     .pipe(
  //        switchMap(({ id }) => this._userServ.getUserById(id))
  //     )
  //     .subscribe( user =>{
  //        if (!user) return this._router.navigateByUrl('/dashboard/list-users');
  //        console.log(user);

  //        return
  //     })
  // }
}
