import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PurchasingPage } from './purchasing.page';

describe('PurchasingPage', () => {
  let component: PurchasingPage;
  let fixture: ComponentFixture<PurchasingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
