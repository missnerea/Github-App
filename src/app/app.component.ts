import { Component } from '@angular/core';
import { Http,Response } from  '@angular/http';
import { User } from './user';
import { Repository } from './repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Github Search Tool';
  userName = '';
  details:User;
}
