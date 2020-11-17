import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PtoRequestPage } from './pto-request.page';

describe('PtoRequestPage', () => {
  let component: PtoRequestPage;
  let fixture: ComponentFixture<PtoRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtoRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PtoRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
