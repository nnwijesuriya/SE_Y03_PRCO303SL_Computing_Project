import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeeReleasePage } from './employee-release.page';

describe('EmployeeReleasePage', () => {
  let component: EmployeeReleasePage;
  let fixture: ComponentFixture<EmployeeReleasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReleasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeReleasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
