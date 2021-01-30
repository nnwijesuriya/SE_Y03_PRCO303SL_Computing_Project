import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubFormPage } from './sub-form.page';

describe('SubFormPage', () => {
  let component: SubFormPage;
  let fixture: ComponentFixture<SubFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
