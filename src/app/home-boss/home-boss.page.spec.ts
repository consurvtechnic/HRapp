import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeBossPage } from './home-boss.page';

describe('HomeBossPage', () => {
  let component: HomeBossPage;
  let fixture: ComponentFixture<HomeBossPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBossPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBossPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
