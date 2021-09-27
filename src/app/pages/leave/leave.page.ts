import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {

  userData:any={};

  constructor(
    private modal:ModalController,
    private storage:StorageService,
    private authService:AuthService,
    private httpService:HttpService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.userData=this.storage.modalData;
    console.log(this.userData);
  }
}
