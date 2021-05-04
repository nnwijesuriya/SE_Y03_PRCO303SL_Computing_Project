import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RtabsPage } from './rtabs.page';

describe('RtabsPage', () => {
  let component: RtabsPage;
  let fixture: ComponentFixture<RtabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RtabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
