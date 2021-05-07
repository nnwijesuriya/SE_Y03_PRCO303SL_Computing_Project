import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PtoRequestFormPage } from './pto-request-form.page';

describe('PtoRequestFormPage', () => {
  let component: PtoRequestFormPage;
  let fixture: ComponentFixture<PtoRequestFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtoRequestFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PtoRequestFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
