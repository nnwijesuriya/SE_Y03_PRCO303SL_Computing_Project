import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResearchPage } from './research.page';

describe('ResearchPage', () => {
  let component: ResearchPage;
  let fixture: ComponentFixture<ResearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
