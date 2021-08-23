import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AuthConstants } from 'src/app/config/auth-constant';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.page.html',
  styleUrls: ['./applyleave.page.scss'],
})
export class ApplyleavePage implements OnInit {

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

  userInfo:any={};
  leaveDetail:any={};

  leaveBalance=10;
  leaveType:any;
  leaveTypeChoices:any=[];

  reason:any;
  currentDate:any;
  endDate:any;
  halfday1:any;
  halfday2:any;
  image='';

  constructor(private toastCtrl: ToastController, 
    private router: Router, 
    private authService: AuthService, 
    private storageService: StorageService,
    private toastService: ToastService,
    private nav:NavController,
    private http:HttpService,
    ) {}


   async showToastLeave(){
    await this.toastCtrl.create({
      message: "Done!",
      duration: 2000,
      position: 'middle',
      buttons: [{
        text: 'OK'
      }]
    }).then( res => res.present());
  }

  ngOnInit() { }

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
        this.getLeaveType();
      },err=>{
        console.log(err);
      })


    },err=>{
      this.nav.navigateBack('login')
    })

  }

  getLeaveType()
  {
    this.http.get('http://consurv.no-ip.biz/leave/leavetype')
    .then(res=>{
      console.log(res);
      this.leaveTypeChoices=res;
    })
  }

  /*validateInputs() {
    let staff_id = this.postData.staff_id;
    let leavetype = this.postData.leavetype;
    let reason = this.postData.reason;
    let currentDate = this.postData.currentDate;
    let endDate = this.postData.endDate;
    let image = this.postData.image;
    let halfday1 = this.postData.halfday1;
    let halfday2 = this.postData.halfday2;

    return (this.postData.staff_id && this.postData.leavetype && this.postData.reason && this.postData.currentDate
      && this.postData.endDate && this.postData.image && this.postData.halfday1 && this.postData.halfday2);
  }*/

   applyCuti(){
    // this.postData.staff_id;
    // this.postData.currentDate;
    // this.postData.endDate;
    // this.postData.halfday1;
    // this.postData.halfday2;
    // this.postData.leavetype;
    // this.postData.reason;
    //   this.authService.applyleave(this.postData).subscribe((res: any) => {
    //     console.log('apply',res)} )

    let startDate= this.getCorrectDateFormat(this.currentDate);
    let endDate= this.getCorrectDateFormat(this.endDate);


    // staff_id(from user data),
    // leavetype(typeid from HRAppGetLeaveType),
    // reason(user input string),
    // currentDate(in string),
    // endDate(in string),
    // image(leave it null),
    // halfday1( 1=full day, 2=morning, 3=evening )
    // halfday2( 1=full day, 2=morning, 3=evening )



    let pack_data={


      staff_id:this.userInfo.staff_id, //ok
      leavetype:this.leaveType.toString(),//ok
      reason:this.reason, //ok
      currentDate:this.currentDate, //ok
      endDate:this.endDate, //ok
      halfday1:this.halfday1.toString(),//ok
      halfday2:this.halfday2.toString(),//ok
      image:''//ok
    }

    console.log('pack_',pack_data);

    this.authService.applyleave(pack_data)
    .then(res=>{
      console.log(res);
      this.nav.navigateForward('home/mukadepan');
    },err=>{
      console.log(err);
      this.nav.navigateForward('home/mukadepan');
    })

  }




  getCorrectDateFormat(dateTemp)
  {

    const theDate=new Date(dateTemp);

    const fullYear=theDate.getFullYear();

    let fullMonth;
    let monthTemp=Number(theDate.getMonth())+1


    if(Number(monthTemp)<10)
    {
      fullMonth=`0${monthTemp}`;
    }
    else
    {
      fullMonth=monthTemp.toString();
    }


    let fullDay;
    let dayTemp=Number(theDate.getDate())


    if(Number(dayTemp)<10)
    {
      fullDay=`0${dayTemp}`;
    }
    else
    {
      fullDay=dayTemp.toString();
    }



    const fullDate=`${fullYear}-${fullMonth}-${fullDay}`;

    // console.log(fullDate);

    return fullDate;

  }


}
