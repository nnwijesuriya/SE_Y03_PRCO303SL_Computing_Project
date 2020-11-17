import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisciplinaryPage } from './disciplinary.page';

describe('DisciplinaryPage', () => {
  let component: DisciplinaryPage;
  let fixture: ComponentFixture<DisciplinaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisciplinaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
