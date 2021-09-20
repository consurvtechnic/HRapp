import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeHRadminPage } from './home-hradmin.page';

describe('HomeHRadminPage', () => {
  let component: HomeHRadminPage;
  let fixture: ComponentFixture<HomeHRadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHRadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHRadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
