import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HRmanagersPage } from './hrmanagers.page';

describe('HRmanagersPage', () => {
  let component: HRmanagersPage;
  let fixture: ComponentFixture<HRmanagersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRmanagersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HRmanagersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
