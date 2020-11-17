import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccidentreportFormPage } from './accidentreport-form.page';

describe('AccidentreportFormPage', () => {
  let component: AccidentreportFormPage;
  let fixture: ComponentFixture<AccidentreportFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentreportFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccidentreportFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
