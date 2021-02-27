import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ETabsPage } from './e-tabs.page';

describe('ETabsPage', () => {
  let component: ETabsPage;
  let fixture: ComponentFixture<ETabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ETabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
