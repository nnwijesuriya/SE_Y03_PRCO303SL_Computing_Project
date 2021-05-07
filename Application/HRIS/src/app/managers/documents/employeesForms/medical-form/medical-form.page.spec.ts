import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicalFormPage } from './medical-form.page';

describe('MedicalFormPage', () => {
  let component: MedicalFormPage;
  let fixture: ComponentFixture<MedicalFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicalFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
