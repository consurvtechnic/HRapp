import { Component, OnInit } from '@angular/core';
import { PopoverController, } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { ProfilePage } from 'src/app/pages/profile/profile.page';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  site;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private nav:NavController,
    private popoverController: PopoverController) { }

  ngOnInit() {
    // this.siteInfo = this.navParams.get('site');
    console.log(this.site);
  }

  async signOut() {
    await this.authService.logout();
    this.popoverController.dismiss();
  }

  eventFromPopover() {
    this.popoverController.dismiss('edupala.com');
  }

  async navigateToProfilePage(){
    await this.router.navigate(['profile']);
    console.log('button is clicked');
    this.popoverController.dismiss();
  }

}