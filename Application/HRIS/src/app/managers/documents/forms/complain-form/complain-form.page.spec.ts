import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComplainFormPage } from './complain-form.page';

describe('ComplainFormPage', () => {
  let component: ComplainFormPage;
  let fixture: ComponentFixture<ComplainFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComplainFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
