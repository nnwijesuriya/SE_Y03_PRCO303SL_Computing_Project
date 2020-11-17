import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PTOrequestFormPage } from './ptorequest-form.page';

describe('PTOrequestFormPage', () => {
  let component: PTOrequestFormPage;
  let fixture: ComponentFixture<PTOrequestFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTOrequestFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PTOrequestFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
