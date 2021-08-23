import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  displayUserData: any;
  userInfo:any={};

  oldPassword:any;
  newPassword:any;
  showChangePassword=false;

  constructor(
    private authService: AuthService,
    private http:HttpService
    ) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.displayUserData = res;
    })

    this.authService.getUserDataPromise()
    .then((res:any={})=>{
      // console.log(res);
      this.userInfo=res;


      // this.authService.leavedetailPromise({staffid:this.userInfo.staff_id})
      // .then(res=>{
      //   console.log(res);
        
      // },err=>{
      //   console.log(err);
      // })


    })


  }

  logoutAction(){
    this.authService.logout();
  }

  changePassword()
  {
    // console.log('User Info',this.userInfo);
//     URL: http://consurv.no-ip.biz/leave/changepassword
// Expected variable : username, olpass, newpass
    this.http.post('changepassword',{username:this.userInfo.staff_id,olpass:this.oldPassword,newpass:this.newPassword})
    .subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
 
}
