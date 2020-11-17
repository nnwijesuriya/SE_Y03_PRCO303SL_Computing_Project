import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComplainPage } from './complain.page';

describe('ComplainPage', () => {
  let component: ComplainPage;
  let fixture: ComponentFixture<ComplainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComplainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
