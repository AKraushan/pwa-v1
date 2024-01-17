import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  userInfo:any=[];
  constructor(private localServ:LocalStorageService, private authServ:AuthService, private router:Router){}
  ngOnInit(): void {
    this.userInfo =  this.localServ.getUserInfo("userInfo")[0]
  }

  doLogout(){
    this.authServ.doLogOut();
    // localStorage.clear();
    this.authServ._isLogedIn.next(false);
    this.router.navigate(["/login"]);
    
  }
}
