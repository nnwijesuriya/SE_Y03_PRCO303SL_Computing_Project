import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyFormArrivalComponent } from './verify-form-arrival.component';

describe('VerifyFormArrivalComponent', () => {
  let component: VerifyFormArrivalComponent;
  let fixture: ComponentFixture<VerifyFormArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyFormArrivalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyFormArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
