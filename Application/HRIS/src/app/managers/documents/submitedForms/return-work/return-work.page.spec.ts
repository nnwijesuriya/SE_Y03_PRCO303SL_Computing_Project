import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnWorkPage } from './return-work.page';

describe('ReturnWorkPage', () => {
  let component: ReturnWorkPage;
  let fixture: ComponentFixture<ReturnWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnWorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
