import { CalendarComponent } from "ionic2-calendar";
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController, PopoverController, NavController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalModalPage } from 'src/app/pages/cal-modal/cal-modal.page';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(private alertCtrl: AlertController, 
  @Inject(LOCALE_ID)private locale : string,
  public popoverController: PopoverController,
  private authService:AuthService,
  private nav:NavController,
  ) {}

  viewTitle="";
  
  @ViewChild(CalendarComponent) myCal:CalendarComponent;
  
  public postData = {
    staff_id: '',
    leavetype: '',
    reason: '',
    currentDate: '',
    endDate: '',
    image: '',
    halfday1: '',
    halfday2: '',
    data: '',
    status: ''
  }

  public displayUserData: any;

  userInfo:any={};
  leaveDetail:any=[];
  leave:any={};

  reason:any;
  currentDate:any;
  endDate:any;
  halfday1:any;
  halfday2:any;

    event={
    title:'',
    desc:'',
    startTime:'',
    endTime:'',
    allDay:false
  };
  
  minDate=new Date().toISOString();
  
  eventSource=[];
  
  calendar={
    mode:'month',
    currentDate: new Date(),
  }
  
  ngOnInit(){
    this.authService.userData$.subscribe((res: any) => {
    this.displayUserData = res;
    })
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
        this.leaveDetail=res[0];
        this.eventSource=this.leaveDetail;
      },err=>{
        console.log(err);
      })


    },err=>{
      this.nav.navigateBack('login')
    })

  }

  changeMode(mode){
    this.calendar.mode=mode;
  }

  back(){
    var swiper = document.querySelector('.swiper-container')['swiper']
    swiper.slidePrev();
  }

  next(){
    var swiper = document.querySelector('.swiper-container')['swiper']
    swiper.slideNext();
  }

  today(){
    this.calendar.currentDate= new Date();
  }

  async onEventSelected(event){
    let start = formatDate(event.startTime,'medium',this.locale);
    let end= formatDate(event.endTime,'medium',this.locale);

    const alert = await this.alertCtrl.create({
        header: event.title ,
        subHeader: event.desc,
        message :'From:'+ start +' <br><br>To: '+end,
        buttons:['OK']
    });
    alert.present();
  }

    onViewTitleChanged(title){
    this.viewTitle=title;    
  }
    onTimeSelected(ev){
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours()+1);
    this.event.endTime = (selected.toISOString());

  }

}
