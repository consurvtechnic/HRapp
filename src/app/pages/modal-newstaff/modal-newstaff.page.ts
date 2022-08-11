import { Component, OnInit, Input, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-newstaff',
  templateUrl: './modal-newstaff.page.html',
  styleUrls: ['./modal-newstaff.page.scss'],
})
export class ModalNewstaffPage implements OnInit {
 // @Input() model_title: string;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
  }

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    ic: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  submitForm() {
    console.log(this.contactForm.value);
  }

  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

}

