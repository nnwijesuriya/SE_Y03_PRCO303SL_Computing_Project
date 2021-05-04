import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeclinedPage } from './declined.page';

describe('DeclinedPage', () => {
  let component: DeclinedPage;
  let fixture: ComponentFixture<DeclinedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclinedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeclinedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
