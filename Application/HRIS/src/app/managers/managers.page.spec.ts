import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagersPage } from './managers.page';

describe('EmployeesPage', () => {
  let component: ManagersPage;
  let fixture: ComponentFixture<ManagersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
