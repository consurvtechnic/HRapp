import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalNewstaffPage } from '../../pages/modal-newstaff/modal-newstaff.page';
//import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StaffPage implements OnInit {
  
  @Input() rows;
  @Output() focusOut: EventEmitter<number> = new EventEmitter<number>();
  isEdit : boolean = true;
  modelData: any;

  //public rows: any;
  delRow;
  enableEdit = false;
  enableEditIndex = null;

  constructor(private http: HttpClient,
    public modalController: ModalController) {}

  ngOnInit(): void {
    this.users();
  };

  onFocusOut() {
    this.focusOut.emit(this.rows);
  }

  users(): void {
    //this.service
    this.http.get('https://jsonplaceholder.typicode.com/users')
        //.users()
        .subscribe((response: any) => {
          console.log("staff",response)
          this.rows = response;
        });
  } 

  editRow(row) {
    this.rows.filter(row => row.isEditable).map(r => { r.isEditable = false; return r })
    row.isEditable = true;
    //this.isEdit = false;
  }
  
  saveRow(row){
    row.isEditable = false
  }

  addNew(){
    this.rows.push({
    name: '',
    value: ''
  })
  }

  deleteRow(row){
    /*console.log(row);
    this.delRow = this.rows.indexOf(row);
    this.rows.splice(this.delRow,1);
    console.log(this.data); */
    alert("delete");

  }

  async openIonModal() {
    const modal = await this.modalController.create({
      component: ModalNewstaffPage,
      componentProps: {
        'model_title': "Add New DynaConsurv Staff"
      }
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });
    return await modal.present();
  }

  /*
  segmentValue = '1';
  requests: any[] = [];
  donors: any[] = [];
  lineChart: any;
  newHeight = 0;

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit');
    this.donors = [
      { id: 1, name: 'Noriko Rusk', age: 25, position: 'Engineer', gender: 'Female', company: 'Consurv', photo: 'assets/images/4.png', distance: 0.5, phone: '9999900000', email: 'abc@xyz.com' },
      { id: 2, name: 'Carl Sweat', age: 22, position: 'Engineer', gender: 'Male', company: 'Consurv', photo: 'assets/images/2.png', distance: 2, phone: '9999900001', email: 'abc1@xyz.com' },
      { id: 3, name: 'Phoebe Jackson', age: 27, position: 'Engineer', gender: 'Female', company: 'Dyna', photo: 'assets/images/3.png', distance: 6, phone: '9999900002', email: 'abc2@xyz.com' },
      { id: 4, name: 'Bajrang Bali', age: 35, position: 'Engineer', gender: 'Male', company: 'Dyna', photo: 'assets/images/1.png', distance: 10, phone: '9999900003', email: 'abc3@xyz.com' },
      { id: 5, name: 'Lan T\'ang', age: 30, position: 'Engineer', gender: 'Male', company: 'Dyna', photo: 'assets/images/2.png', distance: 12, phone: '9999900004', email: 'abc4@xyz.com' },
      { id: 6, name: 'S. Dilshan', age: 45, position: 'Engineer', gender: 'Male', company: 'Dyna', photo: 'assets/images/2.png', distance: 14.5, phone: '9999900005', email: 'ab5@xyz.com' },
      { id: 7, name: 'Amy D\'Souza', age: 20, position: 'Engineer', gender: 'Female', company: 'Consurv', photo: 'assets/images/3.png', distance: 16.7, phone: '9999900006', email: 'abc6@xyz.com' }
    ];

    this.requests = [
      { id: 1, name: 'Jessika Lynch', age: 20, position: 'Engineer', gender: 'Female', company: 'Consurv', photo: 'assets/images/3.png', distance: 1, phone: '9999900010', email: 'xyz1@xyz.com' },
      { id: 2, name: 'Chris Manhattan', age: 29, position: 'IT Manager', gender: 'Male', company: 'Dyna', photo: 'assets/images/2.png', distance: 1.5, phone: '9999900020', email: 'xyz2@xyz.com' },
      { id: 3, name: 'Sanya Iyer', age: 45, position: 'Engineer', gender: 'Male', company: 'Dyna', photo: 'assets/images/4.png', distance: 3, phone: '9999900030', email: 'xyz3@xyz.com' },

    ];
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }


  scroll(event) {
    const value = event.detail.scrollTop;
    console.log(value, this.newHeight);
    if(value > 40) {
      this.newHeight += 5; // this.newHeight = this.newHeight + 5
    } else {
      this.newHeight = 0;
    }
    if(value > 180 && this.newHeight <= 65) {
      this.newHeight += 50;
    }
  }

  */

}

