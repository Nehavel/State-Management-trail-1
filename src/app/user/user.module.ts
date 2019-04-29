import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { NameComponent } from './name/name.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';
@NgModule({
  declarations: [NameComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    StoreModule.forFeature('user', reducer)
  ]
})
export class UserModule { }
