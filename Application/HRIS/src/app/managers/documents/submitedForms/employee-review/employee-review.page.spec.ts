import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeeReviewPage } from './employee-review.page';

describe('EmployeeReviewPage', () => {
  let component: EmployeeReviewPage;
  let fixture: ComponentFixture<EmployeeReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
