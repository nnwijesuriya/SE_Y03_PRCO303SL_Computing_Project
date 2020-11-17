import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestLeavesPage } from './request-leaves.page';

describe('RequestLeavesPage', () => {
  let component: RequestLeavesPage;
  let fixture: ComponentFixture<RequestLeavesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLeavesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestLeavesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
