import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnWorkFormPage } from './return-work-form.page';

describe('ReturnWorkFormPage', () => {
  let component: ReturnWorkFormPage;
  let fixture: ComponentFixture<ReturnWorkFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnWorkFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnWorkFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
