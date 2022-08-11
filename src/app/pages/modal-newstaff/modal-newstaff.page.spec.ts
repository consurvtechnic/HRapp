import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalNewstaffPage } from './modal-newstaff.page';

describe('ModalNewstaffPage', () => {
  let component: ModalNewstaffPage;
  let fixture: ComponentFixture<ModalNewstaffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewstaffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalNewstaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
