import { Component, OnInit, NgModule, Injectable, Input  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { userName } from './loginModel'
import { isNull } from 'util';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

@Injectable({providedIn:'root'})

export class NavBarComponent implements OnInit {
  userInput = new FormControl('');
  //user1 = new userName(this.userInput)
  constructor() {   }
  user1
  message
  
  getUser() {
    return this.user1
  }

  onSubmit() {
      alert("Welcome " + this.userInput.value);
      this.user1 = new userName(this.userInput.value)
    }

  ngOnInit(): void {
    //this.user1 = new userName(this.userInput)
    

    }
  }


