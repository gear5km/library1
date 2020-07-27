import { Component, OnInit, Input } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
  @Input() public user
  user2
  username
  constructor(navBar: NavBarComponent) {
    //this.user = navBar.getUser()
    this.user2 = navBar.user1
    this.username =navBar.getUser()
  }

  
  
  ngOnInit(): void {
    
  }

}

