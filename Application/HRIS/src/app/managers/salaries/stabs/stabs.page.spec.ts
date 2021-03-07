import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StabsPage } from './stabs.page';

describe('StabsPage', () => {
  let component: StabsPage;
  let fixture: ComponentFixture<StabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
