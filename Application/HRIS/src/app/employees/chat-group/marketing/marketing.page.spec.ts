import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarketingPage } from './marketing.page';

describe('MarketingPage', () => {
  let component: MarketingPage;
  let fixture: ComponentFixture<MarketingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarketingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
