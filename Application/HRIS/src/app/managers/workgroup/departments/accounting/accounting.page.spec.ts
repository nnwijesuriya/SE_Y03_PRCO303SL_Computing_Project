import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountingPage } from './accounting.page';

describe('AccountingPage', () => {
  let component: AccountingPage;
  let fixture: ComponentFixture<AccountingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
