import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecruitmentFormPage } from './recruitment-form.page';

describe('RecruitmentFormPage', () => {
  let component: RecruitmentFormPage;
  let fixture: ComponentFixture<RecruitmentFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecruitmentFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
