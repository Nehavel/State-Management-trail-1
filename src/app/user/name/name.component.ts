import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
name:String;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select('user')).subscribe(
      user => {
        if (user) {
          this.name = user.showUserName;
        }
      });
  }
submit(){
  this.store.dispatch({
    type: 'UPDATE_USER_NAME',
    payload: this.name
  });
  console.log(this.name);

}
}

 