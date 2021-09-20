import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PopoverController, } from '@ionic/angular';

@Component({
  selector: 'app-home-hradmin',
  templateUrl: './home-hradmin.page.html',
  styleUrls: ['./home-hradmin.page.scss'],
})
export class HomeHRadminPage implements OnInit {

 datauser: any;

  public postData = {
    staff_id: '',
    leavetype: '',
    reason: '',
    currentDate: '',
    endDate: '',
    image: '',
    halfday1: '',
    halfday2: '',
    
  }

  constructor(
    private authService: AuthService, 
    private router: Router,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
   
  }

  mintakCuti(){

  }
   async navigateToDashboard() {
    await this.router.navigate(['./mukadepan-admin']);
    console.log('button is clicked');
  }

   async navigateToStaff() {
    await this.router.navigate(['./staff']);
    console.log('button is clicked');
  }

   async navigateToLeaveRules() {
    await this.router.navigate(['./leaverules']);
    console.log('button is clicked');
  }

   async signOut() {
    await this.authService.logout();
    this.popoverController.dismiss();
  }

}
