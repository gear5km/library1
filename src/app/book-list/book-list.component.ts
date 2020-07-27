import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  user
  constructor(navBar: NavBarComponent) {
    //this.user = navBar.getUser()
    this.user = navBar.user1
  }
  

  ngOnInit(): void {
    
  }

}
