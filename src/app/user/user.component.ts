import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName="";
  isServerCreated = false;
  serverName = "";
  serverStatus = "";
  servers = [];
  constructor() {
    this.serverStatus = Math.random() >0.5 ? "Online": "Offline";
  }

  ngOnInit(): void {
  }

  createServer(){
    this.isServerCreated = true;
    this.serverName = this.serverName;
    this.servers.push(this.serverName);
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'Online'? 'Green' : 'pink';
  }
}
