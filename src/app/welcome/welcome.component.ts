import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name:any;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select('user')).subscribe(
      user => {
        if (user) {
          this.name = user.showUserName;
        }
      });
  }

}
