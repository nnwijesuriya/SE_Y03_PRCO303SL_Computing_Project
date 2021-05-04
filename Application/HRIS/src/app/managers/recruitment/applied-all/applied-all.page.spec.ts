import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppliedAllPage } from './applied-all.page';

describe('AppliedAllPage', () => {
  let component: AppliedAllPage;
  let fixture: ComponentFixture<AppliedAllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedAllPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppliedAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
