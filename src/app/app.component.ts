import { Component } from '@angular/core';
import { User } from './model/model.component';

const MODULES: User[] = [
  {
    id: 1,
    name: 'Seokjin',
    email: 'seokjin@gmail.com',
    age: 27
  },
  {
    id: 2,
    name: 'Jungi',
    email: 'jungi@gmail.com',
    age: 26
  },
  {
    id: 3,
    name: 'Namjoon',
    email: 'namjoon@gmail.com',
    age: 25
  },
  {
    id: 4,
    name: 'Hoseok',
    email: 'hoseok@gmail.com',
    age: 25
  },
  {
    id: 5,
    name: 'Jimin',
    email: 'jimin@gmail.com',
    age: 24
  },
  {
    id: 6,
    name: 'Taehyung',
    email: 'taehyung@gmail.com',
    age: 24
  },
  {
    id: 7,
    name: 'Jungkook',
    email: 'jungkook@gmail.com',
    age: 22
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `<h1>Hello {{title}}</h1>
            <ul class="user">
                <li *ngFor="let eachUser of users"
                 [class.selected]="eachUser === selectedUser"
                 (click)="onSelect(eachUser)"
                >
                    <span class="badge">{{eachUser.id}}</span> {{eachUser.name}}
                </li>                
            </ul>
            <!--When selectedUser is not NULL, it come to that div-->
            <div *ngIf="selectedUser"> 
                <h2>You selected: {{selectedUser.name}} with details:</h2>
                <div><label>User's id: </label>{{selectedUser.id}}</div>
               <div>
                    <label>name: </label>
                    <input [(ngModel)]="selectedUser.name" placeholder="Edit your name here"/>
                </div>
            </div>
            
            
`,

  styles: [`
    .selected {
      background-color: red !important;
      color: white;
    }
    .users {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .users li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 1px;
    }
    .users li.selected:hover {
      background-color: red !important;
      color: white;
    }
    .users li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .users .text {
      position: relative;
      top: -3px;
    }
    .users .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: green;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 1px 0 0 1px;
    }`]
})
export class AppComponent {
  title = 'bai5-master-detail';
  users = MODULES;
  // module: User = {
  //   id: 1,
  //   name: 'Nam',
  //   email: 'eght',
  //   age: 34
  // }
}
