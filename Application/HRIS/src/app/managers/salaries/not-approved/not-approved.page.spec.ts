import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotApprovedPage } from './not-approved.page';

describe('NotApprovedPage', () => {
  let component: NotApprovedPage;
  let fixture: ComponentFixture<NotApprovedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotApprovedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotApprovedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
