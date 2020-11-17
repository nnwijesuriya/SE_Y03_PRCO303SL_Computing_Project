import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicalPage } from './medical.page';

describe('MedicalPage', () => {
  let component: MedicalPage;
  let fixture: ComponentFixture<MedicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
