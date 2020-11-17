import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccidentFormPage } from './accident-form.page';

describe('AccidentFormPage', () => {
  let component: AccidentFormPage;
  let fixture: ComponentFixture<AccidentFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccidentFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
