import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliciesPage } from './policies.page';

describe('PoliciesPage', () => {
  let component: PoliciesPage;
  let fixture: ComponentFixture<PoliciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
