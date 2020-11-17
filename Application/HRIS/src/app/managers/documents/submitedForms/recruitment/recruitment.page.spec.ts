import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecruitmentPage } from './recruitment.page';

describe('RecruitmentPage', () => {
  let component: RecruitmentPage;
  let fixture: ComponentFixture<RecruitmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecruitmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
