import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecruitingPage } from './recruiting.page';

describe('RecruitingPage', () => {
  let component: RecruitingPage;
  let fixture: ComponentFixture<RecruitingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecruitingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
