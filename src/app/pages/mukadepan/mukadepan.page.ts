import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constant';
import { Observable, Subscriber } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { PopoverController } from '@ionic/angular';
import { SettingComponent } from 'src/app/setting/setting.component';



@Component({
  selector: 'app-mukadepan',
  templateUrl: './mukadepan.page.html',
  styleUrls: ['./mukadepan.page.scss'],
})
export class MukadepanPage implements OnInit {

  public displayUserData: any;
  showStatus: boolean = false;
  

  public postData = {
    staff_id: '',
    action: 0,
    staff_name: '',
    checkin: '',
    checkout: '',
    id: '',
  }

  userInfo:any={};
  leaveDetail:any={}

  async settingsPopover(ev: any) {
    const siteInfo = { id: 1, name: 'edupala' };
    const popover = await this.popoverController.create({
      component: SettingComponent,
      event: ev,
      cssClass: 'popover_setting',
      componentProps: {
        site: siteInfo
      },
      translucent: true
    });

    popover.onDidDismiss().then((result) => {
      console.log(result.data);
    });

    return await popover.present();
    /** Sync event from popover component */

  }
  constructor(private router: Router,
    private toastCtrl: ToastController, 
    private authService: AuthService,
    private storageService: StorageService,
    private nav:NavController,
    private popoverController: PopoverController
    ) { 

      
    
  }

  ionViewWillEnter()
  {
    this.authService.getUserDataPromise()
    .then((res:any={})=>{
      // console.log(res);
      this.userInfo=res;


      this.authService.leavedetailPromise({staffid:this.userInfo.staff_id})
      .then(res=>{
        console.log(res);
        this.leaveDetail=res[0]
        
      },err=>{
        console.log(err);
      })


    },err=>{
      this.nav.navigateBack('login')
    })

  }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.displayUserData = res;
    })

  }

  /*this.authService.login(this.postData).subscribe((res: any) => {
        console.log('here',res)
        if(Array.isArray(res)) {
          this.storageService.store(AuthConstants.AUTH, res[0]);
          this.router.navigate(['./home/mukadepan']);
        } else {
          this.toastService.presentToast('Incorrect Name or Password');

        } 

      }*/

 checkInAction(){
    //let data = this.authService.getUserData();
    //console.log('i am clicked',this.displayUserData.staff_id);
    this.postData.staff_id = this.displayUserData.staff_id;
    this.postData.action = 0;
    this.authService.checkIn(this.postData).subscribe((res: any) => {
      console.log('checkin',res)} )  
}

  checkOutAction(){
    this.postData.staff_id = this.displayUserData.staff_id;
    this.postData.action = 1;
    this.authService.checkOut(this.postData).subscribe((res: any) => {
      this.authService.getUserData();
      console.log('checkout',res)} )
  }

  async showToast1(){
    await this.toastCtrl.create({
      message: "You've Check-In!",
      duration: 2000,
      position: 'middle',
      buttons: [{
        text: 'OK'
      }]
    }).then( res => res.present());
    document.getElementById("status").innerHTML = "You've Checked-In!";
  }

  async showToast2(){
    await this.toastCtrl.create({
      message: "You've Check-Out!",
      duration: 2000,
      position: 'middle',
      buttons: [{
        text: 'OK'
      }]
    }).then( res => res.present());
    document.getElementById("status").innerHTML = "You've Checked-Out!";
  }

 async showToast3(){
    await this.toastCtrl.create({
      message: "You're on Leave!",
      duration: 2000,
      position: 'middle',
      buttons: [{
        text: 'OK'
      }]
    }).then( res => res.present());
  }

  goToList(){
    this.postData.staff_id = this.displayUserData.staff_id;
    this.postData.action = 2;
    this.router.navigate(['listattendees']);
    this.authService.listName(this.postData).subscribe((res: any) => {
      console.log('golist',res)} )
  }

  
}
